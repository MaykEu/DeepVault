# DeepVault — Static Web App

Build and maintain the DeepVault web application at `D:\User\Desktop\DeepVault\`. This is a pure vanilla HTML/CSS/JS app — zero dependencies, runs by double-clicking `index.html`, deployed via GitHub Pages.

## Content Quality Standards — Pedagogical Philosophy

DeepVault is a **computing education platform** — programming languages, computer systems, game engines, networking, cybersecurity, algorithms, GPU programming. The same content quality principles apply regardless of which computing domain you're teaching.

### What Makes a DeepVault Note

Lessons, not summaries. Every note must follow these rules:

1. **Two-Way Explanation (MANDATORY):** Simple analogy section + Technical deep-dive section. Both REQUIRED.
2. **No shallow summaries:** Deep coverage — 700-1100 line notes are normal. A cache coherence note should explain MESI states with cycle counts, not "caches stay consistent."
3. **Hardware-first / Concrete-first:** Start from physical reality (transistors, voltages) before abstractions (type systems, APIs).
4. **Prerequisites callout (MANDATORY):** `> [!info] Prerequisites` with wiki links to prerequisite notes. Never assume knowledge.
5. **See Also (MANDATORY):** Minimum 3 wiki-linked related notes at the end of every note.
6. **Exercises:** 4-5 per note: conceptual, code/application, analysis, real-world. Must reference specific content from the note.
7. **Show the trap:** Demonstrate WRONG patterns alongside correct ones with WHY explanations.
8. **Analogies → Math → Code:** Physical metaphor first, then notation, then implementation.

### Quiz Quality Rules

- 5-10 questions per note, mixed MC (2-4 options) and text input
- Every question MUST have an explanation
- Extract answers from note content — never fabricate
- MC format: `{question, options: [], correctAnswer: "exact option text", explanation}`
- Text input: `{question, correctAnswer, acceptableAnswers: [], explanation}`
- No `type` or `correctIndex` fields — deprecated

### What DeepVault Is NOT

- ❌ Reference documentation — belongs in a wiki
- ❌ Cheat sheets or bullet-point summaries
- ❌ Lecture transcripts
- ❌ Beginner tutorials that skip the "why"

### Why This Vault Exists

Most computing education is either too shallow ("the GPU renders pixels faster") or too jargon-dense ("the rasterizer performs barycentric interpolation across framebuffer tiles"). DeepVault bridges both — every concept explained twice, grounded in hardware reality, connected via wiki links. Complete beginner → standalone curriculum. Experienced engineer → rigorous reference. The pedagogy IS the product.

## Architecture

```
D:\User\Desktop\DeepVault\
├── index.html              # Shell + script loading
├── css/
│   ├── base.css            # CSS variables, reset, dark theme
│   ├── layout.css          # Grid/flex, header, dashboard, quiz
│   └── components.css      # Cards, buttons, inputs, learn, TOC, syntax
├── js/
│   ├── app.js              # Init
│   ├── router.js           # Hash-based routing (#/folder/id/note/action)
│   ├── data.js             # ALL data: FOLDERS, NOTES, QUIZ_NOTES, QUIZ_DATA, NOTES_CONTENT
│   ├── storage.js          # localStorage: attempts, scores, per-folder stats
│   ├── dashboard.js        # Folder grid with progress bars
│   ├── topic-hub.js        # Note list with Learn/Quiz buttons
│   ├── quiz-engine.js      # Fisher-Yates shuffle, MC/text-input, scoring
│   ├── summary.js          # Score ring + history display
│   ├── history.js          # Per-note attempt history
│   └── learn.js            # Password gate (SHA-256), markdown renderer, TOC
└── assets/
```

## Data Flow

1. `data.js` defines `FOLDERS[]`, `NOTES{}`, `QUIZ_NOTES{}`, `QUIZ_DATA{}`, `NOTES_CONTENT{}`
2. `router.js` parses `#/folder/id/note/action` → dispatches to correct view
3. `quiz-engine.js` shuffles questions (Fisher-Yates), checks answers, stores results via `storage.js`
4. `learn.js` password-gates note viewing, renders markdown to HTML with syntax highlighting, generates sticky TOC

## Key Patterns

### Critical Markdown Renderer Rules (learn.js)

These rules were learned through multiple iterations — NEVER regress on any of them:

1. **Code blocks use a line-by-line state machine**, not regex. Steps for each line:
   - Strip `> ` blockquote prefix: `stripped = line.replace(/^>\s?/,'')`
   - Strip up to 3 leading spaces: `stripped = stripped.replace(/^\s{0,3}/,'')`
   - Check: `fenceMatch = stripped.match(/^```(\w*)$/)`
   - When inCode, strip BOTH `^>\s?` AND `^\s{0,3}` from code lines
   - Back-to-back fences: ` ```bash\ncode\n```cpp\nmore\n``` ` — ` ```cpp ` is an OPENING fence (lang present), not closing

2. **`&` escaping MUST happen AFTER wiki link processing**, never before. 
   WRONG: escape `&` in raw markdown → `[[RAM &amp; Virtual Memory]]` → no match
   RIGHT: process wiki links first → then `html.replace(/&(?!(?:amp|lt|gt|quot|#\d+);)/g, '&amp;')`

3. **Wiki link handler**: Strip folder prefixes (`../Folder/`, `Advanced/`, `Core Language/`, etc.) before lookup. Check `NOTES_CONTENT[cleanName]` first, then `REFERENCE[cleanName]`. Navigate via `router.navigate()` — never `href="#"`.

4. **Callout parser**: Line-by-line. Match `> [!type] Title` then consume all following `> ` lines (including blank `>`). Join body with `<br>`. Capitalize type label.

5. **Syntax highlighting**: Single-pass char-by-char tokenizer. NEVER chain `.replace()` calls on already-highlighted HTML — produces nested `<span>` soup.

6. **Heading IDs**: Strip `&` and HTML tags before computing `id`. TOC uses identical logic.

7. **escapeHTML**: Only escape `<` and `>`. NOT `&` — handled at markdown level after wiki links.

8. **Tables — CRITICAL**: Split cells by `|` but NOT if preceded by `\\`. Track BOTH inline backtick spans AND `[[ ]]` wiki link brackets within cells. **A `|` inside `[[link|alias]]` represents the alias separator, not a cell separator.** Without bracket tracking, the table parser fragments wiki links into two broken cells, producing "(coming soon)" for every link in tables. Track `inBr` alongside `inBt`: set `inBr=true` on `[[` and `inBr=false` on `]]`. Skip `|` when `inBt` or `inBr` is true. This was a multi-hour debugging session — DO NOT regress.

9. **Lists**: Detect `^\d+\.\s+` for `<ol>`, `^[-*]\s+` for `<ul>`. Wrap items in `<li>`.

## Reference Section

Glossary and Learning Path are special — stored in `const REFERENCE` in data.js, NOT `NOTES_CONTENT`. They skip the password gate via `LearnView.renderRef()`. Route: `#/reference/Glossary`. Wiki links to `[[Glossary]]` check `REFERENCE` after `NOTES_CONTENT`. Header nav links must use `javascript:void(0)`, never `href="#"` (triggers dashboard navigation before onclick fires).
### Markdown Renderer (learn.js)
### Quiz Engine

See `references/markdown-renderer.md` for detailed patterns: code block state machine, blockquote fence handling, `&` escaping, syntax highlighting tokenizer.

```python
import json
content_json = json.dumps(raw_markdown)
data_js = f"const NOTES_CONTENT = {{'Note Name': {{content: {content_json}}}}};\n"
```

### Markdown Renderer (learn.js)

The renderer uses a **line-by-line state machine** for code blocks — essential because regex-based approaches fail on back-to-back fences and blockquoted code blocks.

**Code block detection:** strips `> ` blockquote prefixes before checking for ` ``` ` fences. This handles patterns like:
```
> ```cpp
> code here
> ```
```

**Back-to-back fences:** ` ```bash\ncode\n```cpp\nmore\n``` ` — the ` ```cpp ` is detected as an opening fence (not closing) because the language tag follows.

### `&` in Note Names

Notes like "Function Calls & Stack Frames" contain `&`. Before any markdown processing, escape `&` → `&amp;` (skipping already-escaped entities). Heading IDs strip `&amp;` for clean anchors. TOC generation uses the same ID logic.

### Blockquote + Code Block Precedence

Code block extraction runs BEFORE callout/blockquote processing. The code block state machine strips blockquote prefixes from both fences AND code lines.

### Quiz Engine

- Fisher-Yates shuffle for random question order
- Multiple choice: radio buttons, instant feedback on submit
- Text input: case-insensitive matching against `correctAnswer` AND `acceptableAnswers[]`
- Score tracked via localStorage per folder/note
- Score ring: SVG circle with `stroke-dashoffset` animation

## Pitfalls

- **Content verification: NEVER recite from memory.** Always read actual files from disk. Session memory compresses and is unreliable. When asked to verify/audit/check content, open the file, find the specific claim, verify against the actual content. Memory-based recitation without file reads is lying to the user.

- **Plan-First is ABSOLUTE.** Never present a plan and execute in the same turn. Present the plan, then WAIT for the user's response. Even for "5 small fixes." The user has corrected this 6+ times — this is the most important behavioral rule. "Apply?" is a question, not a simultaneous signal. When you ask "Apply?" you MUST stop and wait.
- **Topic hub final design:** Clean cards with: colored status dot (left), note name + score + pill badge (NOT STARTED/IN PROGRESS/COMPLETED), Learn button (muted) + Quiz button (blue glow with trophy). Folder header panel with icon, title, module count, progress bar, percentage. Card depth: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.03)` + hover glow. CSS: balanced braces are ESSENTIAL — after any CSS edit, verify braces are balanced, not just assuming they are. CSS: balanced braces are ESSENTIAL — an unclosed `{` anywhere in components.css silently breaks all styles below it. Always verify with `python -c "import re; c=open(r'D:\\User\\Desktop\\DeepVault\\css\\components.css').read(); c2=re.sub(r'/\\*.*?\\*/','',c,flags=re.DOTALL); print(c2.count('{')==c2.count('}'))"` after CSS edits. The `replace_all` patch flag is dangerous on CSS — it nests selectors inside each other, producing corrupt `.folder-card { .folder-card { ... } }` blocks. When unsure, rewrite the entire file cleanly.
- **Never use `replace_all=true` on patch calls unless you've verified ALL matches are safe.** When multiple matches exist, replace_all can corrupt files. For CSS: duplicate selectors get nested inside each other (`.folder-card { .folder-card { ... } }`). For JS: code block restoration loops lose their `for` declaration. Symptom: `SyntaxError: Unexpected identifier 'html'` or broken CSS cascade. Always provide enough context for a unique match, or rewrite the whole file cleanly.
- **Header is logo-only.** No breadcrumb. No page address bar. The header has just the DeepVault SVG logo + Guide/Glossary nav links. Every page provides its own back link for navigation.
- **Never escape `&` before wiki link processing.** `[[RAM & Virtual Memory]]` becomes `[[RAM &amp; Virtual Memory]]` → fails to match `NOTES_CONTENT['RAM & Virtual Memory']`. Run `&` → `&amp;` AFTER wiki links, before paragraphs.
- **Indented code fences (`   ``` ` with up to 3 spaces):** Strip `^\s{0,3}` before fence detection. The markdown spec allows this. Found in Syscalls & Kernel lines 92/96.
- **Blockquoted code blocks (`> ```cpp `):** Strip `> ` prefix from BOTH fences AND code lines. Found in Storage (4), Function Calls (2), Threads & Processes (2).
- **Back-to-back fences:** ` ```bash\ncode\n```cpp\nmore\n``` ` — ` ```cpp ` is an OPENING fence, not a closing fence. The ` ``` ` closing one block and ` ```cpp ` opening the next appear on the same line. Regex greedily breaks. Fix: line-by-line state machine.
- **Heading ID generation:** Strip `&` from heading text before computing the ID. Both heading IDs and TOC links must use the SAME logic.
- **escapeHTML function:** Only escape `<` and `>`. Never escape `&` — `&` escaping happens at the markdown level, after wiki links.
- **Syntax highlighting:** NEVER chain `.replace()` calls on already-highlighted HTML — produces nested `<span>` soup. Use a character-by-character tokenizer.
- **JSON-safety:** Always use `json.dumps()` in Python, never JS template literals for embedded markdown. Backtick code fences will close the template.
- **Unicode in JS:** `\u{1F5A5}` for above-BMP, `\uFE0F` for variation selectors. Never `\U0001f5a5` (Python-only syntax).
- **Dashboard emojis:** Wrong format → raw escape codes displayed (e.g., `\U0001f5a5\ufe0f`). Always `\u{1F5A5}`.
- **Always verify JS syntax after ANY edit:** `node -c` on data.js, learn.js, router.js. Never skip.
- **Header nav links MUST use `href="javascript:void(0)"`, never `href="#"`.** When a header link uses `href="#"`, the browser navigates to `#` (dashboard) BEFORE the onclick fires — the router processes the dashboard route, then the onclick changes the hash again, producing a flicker or wrong page. Symptom: Guide/Glossary buttons navigate to dashboard instead of their target. Fix: `href="javascript:void(0)"` prevents default navigation.
- **`convert.py` rebuild overwrites QUIZ_DATA and manual REFERENCE entries.** After running `convert.py`, verify with `node -c data.js` AND check quiz count with `grep -c QUIZ_DATA data.js` (should be 14). Check `grep -c "DeepVault Guide" data.js` (should be 1). The rebuild can silently corrupt data.js if QUIZ_DATA extraction or REFERENCE insertion fails — always verify both.\n- **CRITICAL: `convert.py` can place QUIZ_DATA entries INSIDE `NOTES_CONTENT`.** When the script rebuilds data.js with `NOTES_CONTENT = { ... }`, any QUIZ_DATA assignments that follow are invalid JS (they appear inside the object literal). Symptom: `SyntaxError` at `title: \"...\"`. Fix: rebuild data.js from scratch using the `execute_code` pattern in `scripts/rebuild_data.py` — which writes FOLDERS, NOTES, QUIZ_NOTES, QUIZ_DATA placeholders, THEN NOTES_CONTENT, THEN REFERENCE, never interleaving them. After every rebuild, validate: `node -c data.js` AND `grep -c \"QUIZ_DATA\\['\" data.js` (must return 14).\n- **Git safety:** Commit before any risky batch of changes. `git add -A && git commit -m \"snapshot before X\"`. This lets you `git revert` if things break. The user expects you to commit locally without pushing. Commands: `cd D:/User/Desktop/DeepVault` then git operations.
- **CSS brace balancing:** After ANY CSS edit, verify braces are balanced. `components.css` had an unclosed brace from a `replace_all` that silently broke ALL styles below the missing `}`. Folder headers and note cards rendered as plain text with no styling. Fix: `python -c "import re; c=open(r'D:\\User\\Desktop\\DeepVault\\css\\components.css').read(); c2=re.sub(r'/\\*.*?\\*/','',c,flags=re.DOTALL); print(c2.count('{')==c2.count('}'))"`. Never trust patch-based edits on CSS — when in doubt, rewrite the entire file cleanly.

## Multi-Folder Architecture

NOTES_CONTENT entries carry a `folder` field so wiki links can route across folders:

```js
NOTES_CONTENT['FVector'] = {
  title: 'FVector, FRotator, FQuat — The Core Types',
  folder: 'game-math',
  content: '<escaped markdown>'
};
```

**Wiki link routing** uses the folder field, not a hardcoded path:
```js
if (NOTES_CONTENT[cleanName]) {
  var fld = NOTES_CONTENT[cleanName].folder || 'computer-systems';
  return '<a onclick="router.navigate(\'#/folder/' + encodeURIComponent(fld) + '/note/' + encodeURIComponent(cleanName) + '/learn\')">';
}
```

## Folder Header Panel

The topic hub now has a header panel showing folder icon, title, note count, attempt count, a horizontal progress bar, and percentage. CSS: `.folder-header` with `box-shadow: inset 0 1px 0 rgba(255,255,255,0.03)`. Implementation in `topic-hub.js`:

```js
var pct = stats.totalNotes > 0 ? Math.round((stats.completedNotes / stats.totalNotes) * 100) : 0;
html += '<div class="folder-header">' +
  '<div class="folder-header-progress"><div class="folder-header-progress-fill" style="width:' + pct + '%"></div></div>' +
  '<span class="folder-header-pct">' + pct + '% complete</span></div>';
```

## Status Badges

Each note card shows a colored status pill + status dot:

- **NOT STARTED** (grey) — no quiz attempts
- **IN PROGRESS** (amber) — best score below 80%
- **COMPLETED** (green) — best score 80%+

CSS classes: `.status-new`, `.status-progress`, `.status-done`. Progress is quiz-only — reading the Learn page does not count. This is explained in the DeepVault Guide's "Tracking Your Progress" section.

## Mark-as-Read + Scroll Memory

**Read indicator on Learn button:** The topic hub's Learn button shows a ✅ prefix when `localStorage.getItem('dv_read_' + folder.id + '_' + note)` returns truthy. This is checked at render time — the icon appears in the card list without needing to open the note.

**Read toggle in Learn page header:** A small link right-aligned next to the back link: "☐ Mark read" / "☑ Read". Toggles `localStorage` key `dv_read_FOLDERID_NOTENAME`. On click, also calls `TopicHub.render()` to refresh the card list (updating the ✅ indicator). Read status is purely cosmetic — it does NOT affect quiz progress or dashboard completion stats.

**Implementation**: `LearnView.render()` computes `var isRead = localStorage.getItem('dv_read_' + fid + '_' + nn)` before building the HTML string. The read toggle link is injected directly into the `innerHTML` string (NOT via DOM manipulation — that approach repeatedly broke due to escaping issues).

**Scroll memory:** `sessionStorage` saves `window.pageYOffset` under key `dv_scroll_FOLDERID_NOTENAME`. On reopening a note, `window.scrollTo(0, savedScroll)`. Uses a scroll event listener with `{passive: true}`. Cleared when the browser session ends (sessionStorage, not localStorage).

Implementation: `LearnView.render()` in learn.js. Computes `isRead = localStorage.getItem('dv_read_' + fid + '_' + nn)` before building HTML. The read toggle calls `TopicHub.render()` on click to refresh the card list (updating the ✅ indicator).

## TOC (Table of Contents) — Styling Requirements

The `.learn-toc` MUST have `background: var(--bg-primary)` to prevent a white/gray rectangle in dark themes. Without this, the TOC renders as a transparent blob that appears light gray or white against dark backgrounds — this is a browser default, not a CSS omission.

```css
.learn-toc {
  position: fixed; right: max(0px, calc((100vw - 1000px) / 2 - 170px));
  top: 76px; width: 150px; max-height: calc(100vh - 120px);
  overflow-y: auto; font-size: 0.8rem; z-index: 50;
  background: var(--bg-primary); padding: 0.5rem 0.75rem; border-radius: var(--radius);
}
```

## Card Depth Effect

Note cards have subtle depth: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.03)`. On hover: border-color changes to accent blue plus a soft glow (`0 0 12px rgba(88,166,255,0.08)`).

## Buttons Styling

- **Learn**: `.btn-learn` — muted background (`var(--bg-tertiary)`), book icon. Shows ✅ prefix when note is marked as read.
- **Quiz**: `.btn-quiz` — primary blue with `box-shadow: 0 0 8px rgba(88,166,255,0.15)`, trophy icon

## Tabs — Study + Guides

Each category page has two tabs at the top:

- **📚 Study** — notes WITH quiz data (`QUIZ_NOTES[folder.id]`). Shows progress dots, status badges, Learn + Quiz buttons.
- **🧭 Guides** — notes WITHOUT quiz data (overviews, comparisons, pipeline guides). May have Learn buttons but no Quiz.

**Split logic is QUIZ-BASED, not Learn-content-based:**

```js
if (quizNotes.indexOf(n) !== -1) studyList.push(n);  // Has quiz → Study
else guideList.push(n);                               // No quiz → Guides
```

Notes like `C++ vs UE C++ — Key Differences` are comparison overviews — they stay in Guides unless a quiz is explicitly added. The user decides which notes deserve quizzes; the tab split reflects that decision.

## Mobile Responsive

Media query at 768px breakpoint in components.css: single-column dashboard, hidden search + TOC, compact cards, smaller buttons. Learn view takes full width. Sequential nav wraps. Folder group headers compact.

## Sequential Navigation

Every Learn page shows "← Previous | 3/14 | Next →" at the bottom. Computed from `NOTES[folderId]` — follows the flat ordered list. Implementation: DOM insertion after `.learn-body` in `learn.js` render function.

Implementation in `topic-hub.js`: `TopicHub.activeTab = {}` tracks active tab per folder. Tab state persists per folder ID but resets on page navigation.

## After EVERY Tool Call — Respond

**Never return an empty response after executing tool calls.** This happened 12+ times this session alone — the user sees nothing, gets confused, prompts again. Pattern: execute tool → if result is good, write one line of text before the next tool call. If result is bad, explain what failed. Never stack tool calls with no text between them unless they're independent parallel reads.

If you find yourself producing empty responses, something is wrong with your output generation. Check that your final message is NOT blank before sending.

## Collapsible Groups — Double-Click Toggle Bug Fix

When `isCollapsed` is `undefined` (first render), `!undefined` = `true`, but the group was already showing as collapsed. Result: first click does nothing, second click expands. Two-click bug.

```javascript
// BROKEN — undefined flips to true (already collapsed)
this.collapsed[key] = !this.collapsed[key];

// FIXED — treat undefined as collapsed by default
if (this.collapsed[key] === undefined || this.collapsed[key] === true) {
  this.collapsed[key] = false;  // Expand
} else {
  this.collapsed[key] = true;   // Collapse
}
```

When vault folders contain subfolders (e.g., C++ Fundamentals has `Core Language/`, `Memory & Ownership/`, `OOP & Polymorphism/`, `Types & Data/`), notes are grouped into collapsible/expandable sections that mirror the Obsidian folder layout.

### Data Structure (`FOLDER_GROUPS` in `data.js`)

```js
const FOLDER_GROUPS = {
  'cpp-fundamentals': {
    '': ['C++ vs UE C++ — Key Differences'],           // Root notes (empty string key)
    'Core Language': ['const Correctness', 'Enums & enum class', ...],
    'Memory & Ownership': ['Object Memory Layout', 'Smart Pointers & Ownership', ...],
  },
};
```

- Empty string key `''` = notes in the folder root (no subfolder)
- Section names use forward slashes for nested paths (e.g., `'Advanced/Big O'`)
- The `convert.py` build script recursively scans vault folders, skipping `ANKI/` directories

### Rendering (`topic-hub.js`)

- Root notes render first (above groups)
- Each group renders as a collapsible card with: caret (▶/▼), folder icon, group name (slashes replaced with ` / `), and note count
- **Collapsed by default** — first click expands
- Group headers have card-style appearance: `background: var(--bg-secondary)`, `border: 1px solid var(--border)`, hover glow
- Group body uses `border-left: 1px solid var(--border)` as a visual tree-line

### Toggle Logic — Double-Click Bug

The toggle function MUST handle `undefined` explicitly. `!undefined` → `true`, but the group was already showing as collapsed. Two-click bug: first `toggleGroup` flips `undefined` → `true` (still collapsed), second flips to `false` (expanded).

```js
// CORRECT
if (this.collapsed[key] === undefined || this.collapsed[key] === true) {
  this.collapsed[key] = false;  // Expand
} else {
  this.collapsed[key] = true;   // Collapse
}
```

### Section headers (legacy — replaced by collapsible groups)

Previously, flat section headers were used (uppercase muted dividers). Collapsible groups are the current design. The old `section-header` CSS class is still present but unused by the current `topic-hub.js` render logic.

### Which notes go in Guides tab

These notes are overviews/pipeline guides — they exist as vault files but are explicitly excluded from `NOTES_CONTENT` (in `SKIP_FILES` during convert.py build):
- `From Source to Running Program — C++ Edition` (cpp-fundamentals)
- `From Trigonometry to 3D Transformations` (game-math)
- `Learning Path` (game-math)
- `From UCLASS to Running Object — The UE Core Pipeline` (ue-core)
- `From Input to Replication — The Networking Pipeline` (ue-networking)

CSS:
```css
.tabs { display: flex; gap: 0; margin-bottom: 1rem; border-bottom: 1px solid var(--border); }
.tab-btn { background: none; border: none; border-bottom: 2px solid transparent; color: var(--text-secondary); font-size: 0.85rem; padding: 0.5em 1em; cursor: pointer; }
.tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
.tab-count { background: var(--bg-tertiary); font-size: 0.7rem; border-radius: 10px; padding: 0.1em 0.45em; }
.tab-empty { text-align: center; padding: 2rem 0; color: var(--text-muted); }
```

### Which notes go in Reference tab

These notes are overviews/pipeline guides — no quiz, Learn-only:
- `From Source to Running Program — C++ Edition` (cpp-fundamentals)
- `From Trigonometry to 3D Transformations` (game-math)
- `Learning Path` (game-math)
- `From UCLASS to Running Object — The UE Core Pipeline` (ue-core)
- `From Input to Replication — The Networking Pipeline` (ue-networking)

## GitHub Icon

SVG octocat in header, same visual size as theme button (17px). Aligned via `display: inline-flex; align-items: center`. Separator `|` between nav links and icon group for future extensibility.

```html
<span class="header-sep">|</span>
<button class="theme-btn">...</button>
<a class="icon-link" href="https://github.com/MaykEu/DeepVault" target="_blank">
  <svg width="17" height="17" viewBox="0 0 16 16">...</svg>
</a>
```

## CSS Brace Balance — Critical Validation

**After any CSS edit, verify braces are balanced.** The most common cause of layout breakage (everything renders as plain text with no styling) is an unclosed `{` in `components.css`. The `replace_all` patch flag is especially dangerous — it nests selectors, producing corrupt `.folder-card { .folder-card { ... } }` blocks.

Validation command:
```bash
python -c "import re; c=open(r'D:\\User\\Desktop\\DeepVault\\css\\components.css').read(); c2=re.sub(r'/\*.*?\*/','',c,flags=re.DOTALL); print(c2.count('{')==c2.count('}'))"
```

Must return `True`. If `False`, the file has been corrupted — rewrite it cleanly from scratch.

## Theme Switcher

Four themes via CSS `[data-theme]` attribute on `<html>`. Single large icon button — clicking opens a sleek dropdown with theme names.

| Order | Theme | Emoji | CSS Attribute | Palette |
|---|---|---|---|---|
| 1 | Midnight | 🌙 | `[data-theme="midnight"]` | Navy blue (`#0d1117` — original dark) |
| 2 | Dark | 🌑 | `[data-theme="dark"]` | Deep gray (`#1e1e1e` — VS Code style, NOT purple) |
| 3 | Light | ☀️ | `[data-theme="light"]` | White (`#ffffff`) |
| 4 | AMOLED | 🌚 | `[data-theme="amoled"]` | Pure black (`#000000`) |

**`theme.js` architecture:**
- `Theme.init()` reads `deepvault_theme` from localStorage (defaults to `'midnight'`)
- `Theme.set(name)` sets `data-theme` attribute, updates button icon, closes dropdown
- `Theme.toggle()` builds and shows dropdown with all 4 options, highlights active
- `Theme.close()` hides the dropdown
- Outside-click listener dismisses the dropdown

**Header**: Button (`.theme-btn`: font-size 1.35rem, no border/background, scales on hover) + `<div id="theme-dropdown" class="theme-dropdown">`. The parent `.header-nav` MUST have `position: relative` for absolute positioning of the dropdown.

**CSS for dropdown:**
```css
.theme-dropdown {
  position: absolute; top: 100%; right: 0;
  background: var(--bg-secondary); border: 1px solid var(--border);
  border-radius: var(--radius); min-width: 170px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4); z-index: 300;
  display: none; overflow: hidden;
}
.theme-dropdown.open { display: block; }
.theme-option { padding: 0.55rem 0.85rem; font-size: 0.85rem; cursor: pointer; }
.theme-option.active { color: var(--accent); font-weight: 600; }
```

**Light theme syntax colors**: `<code>` elements use `var(--bg-tertiary)` background. Syntax highlighting needs light-specific colors in `components.css`:
```css
[data-theme="light"] .syn-kw { color: #cf222e; }
[data-theme="light"] .syn-type { color: #0550ae; }
/* etc. — all 7 syntax classes need light variants */
```
Without these, dark-theme syntax colors (#ff7b72, #79c0ff) are invisible against light backgrounds.

## Search

**`search.js`**: Lazy-built flat index on first use (≥2 chars typed). Three index types per note:
- `title`: note name
- `heading`: `## ` lines from content  
- `content`: first 2000 chars stripped of code blocks

Substring match, case-insensitive, top 15 results deduplicated. Click navigates to learn page, closes dropdown. Outside-click listener hides results.

Header: `<input id="search-input" class="search-input">` + `<div id="search-results" class="search-results">`. CSS: 200px wide, expands to 280px on focus. Results: absolute positioned, max-height 360px scrollable.

## Backlinks / Footnotes

**`learn.js`**: `buildBacklinks(noteName)` scans ALL `NOTES_CONTENT` and `REFERENCE` for `[[noteName]]` references. `renderBacklinks()` injects `<section class="footnotes">` at bottom of learn page body. Reference referrers link to `#/reference/...`. Not shown on reference pages themselves.
## Guide Content — Static File, NEVER Extract from Build

**The DeepVault Guide must be stored in `guide-content.txt` as raw unescaped text, never extracted from a previous `data.js` build.** The extraction process (character walk through JSON) produced double-escaped content (`\n` → `\\n` → `\\\\n` on subsequent builds). Symptom: the guide page renders thousands of backslashes and is unreadable.

**Fix:** Store guide content in `guide-content.txt` (plain text, not JSON-escaped). `convert.py` reads this file and passes it through `json.dumps()` once — correct escaping. The file is committed to git and never modified by convert.py.

Creation/recovery procedure:
```python
# Extract from a known-good git commit
import subprocess, json
r = subprocess.run(['git', '-C', repo_path, 'show', 'COMMIT_HASH:js/data.js'], capture_output=True, text=True)
# Walk character-by-character past the opening JSON quote
# json.loads('"' + extracted + '"') to decode JSON escapes
# Write decoded text to guide-content.txt
```

## Content License — Two-Tier

- **Code** (HTML/CSS/JS/convert.py): MIT — free to use, modify, learn from
- **Content** (notes, quizzes, guides): All Rights Reserved — may be copied for personal use, may NOT be used to build a competing product. No permission needed to republish individual notes. Documented in `CONTENT_LICENSE.md`.

## README/Contributing Fact-Checking

**Every claim in README.md and CONTRIBUTING.md must be verified against actual files.** Checked facts:
- Question count: `grep -c` for multiple_choice and text_input types
- Note count: convert.py output
- Commit count: `git rev-list --count HEAD`
- Learning Path existence: check vault folders for Learning Path.md
- ES5 vs ES6: read actual JS files, don't assume
- QUIZ_NOTES is auto-generated by convert.py — never say it needs manual editing

## Workflow Rules — Continuous Execution

**Never pause between work batches.** The user has explicitly corrected this multiple times: "Don't stop just continue working," "stop announcing just work until done," "don't do this every time where you just stop and don't do anything." When you have multiple batches of work (quizzes, fixes, LP updates), commit the current batch and immediately start the next. Never wait for a sub-agent without also doing your own work.

**Never announce intentions without acting.** "My 9 notes" followed by nothing, "Starting now" followed by silence — these patterns have been called out repeatedly. When you say you'll do X, do X immediately in the same response.

**One agent per task.** User: "Always have 1 do the job. Only if I tell you to both do it, you can do it both." The Verifier and Helper should not be doing the same task simultaneously unless explicitly commanded.

**Only one agent writes data.js.** Parallel writes from multiple agents cause git conflicts and lost work. The Helper sends quiz content as JSON to a file (`_quizzes.json`) on disk. The lead agent reads the JSON and inserts QUIZ_DATA and QUIZ_NOTES entries. Never let the Helper write data.js directly.

**Coach sub-agents; don't take over.** When a sub-agent makes a mistake, tell them what went wrong, show the correct approach, have them fix it, then verify. Never silently fix their work and move on. This teaches the sub-agent and prevents bottlenecking. See `references/sub-agent-coaching.md`.

## Dashboard — Quiz Count Line

The folder card meta line shows three numbers: `stats.totalNotes` notes · `QUIZ_NOTES[folder.id].length` quizzes · `stats.completedNotes` attempts. Implementation in `dashboard.js`:

```js
var quizCount = QUIZ_NOTES[folder.id] ? QUIZ_NOTES[folder.id].length : 0;
html += '<div class="folder-meta">' + stats.totalNotes + ' notes · ' + quizCount + ' quizzes · ' + stats.completedNotes + ' attempts</div>';
```

## Wiki Link Resolution — Order of Operations

The wiki handler in `learn.js` must resolve links correctly across multi-level folder paths AND aliases with slashes. The correct order:

```js
cn = name.split('|')[0]                // 1. Extract target BEFORE alias (handles | in markdown tables)
       .replace(/^.*\//,'')            // 2. Strip ALL folder prefixes greedily (Hardware/Storage/ → )
       .replace(/^\.\.[^/]+\//,'')     // 3. Strip ../ patterns
       .split('#')[0].trim();          // 4. Handle heading anchors
```

**Split on `|` FIRST** — this separates the link target from the alias BEFORE folder prefix stripping. Greedy `^.*/` correctly handles multi-level paths (`Hardware/Storage/00 — Overview` → `00 — Overview`). If split is done AFTER prefix stripping, aliases containing `/` (like `variant/optional/any`) get mangled by the greedy strip.

- **Commit locally before any risky change** — `git add -A && git commit -m "snapshot before X"`
- **NEVER push without explicit user permission.** The user has corrected this multiple times. "push the changes" or "go ahead and push" = permission. Silence or "committed locally" = wait.
- The user controls all deploys to the live site.

## Previously Viewed — Storage + Dashboard

## QUIZ_DATA Append Bug — CORRUPTS REFERENCE

**The most common data.js corruption:** Helper appends QUIZ_DATA entries with `data += "\nQUIZ_DATA['...'] = {...};\n"` — this puts quiz data AFTER the REFERENCE block, truncating it. Symptom: Glossary, Guide, and all 6 Learning Paths vanish from the website.

**Fix:** ALWAYS insert QUIZ_DATA BEFORE REFERENCE:
```python
ref_start = data.find("const REFERENCE = {")
data = data[:ref_start] + new_quiz + "\n\n" + data[ref_start:]
```

**Recovery:** Extract REFERENCE from a known-good git commit, then rebuild from vault files. See `references/quiz-append-bug.md` for the full recovery procedure. **Prevention:** `grep -c "'Learning Path —" data.js` must return 6 after every edit.

## Previously Viewed — Storage + Dashboard

`Storage.addRecent(folderId, noteName)` is called from `LearnView.render()` (not renderRef). Max 10 entries, newest first, deduplicated. Dashboard renders them with per-item delete (✕) and "Clear all" button. Stored in localStorage under `deepvault_history.recent[]`.

```js
// In learn.js render():
LearnView.syncTOC();
Storage.addRecent(fid, nn);  // Must come after render
```

`renderRef` does NOT call `Storage.addRecent()` — reference pages are not tracked.

## Quiz Creation — Multi-Folder Bulk Pattern

**CRITICAL: Only ONE agent writes to data.js. Helper never writes — sends JSON file instead. See `references/quiz-creation-workflow.md`.**

When adding quizzes for multiple folders at once, follow this division of labor:

- **Sub-agents only for parallel independent work (max 2). The user has called out unnecessary sub-agent usage multiple times.** If you can do it efficiently yourself in a few calls, do it yourself. Sub-agents are expensive and often fail (fabricate content, can't find files). Always verify their output. When they fail, delete their mess and do it yourself.
- **Every plan MUST state "Direct" or "Sub-agent for [X]" with the reason.** The user wants to know before you dispatch.
- **UE quizzes require source verification.** Assign them to yourself — never trust sub-agents on UE engine claims.
- **C++ and Math quizzes are self-verifying.** Sub-agents can handle these since answers derive directly from note content.

The user prefers 2 sub-agents max, and you must take one of the phases yourself (typically the hardest one with source-verification requirements).

Quiz format rules:
- 5-10 questions per note, mixed MC and text input
- Multiple choice: 2-4 options as naturally fit — don't force exactly 4
- Text input: `correctAnswer` + `acceptableAnswers` array for synonyms
- Every question MUST have an explanation
- No made-up facts — extract directly from the note text

**After creating quizzes: verify accuracy.** Check a sample of answers against known facts (binary arithmetic, register names, complexity classes, etc.). Use grep on data.js to find specific answers and verify they match reality. The user called quiz mistakes "a disaster" — accuracy is mandatory.

## Rebuilding data.js — The Correct Way

The `convert.py` script must handle recursive folder scanning with proper root/subfolder separation. Key requirements:

1. **Use `os.walk` with ANKI filtering:** `dirs[:] = [d for d in dirs if d.upper() != 'ANKI' and d != '.obsidian']`
2. **Root notes go in `groups['']`, subfolder notes in their respective groups.** NEVER place subfolder notes in the root group.
3. **Build flat NOTES list: root first, then alphabetical sections.** `flat = groups.get('', [])` then `for s in sorted(...): flat.extend(groups[s])`
4. **SKIP_FILES** excludes overview/pipeline notes (From Source to Running Program, etc.) from NOTES_CONTENT but they still appear in the Guides tab.
5. **After rebuild, verify:** `node -c data.js` AND `grep -c "QUIZ_DATA\\['" data.js` AND spot-check 3+ notes across different folders for "ANKI" in the title.

**The root group corruption bug:** Previous scripts populated the root `''` group with ALL notes instead of just root-level notes. Symptom: `FOLDER_GROUPS['cpp-fundamentals']['']` contained 22 notes (total) instead of 1 (root). The standalone test confirmed 1 note, but the build output showed 22. Lesson: always verify `FOLDER_GROUPS` output after every build — check root group counts against expected root files.

## Python String Quoting — r" + ' = SyntaxError

**NEVER mix r" (raw-double) with ' (single-quote) as the closing delimiter.** This error happened 10+ times this session, always wasting a tool call:

```python
# BROKEN — mixed quotes
with open(r"D:\...\file.js', 'r', encoding='utf-8') as f:  # SyntaxError: unterminated string

# CORRECT
with open(r"D:\...\file.js", 'r', encoding='utf-8') as f:
# or
with open(r'D:\...\file.js', 'r', encoding='utf-8') as f:
```

**Prefer r'...' (raw single-quote) for Windows paths.** Raw-double is a magnet for this mistake.

## Python String Quoting — `r" + ' = DEATH`

**NEVER mix `r"` (raw-double) with `'` (single-quote) as the closing delimiter.** Hit 20+ times across sessions. Every occurrence wastes a tool call and produces `SyntaxError: unterminated string literal`:

```python
# BROKEN — mixed quotes (the #1 Python error in DeepVault sessions)
with open(r"D:\...\file.js', 'r', encoding='utf-8') as f:  # DEATH

# CORRECT — match the quote types
with open(r"D:\...\file.js", "r", encoding="utf-8") as f:
# or
with open("D:\\...\\file.js", "r", encoding="utf-8") as f:
```

**Prefer double-backslash paths in regular strings** over raw strings to avoid this trap entirely.

## `node -c` on Windows — Can't Use stdin**

`node -c` on Windows does NOT accept stdin for syntax checking. Must use temp files:

```python
# WRONG
subprocess.run(['node', '-c', path], input=data.encode())  # silently fails

# RIGHT — write temp file first
tmp = r'D:\temp_check.js'
with open(tmp, 'w', encoding='utf-8') as f:
    f.write(data)
r = subprocess.run(['node', '-c', tmp], capture_output=True, text=True)
os.remove(tmp)
```

This is the ONLY reliable pattern for syntax-checking generated JS on Windows.

## Push Protocol — CRITICAL

**Never push to GitHub without explicit user permission.** The user controls all deploys. Commit locally freely (especially before risky changes for easy revert), but pushing requires a direct command. The user has corrected this multiple times. Pattern: commit with `git add -A && git commit -m "..."` but NEVER follow with `git push` unless the user says "push" or "push it."

## `write_file` Truncation

The `write_file` tool can silently truncate content — LICENSE.md was cut to 218 bytes mid-sentence, README.md to 205 bytes. **Always verify file size after `write_file`.** If content exceeds ~1KB, use `execute_code` with Python file I/O instead:

```python
with open(r'path', 'w', encoding='utf-8') as f:
    f.write(content)
```

## DeepVault Guide — Static File Pattern

The DeepVault Guide is stored in a separate `guide-content.txt` file containing the RAW (not JSON-escaped) markdown text. `convert.py` reads this file directly instead of extracting from a previous `data.js` build. This prevents double-escaping corruption (`\n` → `\\n` → `\\\\n`) that destroyed the guide content across multiple rebuilds.

The file is created by extracting the guide from a known-good git commit, then running `json.loads()` to decode JSON escapes to real text:

```python
import subprocess, json
r = subprocess.run(['git', '-C', r'D:\User\Desktop\DeepVault', 'show', 'COMMIT:js/data.js'], capture_output=True, text=True)
# ... extract guide JSON string ...
decoded = json.loads('"' + raw + '"')
with open(r'D:\User\Desktop\DeepVault\guide-content.txt', 'w', encoding='utf-8') as f:
    f.write(decoded)
```

## Sub-Agent Pitfalls

**Sub-agents do not check file paths.** They work in isolated environments with no access to your working directory. Always provide absolute paths in the `context` field. But even then, they often fail to locate files. Prefer direct execution over delegation for file-based work.

**ANKI note contamination — CRITICAL:** The `convert.py` script was reading from ANKI subdirectories within vault folders, embedding flashcard-format notes instead of the actual reference notes. Notes showed `# ANKI — Note Name` titles and `Front:/Back:` question-answer format. Symptom: user reports "most notes are ANKI notes." Fix: rebuild data.js reading ONLY `.md` files from the root of each vault folder, explicitly skipping `ANKI/` subdirectories. Always verify a sample of 3+ notes across different folders for "ANKI" in the title after rebuild.

## Export/Import Progress

Two buttons in a `.toolbar` div at the BOTTOM of the dashboard (moved from top for better UX) (`storage.js` + `dashboard.js`):

- **Export**: `Storage.exportData()` — JSON.stringify → Blob → download as `deepvault_progress_DATE.json`
- **Import**: File input → `Storage.importData(file)` — JSON.parse, merge duplicates by `attempt.id` into existing localStorage

Dashboard HTML: `<button class="btn btn-outline btn-sm" onclick="Storage.exportData()">📥 Export</button>` + hidden `<input type="file" id="import-file">`. CSS: `.btn-outline { background: transparent; border: 1px solid var(--border); }`.

## Tab Split — Study vs Guides

The split logic between Study and Guides tabs is **quiz-based**, not Learn-content-based:

```js
if (quizNotes.indexOf(n) !== -1) studyList.push(n);  // Has quiz → Study
else guideList.push(n);                               // No quiz → Guides
```

A note without quiz data goes to Guides even if it has Learn content. Notes like `C++ vs UE C++ — Key Differences` that are comparison overviews typically lack quizzes and appear in Guides. If the user says a note should have a quiz, add quiz data rather than changing the tab logic.

## Quizzes — Bulk Creation Validation

After creating quizzes in bulk, **always verify QUIZ_NOTES matches QUIZ_DATA.** The QUIZ_NOTES array must be rebuilt after adding quizzes, otherwise quiz buttons won't appear even though quiz data exists. The rebuild pattern:

```python
quiz_notes = set(re.findall(r"QUIZ_DATA\['([^']+)'\]", data))
# Rebuild QUIZ_NOTES from NOTES list, filtering to quiz_notes
```

**After verify, check the actual QUIZ_NOTES array for the missing entry.** The replace-based approach (`data.replace(old, new)`) can silently fail because the exact text doesn't match (indentation, trailing commas). When adding a single quiz entry to QUIZ_NOTES, grep the current list FIRST, then use that exact text as the old_string.

## DeepVault Guide — NEVER Extract From Previous Build

**The DeepVault Guide content MUST be stored in a static `guide-content.txt` file** at project root. Never extract it from a previous `data.js` build — the JSON double-escaping cascade will corrupt it beyond recovery.

**What happens:** Extracting `REFERENCE['DeepVault Guide']` from `data.js` via regex gives you JSON-escaped text (`\n`, `\u2014`). When `convert.py` passes this through `json.dumps()` to write the new `data.js`, these get escaped AGAIN → `\\n`, `\\u2014`. After 2-3 rebuild cycles, the guide becomes thousands of backslashes.

**Fix:** Read guide from `guide-content.txt` (plain text, no JSON escaping). convert.py reads it with `open().read()` and passes it directly to `json.dumps()`. If `guide-content.txt` is missing, use a hardcoded fallback string.

```python
# In convert.py:
guide_file = r'D:\User\Desktop\DeepVault\guide-content.txt'
old_guide = ''
if os.path.exists(guide_file):
    with open(guide_file, 'r', encoding='utf-8') as f:
        old_guide = f.read()
if not old_guide:
    old_guide = '# DeepVault Guide\n\nWelcome to DeepVault...'  # fallback
```

**If corrupted:** `git show <good_commit>:js/data.js` → extract guide → `json.loads('"' + extracted + '"')` → save as raw text to `guide-content.txt`.

## convert.py — `'  title'` Spaced Keys Bug (Dashboard Shows 0 Notes)

**Symptom:** Dashboard shows "0 notes · 0 with attempts" for every folder despite NOTES_CONTENT having 164 entries.  
**Root cause:** convert.py generates NOTES_CONTENT entries with spaced keys: `'  title'`, `'  folder'`, `'  content'` (two leading spaces inside the single quotes). JavaScript parses these literally — `obj.folder` returns `undefined` because the actual key is `'  folder'`. `Storage.getFolderStats` iterates `NOTES_CONTENT[k].folder` and filters by folderId — all entries return `undefined`, resulting in zero matches.

**Detection:** `grep -c "\"'  title'\"" js/data.js` — non-zero count means the bug is active.

**Fix in convert.py:** The key generation line uses an f-string with `\n    title:` (newline + indentation + bare key). The spaces before `title` become part of the quoted key. Fix: use single-line format `{title: "...", folder: "...", content: ...}` instead of multi-line:
```python
# BROKEN
lines.append(f"  '{name}': {{\n    title: \"{name}\",\n    folder: \"{obj['folder']}\",\n    content: ...\n  }},")

# FIXED  
lines.append(f"  '{name}': {{title: \"{name}\", folder: \"{obj['folder']}\", content: ...}},")
```

**Quick fix for existing data.js:** `python -c "d=open('js/data.js').read(); d=d.replace(\"'  title':\",\"'title':\").replace(\"'  folder':\",\"'folder':\").replace(\"'  content':\",\"'content':\")\"` 

## `convert.py` — Rebuild Validation Checklist

After ANY `convert.py` rebuild, run these checks:
1. `node -c js/data.js` — syntax
2. `grep -c "QUIZ_DATA\['" js/data.js` — quiz count (should be 67+)
3. `grep -c "DeepVault Guide" js/data.js` — guide present (should be 1)
4. Spot-check 3+ notes across different folders for `ANKI` in title
5. Verify FOLDER_GROUPS root counts match expected root files
6. Check REFERENCE for trailing commas (`your device.\",,` pattern)

## Angle Bracket / Backtick — The Correct Algorithm

**NEVER use regex to check "is the character right before `<` a backtick?"** This fails because `<T>` can be sandwiched between two DIFFERENT backtick spans: `` `word`<T>`more` ``. The backtick before `<` belongs to the LEFT span (closing `word`); the backtick after `>` belongs to the RIGHT span (opening `more`). `<T>` is UNPROTECTED from HTML parsing.

**The ONLY correct algorithm (verified across 1,800+ fixes):**
```
For each `<` followed by an uppercase letter outside code fences:
  Count ALL backticks on the line before this `<` position.
  If count is EVEN → `<` is outside any backtick span → MUST wrap in backticks.
  If count is ODD → `<` is inside a backtick span → already protected.
```

Also: merge adjacent backtick spans separated by only an angle bracket. `` `Cast`<T>`()` `` → `` `Cast<T>()` ``. Do this BEFORE the count check.

**Why character-before regex fails:** It can't distinguish between "the closing backtick of one span" and "the opening backtick of the same span." Counting total preceding backticks is unambiguous and always correct.

## LP Card Design — Learning Path Index Page

The Learning Path index page uses card buttons (`.lp-card`) instead of a markdown table. Implementation in `learn.js` `renderRef()`: detects `refName === 'Learning Path'` and renders 6 card elements directly — no markdown processing. CSS: `.lp-grid` (2-column grid on desktop, single on mobile), `.lp-card` (left-accent border by category color, no progress bars, hover glow). Onclick uses the dashboard pattern: double-quoted HTML attribute, single-quoted JS string. `href="javascript:void(0)"` — never `href="#"` (triggers dashboard before onclick fires).

## Guide Links — "Coming Soon" Problem

Wiki links in the DeepVault Guide pointing to overview/pipeline notes (NOT in NOTES_CONTENT) show "(coming soon)" in the browser. Fix: convert these to **bold** text instead of `[[wiki links]]`:
- `[[From Transistor to Running Program]]` → `**From Transistor to Running Program**`
- `[[From Trigonometry to 3D Transformations]]` → `**From Trigonometry to 3D Transformations**`
- `[[From UCLASS to Running Object — The UE Core Pipeline]]` → `**UE Core Pipeline**`
- `[[From Input to Replication — The Networking Pipeline]]` → `**Networking Pipeline**`
- `[[From Source to Running Program — C++ Edition]]` → `**From Source to Running Program**`

## LP Card Design — Dashboard Pattern

The Learning Path index page uses card buttons instead of a markdown table. Reference: `learn.js` `renderRef()` detects `refName === 'Learning Path'` and renders 6 `.lp-card` elements. CSS: `.lp-grid` (2-column), `.lp-card` (left-accent border, no progress bars, hover glow). Onclick uses the dashboard pattern: double-quoted HTML attribute, single-quoted JS string. See `references/lp-cards.md`.

## DeepVault Guide — MUST Update from Vault First

**The Guide in the Obsidian vault is the canonical source.** Before syncing to data.js, update `DeepVault Guide.md` in the vault. Then read from vault and inject into REFERENCE. The `convert.py` rebuild uses `guide-content.txt` — keep that file in sync with the vault guide.

## Folder Map Empty-Line Table Bug

## Sequential Navigation

Every Learn page shows "← Previous | 3/14 | Next →" at the bottom. Computed from `NOTES[folderId]` — follows the flat ordered list. Implementation: DOM `insertAdjacentHTML` after `.learn-body` in `learn.js` render function, after the mark-as-read button. CSS: `.seq-nav { display: flex; justify-content: space-between; border-top: 1px solid var(--border); }`.

```js
var allNotes = NOTES[fid] || [];
var idx = allNotes.indexOf(nn);
var prev = idx > 0 ? allNotes[idx - 1] : null;
var next = idx < allNotes.length - 1 ? allNotes[idx + 1] : null;
```

## Mobile Responsive

Media query at 768px in `components.css`. Rules: single-column dashboard, hidden search/TOC, compact cards, smaller buttons. Learn view takes full width. Sequential nav wraps. Group headers compact. Test on actual phone — not just browser resize.

## Commit Discipline + Push Control

**Commit before ANY risky batch of changes.** `git add -A && git commit -m "snapshot before X"`. This lets you `git revert` if things break.

**NEVER push without explicit permission from the user.** This is a hard rule — the user has corrected this multiple times and called it "a big no no." The user controls ALL deploys. When you push without asking, you're shipping untested changes to the live site. Any push you make is immediately live at `maykeu.github.io/DeepVault`. Commit locally only — let the user decide when to push.

**Content licensing constraint:** The project code (HTML/CSS/JS) uses MIT license. The vault content (notes, quizzes, Learning Paths, Guide) is All Rights Reserved — it is the user's intellectual property and cannot be republished by others. This split must be reflected in any licensing files or README sections. `git add -A && git commit -m "snapshot before X"`. This lets you `git revert` if things break. Never push without explicit permission. The user expects frequent local commits as safety nets — "make sure to do commits when you need to especially when you will do things that might not work or break."

## Sub-Agent Verification — Always Required

After sub-agents complete, verify:
1. `grep -c "QUIZ_DATA\\['" data.js` — correct quiz count
2. Spot-check 3+ questions for accuracy
3. Read the file they wrote — don't trust their self-report
4. If they fabricated content (common), delete their output immediately
5. When in doubt, do the work yourself

## Browser Tools — First for Website Debugging

**Always verify website issues with `browser_navigate` + `browser_console` BEFORE writing Python simulations.** The browser shows ACTUAL rendered output — simulations miss edge cases. Install Chrome once: `agent-browser install`. Use cache-busting URLs (`?v=N`). Check `document.querySelectorAll('.wiki-link-missing').length` on every LP page (must be 0).

## Workflow — Never Pause Between Batches

When working on multi-batch tasks, continue without pause. Commit, then immediately start the next batch. Never wait for sub-agents without also doing your own work in the same response.

## Design Branches — UI Experiments

Major UI changes (dashboard redesign, new card layouts, theme changes) should be developed on a feature branch: `git checkout -b design/feature-name`. Present for user review BEFORE merging to main. Pattern: branch → implement all changes → verify in browser → commit → user reviews → merge if approved. Never develop UI experiments directly on main.

## data.js Insertion — Brace-Counting Is Fragile

Adding entries to NOTES_CONTENT by finding the closing `}` via brace-depth counting is unreliable — the counter lands in QUIZ_DATA or REFERENCE territory, producing `SyntaxError: Unexpected token ':'`. **The ONLY reliable approach that works on first try:** use line-based insertion. Read all lines, find the `};` that closes NOTES_CONTENT (it's followed by `QUIZ_DATA` text on the next line), and insert BEFORE it:

```python
with open(DATAJS, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the "};" closing NOTES_CONTENT — it's before QUIZ_DATA entries start
insert_at = None
for i, line in enumerate(lines):
    if line.strip() == '};' and i+1 < len(lines) and 'QUIZ_DATA' in lines[i+1]:
        insert_at = i
        break

if insert_at is not None:
    lines.insert(insert_at, entry)
    with open(DATAJS, 'w', encoding='utf-8') as f:
        f.writelines(lines)
```

**Never** use character-walking, depth-counting, or `data.replace('\n};\nQUIZ_DATA', ...)` — all of these fail on this file's specific structure. String-based insertion into an array of lines with `list.insert()` is the only approach that works reliably. This was discovered after ~10 failed attempts with every other method.

## Scroll Bug — Remove SessionStorage Restore

Remove scroll memory restore (`sessionStorage` save/restore of scroll position). Always `window.scrollTo(0,0)` on render. Prevents clicking a link and landing at a random section.

## LP Pipeline Links — MUST Be Working Links, Not Bold

Pipeline overview notes (From Transistor, From Trigonometry, From UCLASS, From Input, From Source) are page-length notes with real content — students expect them to be clickable. **Never convert them to bold text as a workaround for broken links.** The correct fix:

1. Use the line-insertion method above to add each pipeline note to `NOTES_CONTENT` with its proper `folder` and `content`
2. Ensure the vault LP `.md` files use `[[wiki links]]` (not `**bold**`) for these notes
3. Rebuild the REFERENCE section from vault LP files OR do targeted `data.replace("**Note**", "[[Note]]")` in the REFERENCE block

The notes live at:
- `Computer Systems/From Transistor to Running Program.md` → folder: `computer-systems`
- `Game Math/From Trigonometry to 3D Transformations.md` → folder: `game-math`
- `UE Core/From UCLASS to Running Object — The UE Core Pipeline.md` → folder: `ue-core`
- `UE Networking/From Input to Replication — The Networking Pipeline.md` → folder: `ue-networking`

## Link Verification — MUST Test in Browser After JS Edits

**Never trust `node -c` alone.** It checks syntax but not runtime errors, rendering bugs, or broken wiki links. After ANY edit to `learn.js`, `data.js`, `router.js`, or CSS:
1. Open `index.html` in a browser with a cache-busting query parameter (`?v=N` or `?nc=N`)
2. Navigate to at least 2 LP pages and verify links resolve (not "(coming soon)")
3. **Browser caching is insidious** — a prior corrupted version persists across refreshes. Always bump the cache-bust parameter after every JS edit.
4. Use `browser_navigate` + `browser_console` when available to verify live. Check for `LearnView is not defined` (runtime error) and `wiki-link-missing` count (should be 0).

**Programmatic link resolution** is the gold standard. Simulate the wiki handler logic in Python against all LP pages before declaring links fixed. Verify every `[[link]]` resolves to either NOTES_CONTENT, REFERENCE, or FOLDER_GROUPS.

**Three wiki-handler bugs are documented in `references/wiki-link-handler-debugging.md`.** Read that file FIRST when any LP link shows "(coming soon)". The bugs are: table parser splits `|` inside `[[link|alias]]`, greedy regex on aliases with `/`, and numbered prefix regex eating note names.

## Collapsible Groups — Double-Click Bug

The toggle function MUST handle `undefined` explicitly. `!undefined` → `true`, but the group was already showing as collapsed. Two-click bug: first `toggleGroup` flips `undefined` → `true` (still collapsed), second flips to `false` (expanded).

```js
if (this.collapsed[key] === undefined || this.collapsed[key] === true) {
  this.collapsed[key] = false;  // Expand
} else {
  this.collapsed[key] = true;   // Collapse
}
```

## Mark-as-Read + Scroll Memory

**Read indicator on Learn button:** Topic hub checks `localStorage.getItem('dv_read_' + folder.id + '_' + note)`. Shows ✅ prefix. Computed BEFORE HTML string — never via DOM manipulation (escaping hell).

**Read toggle in Learn page header:** Small link right-aligned: "☐ Mark read" / "☑ Read". Injected as inline HTML string (NOT DOM — broken multiple times). On click, calls `TopicHub.render()` to refresh card list.

**Scroll memory:** `sessionStorage.setItem('dv_scroll_FOLDER_NOTE', pageYOffset)` on scroll. Restored on open. sessionStorage (cleared on browser close, not localStorage).

## CSS Brace Validation — Mandatory After Every CSS Edit

```bash
python -c "import re; c=open('css/components.css').read(); c2=re.sub(r'/\*.*?\*/','',c,flags=re.DOTALL); print(c2.count('{')==c2.count('}'))"
```

Must return `True`. If `False`, components.css is corrupted — rewrite it cleanly. The `replace_all` patch flag is the #1 cause of CSS corruption. When replacing CSS, always provide enough context for a UNIQUE match, or rewrite the entire file.

## convert.py — Full Rebuild Script

Now at project root (`D:\User\Desktop\DeepVault\convert.py`). Handles: FOLDER_GROUPS, NOTES, QUIZ_NOTES, QUIZ_DATA preservation, NOTES_CONTENT, REFERENCE. Validates with `node -c` before writing. DeepVault Guide extraction uses char-by-char walker (regex fails on escaped quotes). Run: `python convert.py` from project root.

## Scripts

- `scripts/convert.py` — The authoritative data.js builder (also at project root: `D:\User\Desktop\DeepVault\convert.py`). Recursive folder scanning, ANKI filtering, root/subfolder separation, quiz preservation, DeepVault Guide extraction. Run `python convert.py` from project root to rebuild.
- **`quiz-cli.py`** — Safe quiz management CLI. Commands: `add quizzes.json` (insert QUIZ_DATA before REFERENCE, update QUIZ_NOTES), `list` (count quizzes), `verify` (check all QUIZ_DATA entries have valid JSON, answers in options, explanations), `backup` (dump to JSON), `restore`. **Use this instead of manual data.js insertion whenever possible.** 132 quizzes verified, 0 errors as of 2026-07-04.
- **`test.js`** — Smoke tests for DeepVault. `node test.js` validates: JS syntax (all 12 files), CSS brace balance, quiz format (valid JSON, answers in options, explanations), REFERENCE entries, FOLDER_GROUPS folders, no debug artifacts. 20/20 pass. Run before any commit that touches data.js or learn.js.

## Sub-Agent Coaching

**When a sub-agent makes a mistake, teach them — don't take over.** See `references/sub-agent-coaching.md`. Pattern: tell them what went wrong, show the correct approach, have them fix it, verify. Never silently fix their work and move on. This prevents the sub-agent from learning and creates a cycle where the lead agent becomes a bottleneck.

## Dashboard — Onboarding + Progress

### Welcome Hero (First-Time Visitors)
Dismissible banner rendered when `localStorage.getItem('dv_onboarded')` is null. Shows vault stats + "Start with Computer Systems" CTA. Click ✕ to dismiss permanently. Implementation at `dashboard.js:3` — before the folder grid loop. CSS in `base.css` under `.welcome-hero`.

### Color-Coded Progress Bars
Three states: empty (grey, no label — 0%), in-progress (amber bar + "24% complete" — 1-49%), substantial (green bar + "72% complete" — 50%+). Implementation: `var pctClass = pct > 0 ? (pct < 50 ? 'progress-amber' : 'progress-green') : ''`. CSS: `.folder-progress-fill.progress-amber { background: #d2991d; }` `.folder-progress-fill.progress-green { background: #3fb950; }`.

### "Start Here" Badge
On the first folder card (Computer Systems) when onboarding hasn't been dismissed. Absolute-positioned badge: "Start here" in accent color, top-right corner. CSS: `.folder-card-badge { position: absolute; top: 0.5rem; right: 0.5rem; background: var(--accent); ... }`.

### Meta Label Semantics
Show "X notes · Y quizzes" for all folders. Show " · Z completed" only when Z > 0. Never show "0 completed" or "0 attempts" — these read as broken. Implementation: `(stats.completedNotes > 0 ? ' · ' + stats.completedNotes + ' completed' : '')`.

### Numbered Study List
Prefix each note in the Study tab with its position in `NOTES[folderId]`. Strips existing `\d+ — ` prefix to avoid duplicate numbering (e.g., "01. Variables, Types & Memory" not "01. 01 — Variables, Types & Memory"). Implementation in `topic-hub.js` `noteCard()`:
```js
var noteIdx = NOTES[folder.id] ? NOTES[folder.id].indexOf(note) : -1;
var prefix = noteIdx >= 0 ? String(noteIdx + 1).padStart(2, '0') + '. ';
// Then: note.replace(/^\d+ — /, '') before rendering
```

### Bookmarking — Star Toggle + Bookmarks Tab

Note cards have a star icon (☆/⭐) that toggles bookmark state. Three-tab interface on every folder page: Study · **Bookmarks** · Guides. Storage: `localStorage` key `dv_bookmarks` — array of `[folderId, noteName]` tuples. Implementation across 3 files:
- `storage.js` — `toggleBookmark(fid, nn)`, `isBookmarked(fid, nn)`, `getBookmarks()`
- `topic-hub.js` — star HTML in `noteCard` (☆ when inactive, ⭐ gold when active), third tab button (`'bookmarks'`), filter logic (`bmList` filtered from `getBookmarks()`)
- `components.css` — `.bookmark-star` (gold `#d2991d` when `.active`, grey `var(--text-muted)` otherwise, `margin-left: auto` for right-alignment)
- `references/guide-corruption.md` — JSON double-escaping cascade that destroys the DeepVault Guide. Recovery procedure.
- `references/link-verification.md` — **READ FIRST.** Wiki link handler fix, numbered folders, scroll bug, content verification methodology. Programmatic link resolution is mandatory — never trust memory.
- `references/wiki-link-debugging-trace.md` — **2026-07-04 session record.** Full debugging trace of the "(coming soon)" bug: table parser inBr tracking, greedy regex, `\u2014` JSON escape, browser caching. Read when ANY LP link is broken.
- `references/tool-quirks.md` — write_file truncation, replace_all CSS corruption, execute_code unicode escapes, terminal heredoc issues, git show truncation.
- `references/open-source-setup.md` — When preparing the project for public release: LICENSE, README, CONTRIBUTING creation, fact-checking, SKILL.md placement.
- `references/cross-session-audit.md` — Reviewing another AI session's DeepVault plan via session_search. Evaluation criteria, common issues, response format.

## Root Group Contamination — CRITICAL PITFALL

The `FOLDER_GROUPS['folder-id']['']` root group sometimes gets populated with ALL notes instead of just root-level notes. This bug manifests in `convert.py` but NOT in standalone test scripts — the cause is an `os.walk`/`os.path.relpath` platform interaction on the user's Windows iCloud Drive path that is not reproducible in sandbox environments.

**Symptom:** After `convert.py` rebuild, the root `''` group for `cpp-fundamentals` contains 22 notes (all notes from all subfolders) instead of 1 (just `C++ vs UE C++ — Key Differences`). The subfolder groups are correct.

**Fix (in convert.py, after the group collection loop):**
```python
# POST-PROCESSING: Rebuild root group from scratch
all_sub_notes = set()
for section, note_list in group.items():
    if section:
        for n in note_list:
            all_sub_notes.add(n)
root_only = [n for n in group.get('', []) if n not in all_sub_notes]
if root_only:
    group[''] = root_only
elif '' in group:
    del group['']
```

**OR, as a final safety net on the output string (regex-based):**
```python
# Must include EVERY folder that has subfolders!
output = re2.sub(r"'(?:computer-systems|cpp-fundamentals|game-math)':\\s*\\{[^}]+\\}", fix_root, output, flags=re2.DOTALL)
```
Where `fix_root` extracts the root entry, collects all subfolder notes, and removes subfolder notes from root.

**CRITICAL: When a folder gains subfolders for the first time, it MUST be added to this regex alternation.** The `computer-systems` folder was missing from the regex for several rebuild cycles, causing all 20 notes to appear in the root group alongside their correct subfolder groups. Adding `computer-systems` to the regex fixed it. Check: `grep -c "computer-systems|cpp-fundamentals|game-math" convert.py` — every subfoldered folder must be in that pipe-separated list.

**Verification after rebuild:**
```bash
python -c "import re; d=open('js/data.js').read(); m=re.search(r\"'cpp-fundamentals': \{(.*?)\n  \},\",d,re.DOTALL); root=re.findall(r\"'':\s*\[(.*?)\]\",m.group(1),re.DOTALL); print(f'Root notes: {len(re.findall(chr(39)+\"([^\"+chr(39)+\"]+)\"+chr(39),root[0]))}')"
```
Must return `Root notes: 1` for cpp-fundamentals. If > 1, the contamination bug is active.

## write_file Truncation — Use execute_code Instead

The `write_file` tool silently truncates content at ~200-250 bytes on Windows when the content contains certain patterns or line endings. Multiple files were corrupted this way (README.md, LICENSE.md). **Prefer `execute_code` with Python `open().write()` for any content over 200 bytes.** This is the safest path — it avoids tool-internal truncation, handles encoding explicitly, and is testable via `len()`.

```python
# SAFE — use execute_code for file writes
with open(r'D:\\User\\Desktop\\DeepVault\\file.md', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Written: {len(content)} chars")
```

## DeepVault Guide Corruption Recovery

If `guide-content.txt` becomes JSON-escaped (`\\n` instead of actual newlines), decode it:

```python
import json
with open('guide-content.txt', 'r', encoding='utf-8') as f:
    raw = f.read()
decoded = json.loads('"' + raw + '"')  # Treat as JSON string
with open('guide-content.txt', 'w', encoding='utf-8') as f:
    f.write(decoded)
```

This recovers 6564 chars from the escaped version.

## Content Auditing — Source Files, NOT data.js

**When auditing vault content for accuracy, coverage, or depth, always read the source Obsidian `.md` files directly.** Never audit against the compiled `data.js`:

- `data.js` is a build artifact — content is JSON-escaped, truncated at render boundaries, and may have `...[truncated]` markers
Source `.md` files at `C:\\Users\\sofia\\Documents\\Obsidian\\Game Development\\` (local-only, moved from iCloud July 2025) are the canonical content
- The compiler pipeline (`convert.py`) can introduce subtle corruption (double-escaping, ANKI contamination, root-group bugs)
- A full-length note like `RAM & Virtual Memory.md` (769 lines) reads cleanly from source but appears fragmented in data.js

**Audit workflow:**
1. Read ALL source `.md` files in the target folder (e.g., `Computer Systems\*.md`) via `read_file`
2. Compare against authoritative sources (textbooks, engine source, standards)
3. Verify: register names, instruction semantics, IEEE 754 examples, ABI tables, latency numbers
4. Cross-check claims that cite specific engine files/line numbers when possible
5. Assess: prerequisites listed, Two-Way Explanations present, exercises included, cross-references correct
6. Output: per-note accuracy, coverage gaps, depth assessment, priority-ranked missing topics

**Key pitfall:** The first audit in any session should confirm file paths exist. The vault lives at `C:\Users\sofia\iCloudDrive\iCloud~md~obsidian\Game Development\` — never assume a different path without verifying.

## Content Chunking — Learning-Science-Backed Splitting

Long notes (500+ lines) defeat active recall — reading 1300 lines before a single quiz spreads attention too thin. Research-backed chunking rules:

**Science:**
- **Segmenting Principle** (Mayer, 2005-2014): Learner-paced segments improve retention and transfer (56-study meta-analysis)
- **Cognitive Load Theory** (Sweller, 1988): Working memory holds ~4±1 chunks. Long notes overload it.
- **Testing Effect** (Roediger & Karpicke, 2006): Retrieval practice is 2-3x more effective than rereading — but ONLY when quiz aligns with what was just studied
- **Spacing Effect** (Ebbinghaus, Cepeda): Chunked notes allow SPAING quizzes across sessions

**When to split:**
- >300 lines AND multiple independent concepts → split
- 200-300 lines, borderline → case-by-case (coherent concept = keep whole)
- <200 lines → keep whole
- Comparison notes, overviews, glossary → always keep whole

**Split structure:**
```
Folder/
├── X Overview.md           ← no quiz (big picture, reading order, prerequisites)
├── 01 — Subtopic A.md     ← quiz
├── 02 — Subtopic B.md     ← quiz
└── N — Quick Reference.md  ← no quiz (cheat sheet)
```

**Target per sub-note:** 3-7 tightly related concepts, 5-15 min reading, 5-10 quiz questions, 100-400 lines.

**Implementation order:** Vault first → verify structure → rebuild website via convert.py. Never restructure in data.js directly.

## Vault Sync — Python `\\n` Quirk

When syncing website content back to vault `.md` files, the character-walking extraction from `data.js` JSON strings produces content with LITERAL `\n` characters (not newlines). Fix with `chr(92)+'n'`, NOT `'\\\\n'`:

```python
# BROKEN — silently fails in terminal one-liners
c.replace('\\\\n', '\n')

# WORKING
c.replace(chr(92) + 'n', '\n')
```

The shell + Python string escaping cascade makes `'\\\\n'` ambiguous across contexts. `chr(92)` is unambiguous.
- **Code** (HTML/CSS/JS, convert.py): MIT — free to use, adapt, learn from
- **Content** (vault notes, quizzes, Learning Paths, Guide): All Rights Reserved

This split is documented in `CONTENT_LICENSE.md` and the README. Never suggest the content is open-source. The user's intellectual property is protected.

## Back-Link CSS — Lives in `layout.css`, NOT `components.css`

The `.back-link` style is in **`layout.css`**, not `components.css`. Patching `components.css` for back-link changes silently does nothing — the selector doesn't exist there. Always grep for the selector first to find the right file:
```bash
grep -rn "\.back-link" css/
```

## HTML Inside JSON-Encoded REFERENCE Values

When injecting HTML (e.g., LP grid cards) into `REFERENCE` values, the onclick attribute's quotes MUST survive `json.dumps()` encoding. **Use `\x27` (single quote hex escape) for attribute values inside onclick:**

```python
# WRONG — double quotes inside JSON string double quotes break
onclick='router.navigate("#/reference/...")'  # json.dumps wraps in ", clash

# WRONG — backslash-escaped single quotes get double-escaped by json.dumps
onclick="router.navigate(\'#/reference/...\')"  # becomes \\' in JSON → broken JS

# RIGHT — \x27 survives json.dumps untouched
SQ = "\x27"
onclick = f"router.navigate({SQ}#/reference/...{SQ})"
```

Then `json.dumps(index_html)` produces clean `onclick="router.navigate('#/reference/...')"` in the browser.

## Text Input Styling — Quiz

The quiz text input uses `.text-input` class directly on the `<input>` element (not wrapped in `.text-input-wrap`). CSS **must** target both:
```css
.text-input-wrap input, .text-input { ... }
```
Without this, quiz text inputs render as plain unstyled browser defaults.

## Sequential Navigation

Every Learn page shows "← Previous | 3/14 | Next →" at the bottom. Computed from `NOTES[folderId]`. Implementation in `learn.js` render function — `insertAdjacentHTML` after `.learn-body`. CSS: `.seq-nav { display: flex; justify-content: space-between; border-top: 1px solid var(--border); }`. Mobile: wraps, buttons truncated with ellipsis.

## Learning Path Architecture — Individual Pages Per Category

Each category has its OWN Learning Path page as a separate REFERENCE key:
- `'Learning Path — Computer Systems'`
- `'Learning Path — C++ Fundamentals'`
- `'Learning Path — Game Math'`
- `'Learning Path — Unreal Engine Core'`
- `'Learning Path — Unreal Engine Networking'`
- `'Learning Path — Algorithms & Complexity'`

The main `'Learning Path'` key is an INDEX page (`[[wiki links]]` to all six). Individual LPs are built from vault `.md` files.

**Topic hub footer link** (at bottom of page, not header):
```js
html += '<div class="topic-footer">' +
  '<a href="javascript:void(0)" onclick="router.navigate(\'#/reference/Learning%20Path%20—%20' + encodeURIComponent(folder.name) + '\')">🧭 ' + folder.name + ' Learning Path →</a>' +
'</div>';
```

**Vault folder name mapping is CRITICAL.** Display names differ from vault folder names:
- Display: `Unreal Engine Core` → Vault: `UE Core`
- Display: `Unreal Engine Networking` → Vault: `UE Networking`  
- Display: `Algorithms & Complexity` → Vault: `Big O Notation`

Using display names for `os.path.join()` silently skips files. See `references/learning-path-grid.md` for the styled grid CSS and injection procedure.

## Documentation Updates After Major Changes

After any vault restructuring (new notes, new subfolders, new quizzes), update these docs:

1. **README.md** — note counts, quiz counts, question counts (verify with actual data.js grep)
2. **CONTRIBUTING.md** — commit count (`git rev-list --count HEAD`)
3. **guide-content.txt** — Computer Systems note count if it changed, Learning Path references
4. **SKILL.md** — any new pitfalls or patterns discovered

Always verify counts against source: `node -c js/data.js` + grep for quiz/note counts. Never guess numbers.

The regex-based root group fix at the end of convert.py:
```python
output = re2.sub(r"'(?:computer-systems|cpp-fundamentals|game-math)':\s*\{[^}]+\}", fix_root, output, flags=re2.DOTALL)
```

**Every folder with subfolders MUST appear in this alternation.** When `Computer Systems` gained `Hardware/`, `System Software/`, and `Concurrency/` subfolders, it wasn't in the regex — causing all 20 notes in root alongside correct subfolder groups. Adding `computer-systems` fixed it.
```python
output = re2.sub(r"'(?:computer-systems|cpp-fundamentals|game-math)':\s*\{[^}]+\}", fix_root, output)
```

**Every folder that has subfolders MUST appear in this alternation.** When `Computer Systems` gained `Hardware/`, `System Software/`, and `Concurrency/` subfolders, it wasn't in the regex — causing all 20 notes to appear in the root `''` group. Adding `computer-systems` fixed it. Check after any folder restructuring.

## REFERENCE Rebuild — Preserve ALL Existing Entries

**When rebuilding REFERENCE to change one value, preserve EVERY other key.** The extract-then-rebuild pattern with json.dumps can silently lose entries:

1. Extract ALL existing keys + values from REFERENCE into a dict
2. Modify the target entry
3. Rebuild ALL entries with json.dumps for new ones, raw \"...\" for preserved ones

**Never replace just one key-value pair** — the comma/JSON structure corrupts. Always rebuild the entire `const REFERENCE = { ... };` block. **After rebuild, verify:** `grep -c "'Learning Path —" data.js` must return 6 (the individual LP pages).

When rebuilding the `REFERENCE` section, **never extract values via character-walk through the JSON string then re-encode with `json.dumps()`.** The character walk produces already-JSON-escaped text — `json.dumps()` escapes it again → `\\n` → `\\\\n`. Use `json.loads()` to decode first, THEN encode fresh:

```python
# WRONG — produces double-escaped content
i = vs
while i < len(data):
    if data[i] == '\\': i += 2; continue
    if data[i] == '"': val = data[vs:i]; break
    i += 1
new_ref = f"'Key': {json.dumps(val)},"  # val is already JSON-escaped → corrupted

# RIGHT — decode first
val = json.loads('"' + data[vs:ve] + '"')
new_ref = f"'Key': {json.dumps(val)},"  # clean
```

## LP Card Onclick — Dashboard Pattern (NEVER `&quot;`)

The `&quot;` HTML entity breaks onclick — browsers see literal `&quot;` text, not a quote. **Copy the dashboard pattern EXACTLY** (`dashboard.js:8`): double-quoted HTML attribute, single-quoted JS string.

```python
# WORKING — dashboard pattern
SQ = "'"  # single quote literal
html = f'<a href="javascript:void(0)" onclick="router.navigate({SQ}#/reference/URL{SQ})" class="lp-card">...'
# After json.dumps → data.js stores: "onclick=\"router.navigate('#/reference/URL')\""
# Browser sees:           onclick="router.navigate('#/reference/URL')"          ← VALID
```

**PITFALL — 6 consecutive failed patches used `&quot;` or `'...'` nesting.** The `'` inside `'` terminates the attribute early. The `&quot;` is literal text in JavaScript. Only the dashboard pattern works: `"` outer, `'` inner.

## Markdown Table Empty-Line Bug

**Empty lines between table rows break markdown tables into separate one-row tables.** Each row becomes its own single-header table with no data rows — Obsidian and other renderers show this as broken formatting:

```markdown
<!-- BROKEN — 13 separate one-row tables -->
| # | Note | Quiz |
|---|---|---|

| 01 | Item 1 | ✓ |

| 02 | Item 2 | ✓ |
```

The empty lines after the separator row AND between data rows fracture the table. Obsidian renders: separator + empty rows as no-op, then each subsequent `|...|` row as a new table header (no separator → fails). **Fix:** remove ALL empty lines between table rows — tables must be contiguous:

```markdown
<!-- CORRECT — one continuous table -->
| # | Note | Quiz |
|---|---|---|
| 01 | Item 1 | ✓ |
| 02 | Item 2 | ✓ |
```

This bug appears when programmatically building multi-row tables where a loop or `\n\n`.join produces double newlines between rows.

## YAML Frontmatter — Closing `---` Fusion

When building YAML frontmatter programmatically, the closing `---` MUST have a newline before it. A missing `\n` fuses the last tag with `---`:

```yaml
# BROKEN — Obsidian doesn't recognize frontmatter
---
tags:
  - computer-systems
  - concurrency---

# CORRECT
---
tags:
  - computer-systems
  - concurrency
---
```

**Fix in Python:**
```python
# WRONG
fm = f"---\ntags:\n{tags_str}---\n\n"

# RIGHT — ensure newline before closing ---
fm = f"---\ntags:\n{tags_str}\n---\n\n"
```

The fused `---` makes Obsidian treat the entire block as raw text instead of YAML metadata.

**Never fix content in `data.js` without syncing back to the Obsidian vault `.md` files.** The vault at `C:\Users\sofia\iCloudDrive\iCloud~md~obsidian\Game Development\` is the canonical source. Website fixes (typography, clarifications, new sections) applied only to `data.js` are lost on the next `convert.py` rebuild.

In this session: EVERY note in data.js was larger than its vault counterpart (gaps of 200–6,500 chars). Years of accumulated fixes never made it back.

**Rule:** After any content change to data.js, compare with `tools/compare_vault.py`. Sync richer versions to vault `.md` files BEFORE structuring or chunking work.

## Mobile Scroll — Learn Page Overflow

`.learn-note` MUST have `overflow-x: hidden; max-width: 100%; word-wrap: break-word`. Wide tables and `<pre>` blocks push content beyond the viewport on mobile — users scroll into empty space on the right. Add `max-width: 100%; overflow-x: auto; display: block` on `.learn-body pre, .learn-body table` for internal scroll rather than page-level overflow.

## Volatile Counts — NEVER in Docs

Remove ALL specific numbers from README, CONTRIBUTING, and SKILL.md. Use generic language:

- ❌ "74 notes and 73 quizzes" → ✅ "a growing collection of notes and quizzes"
- ❌ "73 quizzes with 280+ questions" → ✅ "hundreds of quiz questions"
- ❌ "77 commits" → ✅ "dozens of commits"
- ❌ "20 notes from bits" → ✅ "from bits and assembly through"
- ❌ "22 notes across Core Language" → ✅ "across Core Language"

These numbers change every session — they become stale immediately. The user explicitly requested this after every doc update kept going stale.

## Vault Folder Name Mapping

Display names differ from vault folder names. Use vault names for `os.path.join()`, display names for REFERENCE keys:

| Display | Vault Folder |
|---|---|
| Unreal Engine Core | UE Core |
| Unreal Engine Networking | UE Networking |
| Algorithms & Complexity | Big O Notation |

Using display names for file paths silently skips files (no error — `os.path.exists()` returns False).

```python
# WORKING — dashboard pattern (json.dumps handles the \" escaping)
SQ = "'"  # single quote literal
onclick = f'router.navigate({SQ}#/reference/URL{SQ})'
# In data.js SOURCE (Python): f'<a href="javascript:void(0)" onclick="{onclick}" class="lp-card">'
# After json.dumps → data.js: "onclick=\\"router.navigate('#/reference/URL')\\""
# In browser HTML: onclick="router.navigate('#/reference/URL')"
```

**PITFALL — `&quot;` failed 6 consecutive patches.** Each patch replaced the entire LP index line, and `&quot;` in JavaScript expressions is treated as literal text, not a quote character. The browser sees `router.navigate(&quot;` as a syntax error. The dashboard cards (`dashboard.js:8`) use single-quoted JS inside double-quoted HTML — copy that EXACTLY.

## Back-Link CSS Location — `layout.css`

The `.back-link` selector is in `layout.css`, not `components.css`. Patching the wrong file silently fails. Always grep first:
```bash
grep -rn "\\.back-link" css/
```

## Learning Path Vault Folder Mapping

Display names differ from vault folder names — use vault names for file paths, display names for REFERENCE keys:

| Display (used in REFERENCE key) | Vault folder (used in os.path.join) |
|---|---|
| Unreal Engine Core | UE Core |
| Unreal Engine Networking | UE Networking |
| Algorithms & Complexity | Big O Notation |

**On WSL backend, the terminal tool may route through PowerShell instead of bash.** The `read_terminal` tool shows `PS C:\Users\...>` and commands fail silently. For DeepVault work, stay on `local` backend. `hermes config set terminal.backend local` then restart. The PTY limitation on local (no back-and-forth agents) is acceptable — use `hermes chat -q` for one-shot tasks and `delegate_task` for reasoning work.

## PTY Back-and-Forth — Windows Limitation

PTY mode (`terminal(pty=true, background=true, command="hermes")`) does NOT work on Windows `local` backend. ANSI escape codes from prompt_toolkit collide with `\r`/`\n`, producing unreadable output. `winpty hermes` also fails (requires real console). For back-and-forth agents, use WSL backend with tmux. For local, use one-shot `hermes chat -q`.

