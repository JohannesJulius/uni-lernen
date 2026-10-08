'use strict';
// ---------- Claude-Chat zur aktuellen Lektion ----------
// Jede Lektion hat ihren eigenen Chat-Verlauf (state.chats[lektionId]). Der System-Prompt mit dem
// kompletten Lektionstext wird beim ersten Nachricht festgelegt und danach nie verändert, und der Verlauf
// wird nur angehängt – so bleiben Prompt-Cache und die Denk-Blöcke des Modells gültig.

const CHAT_MODELS = [
  { id: 'claude-opus-5-5', name: 'Claude Opus 5.5 (beste Erklärungen)', fallback: true },
  { id: 'claude-sonnet-5-5', name: 'Claude Sonnet 5.5 (schneller, günstiger)', fallback: true },
  { id: 'claude-haiku-5-5', name: 'Claude Haiku 5.5 (sehr günstig)', fallback: false },
];
const CHAT_QUICK = [
  'Erklär mir das Wichtigste dieser Lektion einfacher, mit einem anschaulichen Beispiel.',
  'Stell mir eine neue Übungsaufgabe zu dieser Lektion – die Lösung erst, wenn ich frage.',
  'Was sind typische Prüfungsfragen zu diesem Thema?',
];

const chat = { open: false, key: null, busy: null, hasKey: !!window.__HAS_API_KEY__, settings: false };
state.chats = state.chats || {};
state.chatModel = state.chatModel || CHAT_MODELS[0].id;

// --- Kontext ---
function chatContextKey() {
  const [, view, arg] = (location.hash || '#/heute').split('/');
  return view === 'lektion' && LESSON[arg] ? arg : 'allgemein';
}
function chatContextTitle(key) {
  if (key === 'allgemein') return 'Allgemeine Fragen';
  const l = LESSON[key]; return l ? l.title : key;
}

function chatSystemPrompt(key) {
  const base = `Du bist ein geduldiger, präziser Tutor für Studierende der Luft- und Raumfahrttechnik (Hochschule München, Wintersemester 2026). Sie lernen mit der Lern-App „Uni Lernen" und fangen bei null an – erkläre also Schritt für Schritt, ohne Vorwissen vorauszusetzen, aber ohne Ballast.

So antwortest du:
- Auf Deutsch, per du, klar gegliedert und eher knapp; lieber nachfragen als einen Roman schreiben.
- Formeln in LaTeX: $...$ im Text, $$...$$ für abgesetzte Formeln. Verwende dieselben Formelzeichen und Bezeichnungen wie die Lektion.
- Bei Übungsaufgaben aus der Lektion: zuerst einen Hinweis oder Ansatz geben; die vollständige Lösung erst, wenn ausdrücklich danach gefragt wird.
- Wenn dir in der Lektion etwas falsch oder missverständlich vorkommt, sag das offen und begründe es.
- Wenn eine Frage über die Lektion hinausgeht, beantworte sie trotzdem und sag dazu, in welchem Fach/Kapitel das Thema vorkommt.`;
  if (key === 'allgemein') {
    const cw = currentWeek();
    const week = cw ? `Aktuelle Planwoche: Woche ${cw.n} (${cw.from} bis ${cw.to}), ${cw.phase}. Lektionen dieser Woche: ${weekLessons(cw.n).map(l => `${SUB[l.subject].name}: ${l.title}`).join('; ')}.` : '';
    return `${base}

Gerade ist keine bestimmte Lektion geöffnet. Lernplan: ${C.plan.name}. Fächer: ${C.subjects.map(s => s.name).join(', ')}. ${week}`;
  }
  const l = LESSON[key];
  return `${base}

Die Studentin bzw. der Student hat gerade diese Lektion geöffnet:
Fach: ${SUB[l.subject].name} (${SUB[l.subject].long})
Lektion: ${l.title}
Kapitel: ${l.chapter || '–'}

Die Lektion ist in Markdown geschrieben. Blöcke wie :::def, :::satz, :::bsp, :::merke, :::achtung, :::formel stehen für Kästen; :::aufgabe enthält eine Übungsaufgabe mit ausklappbarer :::loesung; :::karte sind Karteikarten (Frage ??? Antwort). Hier ist der vollständige Text:

<lektion>
${SRC[key] || '(Text nicht geladen)'}
</lektion>`;
}

// --- Markdown + Mathe für Antworten ---
function chatRender(text) {
  const store = [];
  const tex = (t, display) => { try { return katex.renderToString(t, { displayMode: display, throwOnError: false, macros: { ...(C.macros || {}) }, strict: 'ignore' }); } catch { return esc(t); } };
  let s = String(text).replace(/\\\$/g, '@@DOLLAR@@');
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => { store.push(tex(t.trim(), true)); return `@@M${store.length - 1}@@`; });
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_, t) => { store.push(tex(t.trim(), true)); return `@@M${store.length - 1}@@`; });
  s = s.replace(/\$([^\$\n]+?)\$/g, (_, t) => { store.push(tex(t.trim(), false)); return `@@M${store.length - 1}@@`; });
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_, t) => { store.push(tex(t.trim(), false)); return `@@M${store.length - 1}@@`; });
  // Kein rohes HTML aus der Antwort übernehmen
  s = s.replace(/</g, '&lt;');
  let html = window.marked ? marked.parse(s, { gfm: true, breaks: true }) : esc(s).replace(/\n/g, '<br>');
  return html.replace(/@@M(\d+)@@/g, (_, i) => store[+i]).replace(/@@DOLLAR@@/g, '$');
}
const chatText = msg => typeof msg.content === 'string' ? msg.content : msg.content.filter(b => b.type === 'text').map(b => b.text).join('');

// --- Oberfläche ---
function chatEnsureDom() {
  if (document.getElementById('chat')) return;
  const fab = document.createElement('button');
  fab.id = 'chat-fab'; fab.title = 'Claude zu dieser Lektion fragen (⌘J)';
  fab.innerHTML = '<span>✦</span> Frag Claude';
  fab.addEventListener('click', () => chatToggle());
  document.body.appendChild(fab);
  const panel = document.createElement('aside');
  panel.id = 'chat';
  document.body.appendChild(panel);
  panel.addEventListener('click', chatClick);
  panel.addEventListener('keydown', e => {
    if (e.target.id === 'chat-input' && e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); chatSend(); }
  });
}

function chatToggle(force) {
  chat.open = force ?? !chat.open;
  document.body.classList.toggle('chat-open', chat.open);
  if (chat.open) { chatRenderPanel(); setTimeout(() => document.getElementById('chat-input')?.focus(), 50); }
}

function chatRenderPanel() {
  const panel = document.getElementById('chat'); if (!panel || !chat.open) return;
  chat.key = chatContextKey();
  const thread = state.chats[chat.key];
  const title = chatContextTitle(chat.key);
  const head = `<div class="chat-head"><div class="chat-title"><span class="chat-spark">✦</span><div><b>Claude</b><small title="${esc(title)}">${esc(title)}</small></div></div>
    <div class="chat-actions">
      <button class="chat-icon" data-chat="new" title="Neuer Chat zu dieser Lektion">＋</button>
      <button class="chat-icon" data-chat="settings" title="Einstellungen (API-Schlüssel, Modell)">⋯</button>
      <button class="chat-icon" data-chat="close" title="Schließen (⌘J)">✕</button>
    </div></div>`;
  let body;
  if (!window.webkit?.messageHandlers?.app) {
    body = `<div class="chat-empty"><p>Der eingebaute Chat funktioniert nur in der Mac-App. Du kannst aber direkt in claude.ai fragen:</p><button class="btn primary" data-chat="claudeai">In claude.ai öffnen ↗</button></div>`;
  } else if (!chat.hasKey || chat.settings) {
    body = chatSettingsHtml();
  } else {
    const msgs = (thread?.messages || []).map((m, i) => `<div class="chat-msg ${m.role}">${m.role === 'user' ? esc(chatText(m)).replace(/\n/g, '<br>') : chatRender(chatText(m))}</div>`).join('');
    const live = chat.busy && chat.busy.key === chat.key
      ? `<div class="chat-msg assistant live">${chat.busy.text ? chatRender(chat.busy.text) : `<span class="chat-thinking">${chat.busy.thinking ? 'denkt nach' : 'schreibt'}<i>.</i><i>.</i><i>.</i></span>`}</div>` : '';
    const intro = !msgs && !live ? `<div class="chat-empty"><p>${chat.key === 'allgemein' ? 'Stell eine Frage zu deinem Lernstoff.' : 'Frag alles zu dieser Lektion – Claude kennt den kompletten Text, alle Beispiele und Aufgaben.'}</p>
      ${chat.key !== 'allgemein' ? CHAT_QUICK.map(q => `<button class="chat-quick" data-quick="${esc(q)}">${esc(q)}</button>`).join('') : ''}</div>` : '';
    body = `<div class="chat-log" id="chat-log">${intro}${msgs}${live}${chat.error ? `<div class="chat-error">${esc(chat.error)}</div>` : ''}</div>
      <div class="chat-compose">
        <textarea id="chat-input" rows="3" placeholder="Frage stellen … (Enter = senden, ⇧Enter = neue Zeile)">${esc(chat.draft || '')}</textarea>
        <div class="chat-row">
          <button class="chat-link" data-chat="claudeai" title="Neuen Chat in deinem claude.ai-Konto starten – mit Lektion und Frage vorausgefüllt">In claude.ai öffnen ↗</button>
          <span class="spacer"></span>
          ${chat.busy ? '<button class="btn small" data-chat="stop">Stopp</button>' : '<button class="btn small primary" data-chat="send">Senden</button>'}
        </div>
      </div>`;
  }
  panel.innerHTML = head + body;
  const log = document.getElementById('chat-log'); if (log) log.scrollTop = log.scrollHeight;
  const input = document.getElementById('chat-input');
  if (input) input.addEventListener('input', () => { chat.draft = input.value; });
}

function chatSettingsHtml() {
  return `<div class="chat-settings">
    <h3>Claude-Chat einrichten</h3>
    <p>Der Chat nutzt die Claude-API mit <b>deinem eigenen API-Schlüssel</b>. So legst du ihn an:</p>
    <ol><li>Auf <a href="#" data-chat="console">console.anthropic.com</a> mit deinem Anthropic-Konto anmelden.</li>
      <li>Unter <b>Billing</b> etwas Guthaben aufladen (eine Frage kostet je nach Lektionslänge und Modell grob 1–5 Cent).</li>
      <li>Unter <b>API Keys</b> einen Schlüssel erstellen und hier einfügen.</li></ol>
    <p class="chat-note">Der Schlüssel wird nur im macOS-Schlüsselbund dieses Macs gespeichert und nur an api.anthropic.com gesendet. Ein claude.ai-Abo (Pro/Max) gilt nicht für die API – ohne Schlüssel kannst du aber jederzeit über „In claude.ai öffnen" in deinem normalen Konto fragen.</p>
    <label>API-Schlüssel</label>
    <input id="chat-key" type="password" placeholder="${chat.hasKey ? '•••••••• (gespeichert – zum Ändern neu einfügen)' : 'sk-ant-…'}" autocomplete="off">
    <label>Modell</label>
    <select id="chat-model">${CHAT_MODELS.map(m => `<option value="${m.id}" ${m.id === state.chatModel ? 'selected' : ''}>${esc(m.name)}</option>`).join('')}</select>
    <div class="chat-row" style="margin-top:14px">
      <button class="btn small primary" data-chat="savekey">Speichern</button>
      ${chat.hasKey ? '<button class="btn small" data-chat="deletekey">Schlüssel entfernen</button><button class="btn small" data-chat="back">Zurück zum Chat</button>' : ''}
      <span class="spacer"></span>
      <button class="chat-link" data-chat="claudeai">Ohne Schlüssel: claude.ai ↗</button>
    </div>
    ${chat.keyMsg ? `<p class="chat-note">${esc(chat.keyMsg)}</p>` : ''}
  </div>`;
}

function chatClick(e) {
  const quick = e.target.closest('[data-quick]');
  if (quick) { chatSend(quick.dataset.quick); return; }
  const t = e.target.closest('[data-chat]'); if (!t) return;
  e.preventDefault();
  const a = t.dataset.chat;
  if (a === 'close') chatToggle(false);
  else if (a === 'send') chatSend();
  else if (a === 'stop' && chat.busy) native('chatCancel', { id: chat.busy.id });
  else if (a === 'new') { if (chat.busy) return; delete state.chats[chat.key]; chat.error = null; save(); chatRenderPanel(); }
  else if (a === 'settings') { chat.settings = !chat.settings; chat.keyMsg = null; chatRenderPanel(); }
  else if (a === 'back') { chat.settings = false; chatRenderPanel(); }
  else if (a === 'console') native('openURL', { url: 'https://console.anthropic.com/settings/keys' });
  else if (a === 'claudeai') chatOpenClaudeAi();
  else if (a === 'savekey') {
    const model = document.getElementById('chat-model')?.value; if (model) { state.chatModel = model; save(); }
    const key = document.getElementById('chat-key')?.value.trim();
    if (key) { chat.keyMsg = 'Speichere …'; native('setApiKey', { key }); }
    else if (chat.hasKey) { chat.settings = false; chatRenderPanel(); }
    else { chat.keyMsg = 'Bitte einen API-Schlüssel einfügen.'; chatRenderPanel(); }
  }
  else if (a === 'deletekey') native('setApiKey', { key: '' });
}

window.onApiKeyChanged = (has, ok) => {
  chat.hasKey = has;
  chat.keyMsg = ok ? (has ? null : 'Schlüssel entfernt.') : 'Speichern im Schlüsselbund ist fehlgeschlagen.';
  if (ok && has) chat.settings = false;
  chatRenderPanel();
};

// --- claude.ai mit vorausgefülltem Prompt (läuft über das eigene claude.ai-Konto) ---
function chatOpenClaudeAi() {
  const key = chatContextKey();
  const question = (document.getElementById('chat-input')?.value || '').trim();
  let ctx = '';
  if (key !== 'allgemein') {
    const l = LESSON[key];
    const ziel = (SRC[key] || '').match(/:::ziel\s*\n([\s\S]*?)\n:::/);
    ctx = `Ich studiere Luft- und Raumfahrttechnik (HM München) und lerne gerade im Fach „${SUB[l.subject].name}" die Lektion „${l.title}"${l.chapter ? ` (${l.chapter})` : ''}.` + (ziel ? `\n\nLernziele der Lektion:\n${ziel[1].trim()}` : '');
  } else ctx = 'Ich studiere Luft- und Raumfahrttechnik (HM München) und lerne für mein Wintersemester.';
  let prompt = `${ctx}\n\nBitte erkläre auf Deutsch, Schritt für Schritt und ohne Vorwissen vorauszusetzen.${question ? `\n\nMeine Frage: ${question}` : ''}`;
  if (prompt.length > 6000) prompt = prompt.slice(0, 6000);
  native('openURL', { url: 'https://claude.ai/new?q=' + encodeURIComponent(prompt) });
}

// --- Senden und Streaming ---
function chatSend(textArg) {
  if (chat.busy) return;
  const input = document.getElementById('chat-input');
  const text = (textArg ?? input?.value ?? '').trim();
  if (!text) return;
  const key = chatContextKey();
  if (key !== 'allgemein' && !SRC[key]) { loadLesson(key, () => chatSend(text)); return; }
  const model = CHAT_MODELS.find(m => m.id === state.chatModel) || CHAT_MODELS[0];
  let thread = state.chats[key];
  if (!thread) thread = state.chats[key] = { system: chatSystemPrompt(key), messages: [], created: new Date().toISOString() };
  thread.messages.push({ role: 'user', content: [{ type: 'text', text }] });
  chat.draft = ''; chat.error = null;

  const body = {
    model: model.id,
    max_tokens: 16000,
    stream: true,
    system: [{ type: 'text', text: thread.system }],
    messages: thread.messages,
    output_config: { effort: 'medium' },
    cache_control: { type: 'ephemeral' },
  };
  const betas = [];
  if (model.fallback) { body.fallbacks = 'default'; betas.push('server-side-fallback-2026-07-01'); }
  const id = 'c' + Date.now().toString(36);
  chat.busy = { id, key, blocks: [], text: '', thinking: false, stop: null };
  native('chatSend', { id, body, betas });
  chatRenderPanel();
}

let chatRenderTimer;
function chatScheduleRender() { if (!chatRenderTimer) chatRenderTimer = setTimeout(() => { chatRenderTimer = null; chatRenderPanel(); }, 60); }

window.onChatEvent = (id, ev) => {
  const b = chat.busy; if (!b || b.id !== id || !ev) return;
  switch (ev.type) {
    case 'content_block_start': b.blocks[ev.index] = { ...ev.content_block }; if (ev.content_block.type === 'thinking') b.thinking = true; break;
    case 'content_block_delta': {
      const blk = b.blocks[ev.index]; const d = ev.delta; if (!blk || !d) break;
      if (d.type === 'text_delta') { blk.text = (blk.text || '') + d.text; b.thinking = false; }
      else if (d.type === 'thinking_delta') { blk.thinking = (blk.thinking || '') + d.thinking; b.thinking = true; }
      else if (d.type === 'signature_delta') blk.signature = d.signature;
      else if (d.type === 'citations_delta') (blk.citations = blk.citations || []).push(d.citation);
      break;
    }
    case 'message_delta': if (ev.delta?.stop_reason) b.stop = ev.delta.stop_reason; break;
    case 'error': chatFinish(ev.error?.message || 'Fehler beim Streamen.'); return;
    case 'app_error': chatFinish(ev.status === 401 ? 'Der API-Schlüssel wurde abgelehnt – bitte in den Einstellungen (⋯) prüfen.' : ev.message); return;
    case 'app_done': chatFinish(null, ev.cancelled); return;
  }
  b.text = b.blocks.filter(x => x && x.type === 'text').map(x => x.text || '').join('');
  chatScheduleRender();
};

function chatFinish(error, cancelled) {
  const b = chat.busy; chat.busy = null;
  const thread = state.chats[b.key];
  const blocks = b.blocks.filter(Boolean);
  const answered = !error && b.stop !== 'refusal' && blocks.some(x => x.type === 'text' && x.text);
  if (answered) {
    // Antwort unverändert anhängen (inkl. Denk-Blöcken) – der Verlauf wird nur ergänzt, nie umgeschrieben.
    thread.messages.push({ role: 'assistant', content: blocks });
    if (b.stop === 'max_tokens') chat.error = 'Die Antwort wurde wegen Längenbegrenzung abgeschnitten.';
  } else {
    // Unbeantwortete Frage wieder vom Ende entfernen, damit der Verlauf gültig bleibt.
    const last = thread.messages.pop();
    chat.draft = chatText(last);
    chat.error = error || (b.stop === 'refusal' ? 'Claude hat diese Anfrage abgelehnt. Formuliere die Frage bitte anders.' : cancelled ? null : 'Keine Antwort erhalten.');
    if (!thread.messages.length) delete state.chats[b.key];
  }
  save();
  chatRenderPanel();
}

// --- Einbindung ---
window.addEventListener('hashchange', () => { chat.error = null; chatRenderPanel(); });
document.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key === 'j') { e.preventDefault(); chatToggle(); } });
chatEnsureDom();
