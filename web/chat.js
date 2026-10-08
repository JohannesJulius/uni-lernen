'use strict';
// ---------- „Frag Claude": claude.ai rechts in der App ----------
// Der Button öffnet einen neuen claude.ai-Chat (eigenes Konto, keine API-Credits), in dem die aktuelle
// Lektion schon eingetragen ist. Man schreibt nur noch die eigene Frage dahinter und schickt ab.

// Alte API-Chat-Daten aus früheren Versionen aufräumen
if (state.chats || state.chatModel) { delete state.chats; delete state.chatModel; save(); }

const CLAUDE_URL_BUDGET = 12000; // Länge des kodierten Links – längere Links lehnen Server oft ab

function claudeLessonKey() {
  const [, view, arg] = (location.hash || '#/heute').split('/');
  return view === 'lektion' && LESSON[arg] ? arg : null;
}

// Lektionstext für den Chat: ohne Karteikarten, Lösungen als solche markiert
function claudeLessonText(src) {
  return src
    .replace(/:::karte[\s\S]*?\n:::/g, '')
    .replace(/:::(\w+)[ \t]*([^\n]*)/g, (_, type, title) => `[${type}${title ? ': ' + title : ''}]`)
    .replace(/\n:::\s*(?=\n|$)/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

window.claudePrompt = (inProject = false) => {
  const key = claudeLessonKey();
  // Im claude.ai-Projekt liegen alle Lektionen schon als Wissen – dann reicht ein kurzer Hinweis
  if (inProject) {
    if (!key) return 'Meine Frage: ';
    const l = LESSON[key];
    return `Ich bin gerade im Fach „${SUB[l.subject].name}" in der Lektion „${l.title}". Meine Frage: `;
  }
  const intro = 'Ich studiere Luft- und Raumfahrttechnik (HM München) und lerne mit meiner Lern-App.';
  const ask = '\n\nBitte erkläre auf Deutsch, Schritt für Schritt und ohne Vorwissen vorauszusetzen. Formeln gern in LaTeX. Bei Übungsaufgaben erst einen Hinweis geben, die Lösung nur auf Nachfrage.\n\nMeine Frage: ';
  if (!key) return `${intro}${ask}`;
  const l = LESSON[key];
  const head = `${intro} Gerade bin ich im Fach „${SUB[l.subject].name}" in der Lektion „${l.title}"${l.chapter ? ` (${l.chapter})` : ''}.`;
  const body = SRC[key] ? claudeLessonText(SRC[key]) : '';
  const fits = s => encodeURIComponent(s).length <= CLAUDE_URL_BUDGET;
  if (!body) return head + ask;
  // So viel vom Lektionstext wie in den Link passt, an Absatzgrenzen gekürzt
  const paras = body.split('\n\n');
  let text = '';
  for (const p of paras) {
    const next = text ? `${text}\n\n${p}` : p;
    if (!fits(`${head}\n\nHier ist die Lektion:\n"""\n${next}\n(… Rest der Lektion gekürzt)\n"""${ask}`)) break;
    text = next;
  }
  const cut = text.length < body.length ? '\n(… Rest der Lektion gekürzt)' : '';
  return text ? `${head}\n\nHier ist die Lektion:\n"""\n${text}${cut}\n"""${ask}` : head + ask;
};

function askClaude() {
  const key = claudeLessonKey();
  if (key && !SRC[key]) { loadLesson(key, askClaude); return; }
  if (window.webkit?.messageHandlers?.app) native('askClaude');
  else window.open('https://claude.ai/new?q=' + encodeURIComponent(window.claudePrompt()), '_blank');
}

const fab = document.createElement('button');
fab.id = 'chat-fab';
fab.title = 'Neuen Claude-Chat zu dieser Lektion öffnen (⌘J blendet Claude ein/aus)';
fab.innerHTML = '<span>✦</span> Frag Claude';
fab.addEventListener('click', askClaude);
document.body.appendChild(fab);
