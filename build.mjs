// Baut alle Lerninhalte (content/**.md) zu web/content.js zusammen.
// Mathe wird bereits hier mit KaTeX gerendert, damit die App offline und schnell ist.
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import { marked } from 'marked';

import { fileURLToPath } from 'node:url';
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = path.join(ROOT, 'content');
const warnings = [];

marked.setOptions({ gfm: true, breaks: false });

const MACROS = {
  '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}', '\\C': '\\mathbb{C}',
  '\\d': '\\mathrm{d}', '\\dd': '\\,\\mathrm{d}', '\\e': '\\mathrm{e}',
  '\\grad': '\\operatorname{grad}', '\\rot': '\\operatorname{rot}', '\\Div': '\\operatorname{div}',
  '\\Rang': '\\operatorname{Rang}', '\\Kern': '\\operatorname{Kern}', '\\Bild': '\\operatorname{Bild}', '\\sgn': '\\operatorname{sgn}',
};

function renderMath(tex, display, where) {
  try {
    return katex.renderToString(tex, { displayMode: display, throwOnError: true, macros: { ...MACROS }, strict: 'ignore', trust: false });
  } catch (e) {
    warnings.push(`${where}: KaTeX-Fehler in "${tex.slice(0, 80)}": ${e.message.split('\n')[0]}`);
    return `<code class="math-error">${tex.replace(/</g, '&lt;')}</code>`;
  }
}

// Markdown + Mathe → HTML
function md(src, where) {
  const store = [];
  let s = src.replace(/\\\$/g, '@@DOLLAR@@');
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => { store.push(renderMath(t.trim(), true, where)); return `@@M${store.length - 1}@@`; });
  s = s.replace(/\$([^\$\n]+?)\$/g, (_, t) => { store.push(renderMath(t.trim(), false, where)); return `@@M${store.length - 1}@@`; });
  let html = marked.parse(s);
  // Display-Mathe darf nicht in <p> stecken bleiben
  html = html.replace(/<p>\s*@@M(\d+)@@\s*<\/p>/g, (m, i) => store[+i].startsWith('<span class="katex-display') ? `<div class="mathblock">${store[+i]}</div>` : m);
  html = html.replace(/@@M(\d+)@@/g, (_, i) => store[+i]).replace(/@@DOLLAR@@/g, '$');
  return html;
}

const BOX = {
  def: 'Definition', satz: 'Satz', bsp: 'Beispiel', merke: 'Merke', achtung: 'Achtung – typischer Fehler',
  aufgabe: 'Aufgabe', loesung: 'Lösung', idee: 'Anschauung', rezept: 'Kochrezept', formel: 'Formel',
  beweis: 'Beweis', info: 'Info', ausblick: 'Ausblick (Vertiefung)', ziel: 'Lernziele', abgleich: 'Abgleich Skript ↔ Folien',
};

// :::typ Titel ... ::: (verschachtelbar) in HTML umwandeln
function renderBlocks(text, where, cards, lessonId) {
  const lines = text.split('\n');
  const out = [];
  let buf = [];
  const flush = () => { if (buf.length) { out.push(md(buf.join('\n'), where)); buf = []; } };
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^:::\s*([a-zäöü]+)\s*(.*)$/);
    if (!m) { buf.push(lines[i]); continue; }
    flush();
    const type = m[1], title = m[2].trim();
    let depth = 1, j = i + 1; const inner = [];
    for (; j < lines.length; j++) {
      if (/^:::\s*[a-zäöü]+/.test(lines[j])) depth++;
      else if (/^:::\s*$/.test(lines[j])) { depth--; if (depth === 0) break; }
      inner.push(lines[j]);
    }
    if (depth !== 0) warnings.push(`${where}: Block ":::${type}" nicht geschlossen`);
    i = j;
    const body = inner.join('\n');
    if (type === 'karte') {
      const [q, a = ''] = body.split(/^\?\?\?\s*$/m);
      const card = { id: `${lessonId}#${cards.length}`, q: md(q.trim(), where), a: md(a.trim(), where) };
      cards.push(card);
      out.push(`<div class="flashcard" data-card="${card.id}"><div class="fc-q"><span class="fc-tag">Karteikarte</span>${card.q}</div><div class="fc-a">${card.a}</div><button class="fc-flip">Antwort zeigen</button></div>`);
    } else if (type === 'loesung') {
      out.push(`<details class="solution"><summary>${title || 'Lösung anzeigen'}</summary><div class="sol-body">${renderBlocks(body, where, cards, lessonId)}</div></details>`);
    } else {
      const label = BOX[type] || type;
      const head = title ? `<span class="box-kind">${label}</span> ${md(title, where).replace(/^<p>|<\/p>\s*$/g, '')}` : `<span class="box-kind">${label}</span>`;
      out.push(`<div class="box box-${type}"><div class="box-title">${head}</div><div class="box-body">${renderBlocks(body, where, cards, lessonId)}</div></div>`);
    }
  }
  flush();
  return out.join('\n');
}

function parseFront(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return [{}, src];
  const meta = {};
  for (const line of m[1].split('\n')) {
    const k = line.match(/^(\w+):\s*(.*)$/);
    if (k) meta[k[1]] = k[2].trim();
  }
  return [meta, src.slice(m[0].length)];
}

const subjects = JSON.parse(fs.readFileSync(path.join(CONTENT, 'subjects.json'), 'utf8'));
const plans = JSON.parse(fs.readFileSync(path.join(CONTENT, 'plans.json'), 'utf8'));
const lessons = [];
const allCards = [];
const extraPages = {};

for (const sub of subjects) {
  const dir = path.join(CONTENT, sub.id);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
  for (const f of files) {
    const [meta, body] = parseFront(fs.readFileSync(path.join(dir, f), 'utf8'));
    const id = meta.id || `${sub.id}-${f.replace(/\.md$/, '')}`;
    const cards = [];
    const html = renderBlocks(body, `${sub.id}/${f}`, cards, id);
    const sources = (meta.sources || '').split(';').map(s => s.trim()).filter(Boolean).map(s => {
      const [p, page] = s.split('#');
      return { path: p.trim(), page: page ? parseInt(page, 10) : 1 };
    });
    const text = body.replace(/\$[^$]*\$/g, ' ').replace(/[#*_:>`|\-]/g, ' ').replace(/\s+/g, ' ');
    lessons.push({
      id, subject: sub.id, title: meta.title || f, chapter: meta.chapter || '', weeks: {},
      minutes: meta.minutes ? parseInt(meta.minutes, 10) : null, kind: meta.kind || 'lesson', sources, html,
      cards: cards.map(c => c.id), text: text.slice(0, 20000),
    });
    for (const c of cards) allCards.push({ ...c, subject: sub.id, lesson: id });
  }
}

// Wochen je Lernplan verteilen: Lektionen eines Fachs der Reihe nach, nach Lernzeit (Mitte der Lektion)
for (const plan of plans) {
  for (const [sid, slots] of Object.entries(plan.alloc)) {
    const ls = lessons.filter(l => l.subject === sid);
    const total = ls.reduce((a, l) => a + (l.minutes || 60), 0);
    let acc = 0;
    for (const l of ls) {
      const mid = (acc + (l.minutes || 60) / 2) / total; acc += l.minutes || 60;
      let c = 0, week = slots[slots.length - 1][0];
      for (const [w, frac] of slots) { c += frac; if (mid <= c + 1e-9) { week = w; break; } }
      l.weeks[plan.id] = week;
    }
  }
  delete plan.alloc;
}

// Zusatzseiten (z. B. Abgleich)
const pagesDir = path.join(CONTENT, '_pages');
if (fs.existsSync(pagesDir)) {
  for (const f of fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'))) {
    const [meta, body] = parseFront(fs.readFileSync(path.join(pagesDir, f), 'utf8'));
    extraPages[f.replace(/\.md$/, '')] = { title: meta.title || f, html: renderBlocks(body, `_pages/${f}`, [], f) };
  }
}

// Lektions-HTML einzeln ablegen (wird bei Bedarf nachgeladen)
const LDIR = path.join(ROOT, 'web', 'lessons');
fs.rmSync(LDIR, { recursive: true, force: true });
fs.mkdirSync(LDIR, { recursive: true });
let total = 0;
for (const l of lessons) {
  const js = `window.__lesson(${JSON.stringify(l.id)}, ${JSON.stringify(l.html)});`;
  total += js.length;
  fs.writeFileSync(path.join(LDIR, `${l.id}.js`), js);
  delete l.html;
}
const out = `window.CONTENT = ${JSON.stringify({ subjects, plans, lessons, cards: allCards, pages: extraPages, built: new Date().toISOString(), ver: Date.now().toString(36) })};`;
fs.writeFileSync(path.join(ROOT, 'web', 'content.js'), out);
// Cache-Busting: Versionsstempel in index.html eintragen
const ver = Date.now().toString(36);
const idxPath = path.join(ROOT, 'web', 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
idx = idx.replace(/(src|href)="(content\.js|app\.js|style\.css)(\?v=[^"]*)?"/g, (_, a, f) => `${a}="${f}?v=${ver}"`);
fs.writeFileSync(idxPath, idx);
console.log(`Lektionsdateien: ${(total / 1e6).toFixed(2)} MB`);
console.log(`${lessons.length} Lektionen, ${allCards.length} Karteikarten, ${(out.length / 1e6).toFixed(2)} MB`);
if (warnings.length) { console.log(`\n${warnings.length} Warnungen:`); warnings.forEach(w => console.log('  ' + w)); }
