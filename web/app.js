'use strict';
const C = window.CONTENT;
// ---------- Lernplan wählen (Vollplan / ohne Mathe 1 & TM 1) ----------
const SAVED = window.__STATE__ || (() => { try { return JSON.parse(localStorage.getItem('unilernen') || 'null'); } catch { return null; } })() || {};
C.plan = C.plans.find(p => p.id === SAVED.plan) || C.plans[0];
C.subjects = C.subjects.filter(s => C.plan.subjects.includes(s.id));
C.lessons = C.lessons.filter(l => C.plan.subjects.includes(l.subject)).map(l => Object.assign(l, { week: l.weeks[C.plan.id] ?? null }));
C.cards = C.cards.filter(c => C.plan.subjects.includes(c.subject));
const SUB = Object.fromEntries(C.subjects.map(s => [s.id, s]));
const LESSON = Object.fromEntries(C.lessons.map(l => [l.id, l]));
const CARD = Object.fromEntries(C.cards.map(c => [c.id, c]));
const bySubject = id => C.lessons.filter(l => l.subject === id);
const $ = (sel, el = document) => el.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let materials = window.__MATERIALS__ || {};
window.onMaterials = m => { materials = m; route(); };

// ---------- Lektionen nachladen ----------
const HTML = {};
const pending = {};
const SRC = {};
window.__lesson = (id, html, src) => { HTML[id] = html; if (src) SRC[id] = src; (pending[id] || []).forEach(f => f()); delete pending[id]; };
function loadLesson(id, cb) {
  if (HTML[id]) return cb();
  if (pending[id]) { pending[id].push(cb); return; }
  pending[id] = [cb];
  const s = document.createElement('script');
  s.src = `lessons/${encodeURIComponent(id)}.js?v=${C.ver || ''}`;
  s.onerror = () => { HTML[id] = '<p class="empty">Inhalt konnte nicht geladen werden.</p>'; window.__lesson(id, HTML[id]); };
  document.head.appendChild(s);
}

// ---------- Zustand ----------
const DEFAULT_STATE = { done: {}, exercised: {}, notes: {}, cards: {}, reviewLog: {}, last: null };
let state = Object.assign({}, DEFAULT_STATE, SAVED);
let saveTimer;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const json = JSON.stringify(state);
    if (window.webkit?.messageHandlers?.app) window.webkit.messageHandlers.app.postMessage({ action: 'save', state: json });
    else try { localStorage.setItem('unilernen', json); } catch {}
  }, 250);
}
const native = (action, data = {}) => window.webkit?.messageHandlers?.app?.postMessage({ action, ...data });
function saveNow() {
  clearTimeout(saveTimer);
  const json = JSON.stringify(state);
  if (window.webkit?.messageHandlers?.app) native('save', { state: json });
  else try { localStorage.setItem('unilernen', json); } catch {}
}
// Plan wechseln: Fortschritt bleibt erhalten, nur Wochenverteilung und sichtbare Fächer ändern sich.
window.setPlan = id => {
  if (!C.plans.some(p => p.id === id) || id === C.plan.id) return;
  state.plan = id; history.replaceState(null, '', '#/heute');
  if (window.webkit?.messageHandlers?.app) native('save', { state: JSON.stringify(state), reload: true });
  else { saveNow(); location.reload(); }
};
native('plans', { plans: C.plans.map(p => ({ id: p.id, name: p.name })), current: C.plan.id });

// ---------- Datum & Plan ----------
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const fmt = s => parse(s).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
function currentWeek() {
  const t = iso(today());
  return C.plan.weeks.find(w => t >= w.from && t <= w.to) || (t < C.plan.weeks[0].from ? C.plan.weeks[0] : null);
}
const weekLessons = (n, subj) => C.lessons.filter(l => l.week === n && (!subj || l.subject === subj));
const isDone = id => !!state.done[id];
function progress(list) { const n = list.filter(l => l.kind !== 'info').length; const d = list.filter(l => l.kind !== 'info' && isDone(l.id)).length; return { n, d, p: n ? d / n : 0 }; }

// ---------- Karteikarten (Leitner) ----------
const INTERVALS = [0, 1, 3, 7, 14, 30, 60];
function cardDue(id) { const s = state.cards[id]; return !s || s.due <= iso(today()); }
function cardsFor(subject, onlyLearned = true) {
  return C.cards.filter(c => (!subject || c.subject === subject) && (!onlyLearned || isDone(c.lesson)));
}
function dueCards(subject) { return cardsFor(subject).filter(c => cardDue(c.id)); }
function rateCard(id, r) {
  const s = state.cards[id] || { box: 0, seen: 0 };
  if (r === 0) s.box = 1; else if (r === 1) s.box = Math.max(1, s.box); else if (r === 2) s.box = Math.min(6, s.box + 1); else s.box = Math.min(6, s.box + 2);
  const d = today(); d.setDate(d.getDate() + (r === 0 ? 0 : INTERVALS[s.box]));
  s.due = iso(d); s.seen++; state.cards[id] = s;
  const k = iso(today()); state.reviewLog[k] = (state.reviewLog[k] || 0) + 1;
  save();
}

// ---------- Sidebar ----------
function renderSidebar(active) {
  const due = dueCards().length;
  const cw = currentWeek();
  $('#plan-switch').innerHTML = `<label>Lernplan</label><select id="plan-select">${C.plans.map(p => `<option value="${p.id}" ${p.id === C.plan.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select>`;
  $('#nav-main').innerHTML = [
    ['#/heute', '☀︎', 'Heute', cw ? `Wo ${cw.n}` : '', '#e0a020'],
    ['#/plan', '▦', 'Wochenplan', '', '#6b6a66'],
    ['#/karten', '❏', 'Karteikarten', due ? `<span class="badge">${due}</span>` : '', '#3b6fd8'],
    ['#/seite/abgleich', '⇄', 'Abgleich Skript ↔ Folien', '', '#2d7fb8'],
    ['#/seite/anleitung', '?', 'So lernst du mit der App', '', '#2e8b57'],
  ].map(([h, ic, t, m, col]) => `<a href="${h}" class="${active === h ? 'active' : ''}"><span class="nav-icon" style="background:${col}">${ic}</span><span class="nav-text">${t}</span><span class="nav-meta">${m}</span></a>`).join('');
  $('#nav-subjects').innerHTML = C.subjects.map(s => {
    const p = progress(bySubject(s.id));
    return `<a href="#/fach/${s.id}" class="${active === '#/fach/' + s.id ? 'active' : ''}"><span class="nav-icon" style="background:${s.color}">${s.icon}</span><span class="nav-text">${esc(s.name)}</span><span class="nav-meta">${s.placeholder && !p.n ? '–' : Math.round(p.p * 100) + '%'}</span></a>`;
  }).join('');
  const all = progress(C.lessons);
  const left = Math.max(0, Math.round((parse(C.plan.end) - today()) / 864e5));
  $('#sidebar-foot').innerHTML = `<div class="bar" style="margin-bottom:6px"><i style="width:${all.p * 100}%"></i></div>${all.d} / ${all.n} Lektionen · noch ${left} Tage bis 31.12.`;
}

// ---------- Bausteine ----------
const check = (id, extra = '') => `<button class="check ${isDone(id) ? 'on' : ''}" data-toggle="${id}" title="gelernt" ${extra}>${isDone(id) ? '✓' : ''}</button>`;
function lessonRow(l, showSubject) {
  const s = SUB[l.subject];
  return `<li>${check(l.id)}${showSubject ? `<span class="dot" style="background:${s.color}"></span>` : ''}<a class="title" href="#/lektion/${l.id}">${esc(l.title)}</a>${l.kind === 'placeholder' ? '<span class="pill">Platzhalter</span>' : ''}${state.exercised[l.id] ? '<span class="pill ok">Aufgaben ✓</span>' : ''}${l.cards.length ? `<span class="pill">${l.cards.length} Karten</span>` : ''}${l.minutes ? `<span class="pill">~${l.minutes} min</span>` : ''}</li>`;
}
function progressBar(p, color) { return `<div class="bar"><i style="width:${p * 100}%;${color ? 'background:' + color : ''}"></i></div>`; }

// ---------- Views ----------
function viewToday() {
  const t = today();
  const cw = currentWeek();
  const dow = t.getDay();
  const rhythm = dow === 0 ? 'Sonntag – frei. Erhol dich, morgen geht es weiter.' : dow === 6 ? 'Samstag = Übungstag: keine neuen Inhalte, nur Aufgaben zu beiden Fächern der Woche + Karteikarten durchgehen.' : (C.plan.id === 'voll' ? 'Mo–Fr: Hauptfach ~2,5 h neuer Stoff, Nebenfach ~1,5 h (zusammen gut 4 h).' : 'Mo–Fr: Hauptfach ~1,5–2 h neuer Stoff, Nebenfach ~1 h (zusammen knapp 3 h).') + ' Nach jedem Themenblock 3–5 Aufgaben selbst rechnen.';
  const overdue = C.lessons.filter(l => l.week && cw && l.week < cw.n && !isDone(l.id) && l.kind !== 'placeholder');
  const due = dueCards();
  const left = Math.max(0, Math.round((parse(C.plan.end) - t) / 864e5));
  const all = progress(C.lessons);
  let weekBlock = `<div class="card"><h2>Keine aktive Planwoche</h2><p class="sub">Der Plan läuft vom ${fmt(C.plan.start)} bis ${fmt(C.plan.end)}2026.</p></div>`;
  if (cw) {
    const block = (sid, role) => {
      if (!sid) return '';
      const s = SUB[sid]; const ls = weekLessons(cw.n, sid); const p = progress(ls);
      return `<div class="card"><h2><span class="nav-icon" style="background:${s.color}">${s.icon}</span>${esc(s.name)} <span class="pill ${role === 'Hauptfach' ? 'haupt' : ''}">${role}</span><span class="spacer"></span><span class="nav-meta">${p.d}/${p.n}</span></h2>${progressBar(p.p, s.color)}<ul class="lesson-list" style="margin-top:8px">${ls.map(l => lessonRow(l)).join('') || '<li class="empty">Keine Lektionen</li>'}</ul></div>`;
    };
    weekBlock = `${iso(t) < C.plan.start ? `<div class="card" style="margin-bottom:14px;border-left:4px solid #e0a020"><b>Vorlauf:</b> Der Plan startet am Montag, ${fmt(C.plan.start)} Du kannst jetzt schon mit Woche 1 beginnen – jede Lektion, die du vorziehst, schafft Luft für später.</div>` : ''}<div class="row" style="margin:6px 0 12px"><b style="font-size:16px">Woche ${cw.n}</b><span class="pill">${fmt(cw.from)}–${fmt(cw.to)}</span><span class="pill">${esc(cw.phase)}</span><span class="spacer"></span><a class="pill" href="#/plan">${esc(C.plan.short || C.plan.name)}</a></div>${cw.note ? `<p class="sub" style="margin:-4px 0 14px">${esc(cw.note)}</p>` : ''}<div class="grid ${cw.neben ? 'g2' : ''}">${block(cw.haupt, 'Hauptfach')}${block(cw.neben, 'Nebenfach')}</div>`;
  }
  const next = C.lessons.find(l => l.week && cw && l.week <= cw.n && !isDone(l.id) && l.kind !== 'placeholder');
  return `<h1>${t.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}</h1><p class="sub">${rhythm}</p>
  <div class="grid g4" style="margin-bottom:22px">
    <div class="card"><div class="stat">${left}</div><div class="stat-label">Tage bis 31.12.</div></div>
    <div class="card"><div class="stat">${Math.round(all.p * 100)}%</div><div class="stat-label">${all.d} von ${all.n} Lektionen gelernt</div></div>
    <div class="card"><div class="stat">${due.length}</div><div class="stat-label">Karteikarten fällig</div>${due.length ? '<a class="btn small primary" style="margin-top:8px" href="#/karten">Jetzt wiederholen</a>' : ''}</div>
    <div class="card"><div class="stat">${overdue.length}</div><div class="stat-label">Lektionen aus Vorwochen offen</div></div>
  </div>
  ${next ? `<div class="card" style="margin-bottom:22px;border-left:4px solid ${SUB[next.subject].color}"><div class="row"><div><div class="stat-label">Als Nächstes dran</div><b style="font-size:16px">${esc(next.title)}</b> <span class="pill">${esc(SUB[next.subject].name)}</span></div><span class="spacer"></span><a class="btn primary" href="#/lektion/${next.id}">Lektion öffnen →</a></div></div>` : ''}
  ${weekBlock}
  ${overdue.length ? `<div class="card" style="margin-top:22px"><h2>Nachholen aus Vorwochen <span class="pill warn">${overdue.length}</span></h2><p class="sub" style="margin:0 0 6px">Der Plan startete am ${fmt(C.plan.start)} – diese Lektionen sind laut Plan schon dran gewesen.</p><ul class="lesson-list">${overdue.map(l => lessonRow(l, true)).join('')}</ul></div>` : ''}
  <div class="card" style="margin-top:22px"><h2>Fortschritt pro Fach</h2><div class="grid g2">${C.subjects.map(s => { const p = progress(bySubject(s.id)); return `<div><div class="row" style="margin-bottom:4px"><a href="#/fach/${s.id}" style="color:var(--text)">${esc(s.name)}</a><span class="spacer"></span><span class="nav-meta">${s.placeholder && !p.n ? 'Platzhalter' : `${p.d}/${p.n}`}</span></div>${progressBar(p.p, s.color)}</div>`; }).join('')}</div></div>`;
}

function viewPlan() {
  const cw = currentWeek();
  return `<h1>Wochenplan</h1><p class="sub"><b>${esc(C.plan.name)}</b> · ${fmt(C.plan.start)}–${fmt(C.plan.end)}2026 · ${esc(C.plan.info || '')} · Sa Übungstag, So frei. <a href="#" data-planmenu>Plan wechseln</a></p>
  <div class="grid">${C.plan.weeks.map(w => {
    const past = cw && w.n < cw.n;
    const part = sid => { if (!sid) return ''; const ls = weekLessons(w.n, sid); const p = progress(ls); const s = SUB[sid];
      return `<div><div class="row"><span class="dot" style="background:${s.color}"></span><b>${esc(s.name)}</b><span class="pill ${sid === w.haupt ? 'haupt' : ''}">${sid === w.haupt ? 'Hauptfach' : 'Nebenfach'}</span><span class="spacer"></span><span class="nav-meta">${p.d}/${p.n}</span></div><ul class="mini-list">${ls.map(l => `<li>${check(l.id)}<a href="#/lektion/${l.id}">${esc(l.title)}</a></li>`).join('')}</ul></div>`; };
    const p = progress(weekLessons(w.n));
    return `<div class="card week ${cw && w.n === cw.n ? 'current' : ''} ${past ? 'past' : ''}" id="w${w.n}"><div class="week-head"><b>Woche ${w.n}</b><span class="pill">${fmt(w.from)}–${fmt(w.to)}</span><span class="pill">${esc(w.phase)}</span>${cw && w.n === cw.n ? '<span class="pill haupt">aktuell</span>' : ''}${p.n && p.d === p.n ? '<span class="pill ok">erledigt</span>' : past && p.d < p.n ? `<span class="pill warn">${p.n - p.d} offen</span>` : ''}</div>${w.note ? `<p class="sub" style="margin:6px 0 10px">${esc(w.note)}</p>` : ''}<div class="grid ${w.neben ? 'g2' : ''}" style="margin-top:10px">${part(w.haupt)}${part(w.neben)}</div></div>`;
  }).join('')}</div>`;
}

function filesList(s) {
  const files = s.folders.flatMap(f => (materials[f] || []).map(p => ({ folder: f, p })));
  if (!files.length) return `<div class="placeholder-note">Noch keine Unterlagen im Ordner <b>${esc(s.folders[0])}</b>. Lege PDFs dort ab – sie erscheinen dann hier automatisch. Liegen deine Unterlagen woanders, wähle den Ordner im Menü <b>Lernplan → Unterlagen-Ordner wählen …</b><div class="row" style="margin-top:10px"><button class="btn small" data-reveal="${esc(s.folders[0])}">Ordner öffnen</button><button class="btn small" data-rescan>Neu einlesen</button></div></div>`;
  return `<ul class="files">${files.map(f => `<li>📄 <a data-pdf="${esc(f.p)}">${esc(f.p.split('/').pop())}</a><span class="nav-meta">${esc(f.folder)}</span></li>`).join('')}</ul><div class="row" style="margin-top:10px"><button class="btn small" data-reveal="${esc(s.folders[0])}">Ordner öffnen</button><button class="btn small" data-rescan>Neu einlesen</button></div>`;
}

function viewSubject(id) {
  const s = SUB[id]; if (!s) return '<p>Unbekanntes Fach</p>';
  const ls = bySubject(id); const p = progress(ls);
  const chapters = [];
  for (const l of ls) { let c = chapters.find(c => c.name === l.chapter); if (!c) chapters.push(c = { name: l.chapter, ls: [] }); c.ls.push(l); }
  const cards = cardsFor(id, false).length;
  return `<div class="crumb"><a href="#/heute">Start</a> › Fach</div><h1><span class="nav-icon" style="background:${s.color};display:inline-grid;width:32px;height:32px;font-size:18px;vertical-align:-5px;margin-right:6px">${s.icon}</span>${esc(s.name)}</h1><p class="sub">${esc(s.long)}</p>
  <div class="grid g3" style="margin-bottom:22px">
    <div class="card"><div class="stat">${p.d}/${p.n}</div><div class="stat-label">Lektionen gelernt</div>${progressBar(p.p, s.color)}</div>
    <div class="card"><div class="stat">${cards}</div><div class="stat-label">Karteikarten (${dueCards(id).length} fällig)</div><a class="btn small" style="margin-top:8px" href="#/karten/${id}">Fach wiederholen</a></div>
    <div class="card"><div class="stat">${ls.filter(l => state.exercised[l.id]).length}</div><div class="stat-label">Lektionen mit gerechneten Aufgaben</div></div>
  </div>
  <div class="grid" style="grid-template-columns:minmax(0,1fr) 330px;align-items:start">
    <div class="card">${chapters.map(c => { const cp = progress(c.ls); return `<div class="chapter"><div class="chapter-head">${esc(c.name)}<span class="spacer"></span><span class="nav-meta">${cp.d}/${cp.n}</span></div><ul class="lesson-list">${c.ls.map(l => lessonRow(l)).join('')}</ul></div>`; }).join('') || '<p class="empty">Noch keine Lektionen.</p>'}</div>
    <div class="card"><h2>Original-Unterlagen</h2>${filesList(s)}</div>
  </div>`;
}

function viewLesson(id) {
  const l = LESSON[id]; if (!l) return '<p>Lektion nicht gefunden.</p>';
  const s = SUB[l.subject]; const ls = bySubject(l.subject); const i = ls.indexOf(l);
  const prev = ls[i - 1], next = ls[i + 1];
  state.last = id; save();
  return `<div class="lesson-wrap"><article>
    <div class="lesson-head" style="border-top:4px solid ${s.color};padding-top:14px">
      <div class="crumb"><a href="#/fach/${s.id}">${esc(s.name)}</a> › ${esc(l.chapter)}</div>
      <h1>${esc(l.title)}</h1>
      <div class="row">${l.week ? `<a class="pill" href="#/plan">Plan: Woche ${l.week}</a>` : ''}${l.minutes ? `<span class="pill">~${l.minutes} min</span>` : ''}${l.cards.length ? `<span class="pill">${l.cards.length} Karteikarten</span>` : ''}</div>
      ${l.sources.length ? `<div class="sources">${l.sources.map(src => `<button class="src" title="${esc(src.path)}" data-pdf="${esc(src.path)}" data-page="${src.page}">📄 ${esc(src.path.split('/').pop().replace(/\.pdf$/, ''))}${src.page > 1 ? ' · S. ' + src.page : ''}</button>`).join('')}</div>` : ''}
      <div class="lesson-actions">
        <button class="btn ${isDone(id) ? 'done' : 'primary'}" data-toggle="${id}">${isDone(id) ? '✓ Gelernt' : 'Als gelernt markieren'}</button>
        <button class="btn ${state.exercised[id] ? 'done' : ''}" data-exercised="${id}">${state.exercised[id] ? '✓ Aufgaben gerechnet' : 'Aufgaben gerechnet'}</button>
      </div>
    </div>
    <div class="content" id="content">${HTML[id] || '<p class="empty">Lade …</p>'}</div>
    <div class="card notes" style="margin-top:36px"><h2>Meine Notizen</h2><textarea data-notes="${id}" placeholder="Eigene Notizen, Fragen, Eselsbrücken … (wird automatisch gespeichert)">${esc(state.notes[id] || '')}</textarea></div>
    <div class="lesson-actions" style="justify-content:center;margin-top:20px"><button class="btn ${isDone(id) ? 'done' : 'primary'}" data-toggle="${id}">${isDone(id) ? '✓ Gelernt' : 'Als gelernt markieren'}</button></div>
    <div class="pager">${prev ? `<a href="#/lektion/${prev.id}"><small>← Zurück</small>${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="next" href="#/lektion/${next.id}"><small>Weiter →</small>${esc(next.title)}</a>` : '<span></span>'}</div>
  </article><aside class="toc" id="toc"></aside></div>`;
}

function buildToc() {
  const c = $('#content'); const toc = $('#toc'); if (!c || !toc) return;
  const hs = [...c.querySelectorAll('h2, h3')];
  hs.forEach((h, i) => h.id = 'h' + i);
  toc.innerHTML = hs.length ? `<div class="toc-title">Inhalt</div>${hs.map(h => `<a class="${h.tagName.toLowerCase()}" data-jump="${h.id}">${esc(h.textContent)}</a>`).join('')}` : '';
}

// Karteikarten-Abfrage
let review = null;
function viewCards(subject) {
  if (!review || review.subject !== subject) {
    const list = dueCards(subject || null);
    review = { subject, queue: list.map(c => c.id).sort(() => Math.random() - .5), shown: false, done: 0 };
  }
  const tabs = `<div class="row" style="margin-bottom:18px"><a class="btn small ${!subject ? 'primary' : ''}" href="#/karten">Alle (${dueCards().length})</a>${C.subjects.filter(s => cardsFor(s.id, false).length).map(s => `<a class="btn small ${subject === s.id ? 'primary' : ''}" href="#/karten/${s.id}">${esc(s.name)} (${dueCards(s.id).length})</a>`).join('')}</div>`;
  const head = `<h1>Karteikarten</h1><p class="sub">Abgefragt werden Karten aus Lektionen, die du als „gelernt“ markiert hast. Leitner-System: je besser du eine Karte kannst, desto seltener kommt sie (1 → 3 → 7 → 14 → 30 → 60 Tage).</p>${tabs}`;
  const id = review.queue[0];
  if (!id) {
    const total = cardsFor(subject || null, false).length, learned = cardsFor(subject || null).length;
    return head + `<div class="review"><div class="review-card" style="text-align:center;font-family:-apple-system,sans-serif"><div style="font-size:42px">✓</div><h2>Nichts mehr fällig${review.done ? ` – ${review.done} Karten wiederholt` : ''}</h2><p class="sub">${learned} von ${total} Karten sind freigeschaltet (Lektion als gelernt markiert).</p><button class="btn" data-practice-all="${subject || ''}">Trotzdem alle freigeschalteten Karten üben</button></div></div>`;
  }
  const c = CARD[id];
  return head + `<div class="review"><div class="row" style="margin-bottom:8px"><span class="pill">${esc(SUB[c.subject].name)}</span><a class="pill" href="#/lektion/${c.lesson}">${esc(LESSON[c.lesson]?.title)}</a><span class="spacer"></span><span class="nav-meta">noch ${review.queue.length}</span></div>
  <div class="review-card"><div>${c.q}</div>${review.shown ? `<div class="ans">${c.a}</div>` : ''}</div>
  ${review.shown ? `<div class="rate"><button class="r0" data-rate="0">Nochmal<small>gleich wieder <span class="kbd">1</span></small></button><button class="r1" data-rate="1">Schwer<small>bald <span class="kbd">2</span></small></button><button class="r2" data-rate="2">Gut<small>später <span class="kbd">3</span></small></button><button class="r3" data-rate="3">Leicht<small>viel später <span class="kbd">4</span></small></button></div>` : `<div style="text-align:center;margin-top:16px"><button class="btn primary" data-show>Antwort zeigen <span class="kbd" style="color:#fff;border-color:rgba(255,255,255,.5)">Leertaste</span></button></div>`}</div>`;
}

function viewSearch(q) {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  const hits = !words.length ? [] : C.lessons.map(l => {
    const hay = (l.title + ' ' + l.chapter + ' ' + l.text).toLowerCase();
    if (!words.every(w => hay.includes(w))) return null;
    const pos = l.text.toLowerCase().indexOf(words[0]);
    let snip = pos >= 0 ? l.text.slice(Math.max(0, pos - 80), pos + 160) : l.text.slice(0, 200);
    snip = esc(snip); words.forEach(w => { snip = snip.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), m => `<mark>${m}</mark>`); });
    return { l, snip, score: (l.title.toLowerCase().includes(words[0]) ? 10 : 0) };
  }).filter(Boolean).sort((a, b) => b.score - a.score);
  return `<h1>Suche</h1><p class="sub">${hits.length} Treffer für „${esc(q)}“</p>${hits.map(h => `<div class="search-hit"><div class="row"><span class="dot" style="background:${SUB[h.l.subject].color}"></span><a href="#/lektion/${h.l.id}"><b>${esc(h.l.title)}</b></a><span class="pill">${esc(SUB[h.l.subject].name)}</span></div><div class="snip">…${h.snip}…</div></div>`).join('') || '<p class="empty">Nichts gefunden.</p>'}`;
}

function viewPage(name) {
  const p = C.pages[name]; if (!p) return '<p>Seite nicht gefunden.</p>';
  return `<h1>${esc(p.title)}</h1><div class="content" id="content">${p.html}</div>`;
}

// ---------- Router ----------
function route() {
  const h = location.hash || '#/heute';
  const [, view, arg] = h.split('/');
  let html, active = h;
  if (view === 'plan') html = viewPlan();
  else if (view === 'fach') html = viewSubject(arg);
  else if (view === 'lektion') { if (LESSON[arg] && !HTML[arg]) { loadLesson(arg, route); } html = viewLesson(arg); active = '#/fach/' + LESSON[arg]?.subject; }
  else if (view === 'karten') { html = viewCards(arg); active = '#/karten'; }
  else if (view === 'suche') html = viewSearch(decodeURIComponent(arg || ''));
  else if (view === 'seite') html = viewPage(arg);
  else { html = viewToday(); active = '#/heute'; }
  $('#view').innerHTML = html;
  renderSidebar(active);
  buildToc();
}
window.addEventListener('hashchange', () => { $('#main').scrollTop = 0; route(); });

// ---------- Events ----------
document.addEventListener('click', e => {
  if (e.target.closest('[data-planmenu]')) { e.preventDefault(); $('#plan-select')?.focus(); $('#plan-switch')?.classList.add('flash'); setTimeout(() => $('#plan-switch')?.classList.remove('flash'), 900); return; }
  const t = e.target.closest('[data-toggle],[data-exercised],[data-pdf],[data-reveal],[data-rescan],[data-show],[data-rate],[data-jump],.fc-flip,[data-practice-all]');
  if (!t) return;
  if (t.dataset.toggle) { const id = t.dataset.toggle; if (state.done[id]) delete state.done[id]; else state.done[id] = new Date().toISOString(); save(); const y = $('#main').scrollTop; route(); $('#main').scrollTop = y; }
  else if (t.dataset.exercised) { const id = t.dataset.exercised; state.exercised[id] = !state.exercised[id]; save(); const y = $('#main').scrollTop; route(); $('#main').scrollTop = y; }
  else if (t.dataset.pdf) { if (window.webkit?.messageHandlers?.app) native('openPDF', { path: t.dataset.pdf, page: parseInt(t.dataset.page || '1', 10) }); else alert('PDF öffnen funktioniert in der Mac-App: ' + t.dataset.pdf); }
  else if (t.dataset.reveal !== undefined) native('revealFolder', { path: t.dataset.reveal });
  else if (t.hasAttribute('data-rescan')) native('rescan');
  else if (t.hasAttribute('data-show')) { review.shown = true; route(); }
  else if (t.dataset.rate) { const id = review.queue.shift(); const r = +t.dataset.rate; rateCard(id, r); if (r === 0) review.queue.push(id); review.done++; review.shown = false; route(); }
  else if (t.dataset.jump) { document.getElementById(t.dataset.jump)?.scrollIntoView({ behavior: 'smooth' }); }
  else if (t.classList.contains('fc-flip')) t.closest('.flashcard').classList.add('open');
  else if (t.hasAttribute('data-practice-all')) { const s = t.dataset.practiceAll || null; review = { subject: s || undefined, queue: cardsFor(s).map(c => c.id).sort(() => Math.random() - .5), shown: false, done: 0 }; route(); }
});
document.addEventListener('change', e => { if (e.target.id === 'plan-select') window.setPlan(e.target.value); });
document.addEventListener('input', e => {
  if (e.target.dataset.notes) { state.notes[e.target.dataset.notes] = e.target.value; save(); }
});
let searchTimer;
$('#search').addEventListener('input', e => { clearTimeout(searchTimer); searchTimer = setTimeout(() => { const q = e.target.value.trim(); if (q) location.hash = '#/suche/' + encodeURIComponent(q); }, 200); });
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); $('#search').focus(); $('#search').select(); return; }
  if (!location.hash.startsWith('#/karten') || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  if (e.key === ' ' && review && !review.shown && review.queue.length) { e.preventDefault(); review.shown = true; route(); }
  else if (review?.shown && ['1', '2', '3', '4'].includes(e.key)) { document.querySelector(`[data-rate="${+e.key - 1}"]`)?.click(); }
});

route();
