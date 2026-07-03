# DeepVault — Project Reference

An interactive quiz & learning platform embedded in a single `index.html`. Zero dependencies, zero server, runs by double-click.

## Quick Start

```
D:\User\Desktop\DeepVault\
├── index.html              # Double-click to launch
├── convert.py              # Rebuild data.js from Obsidian vault
├── css/
│   ├── base.css            # CSS variables, reset, 4 themes (midnight/dark/light/amoled)
│   ├── layout.css          # Header, dashboard grid, page layout
│   └── components.css      # Cards, buttons, inputs, learn, TOC, syntax highlighting
├── js/
│   ├── app.js              # Bootstrap: Theme.init() → Router.init()
│   ├── router.js           # Hash-based routing (#/folder/id/note/learn | #/reference/Name)
│   ├── data.js             # ALL data: FOLDERS, FOLDER_GROUPS, NOTES, QUIZ_NOTES, QUIZ_DATA, NOTES_CONTENT, REFERENCE
│   ├── storage.js          # localStorage: quiz attempts, scores, recent notes, import/export
│   ├── dashboard.js        # Folder grid, progress bars, recently viewed, import/export
│   ├── topic-hub.js        # Study/Guides tabs, collapsible folder groups, status badges
│   ├── quiz-engine.js      # Fisher-Yates shuffle, MC + text-input questions, scoring
│   ├── learn.js            # Markdown renderer, TOC, sequential nav, read toggle, scroll memory
│   ├── theme.js            # 4-theme dropdown (midnight/dark/light/amoled)
│   ├── search.js           # Lazy-built index, title/heading/content search
│   └── guide-content.js    # Guide page content
├── SKILL.md                # This file
└── README.md               # Project overview
```

## Architecture

### Data Flow

```
Obsidian Vault (.md files)
        │
        ▼
    convert.py  ──────►  data.js  (FOLDERS, NOTES, QUIZ_NOTES, QUIZ_DATA, NOTES_CONTENT, REFERENCE)
                                │
                                ▼
                          router.js  ──────►  dashboard.js
                                          │    topic-hub.js
                                          │    quiz-engine.js
                                          │    learn.js
                                          │
                                          ▼
                                     localStorage  (quiz scores, read status, theme, scroll)
```

### Routing

| Hash | View | File |
|---|---|---|
| `#/` | Dashboard | `dashboard.js` |
| `#/folder/:id` | Topic Hub (Study/Guides) | `topic-hub.js` |
| `#/folder/:id/note/:name/learn` | Learn View | `learn.js` |
| `#/folder/:id/note/:name/quiz` | Quiz | `quiz-engine.js` |
| `#/reference/:name` | Reference Page (Glossary, Guide, Learning Path) | `learn.js` (renderRef) |

### Data Structures (data.js)

```javascript
FOLDERS = [
  { id: 'cpp-fundamentals', name: 'C++ Fundamentals', icon: '⚙️', color: '#f0883e' },
  ...
]

FOLDER_GROUPS = {
  'cpp-fundamentals': {
    '': ['C++ vs UE C++ — Key Differences'],           // Root notes (empty string)
    'Core Language': ['Enums & enum class', ...],       // Subfolder notes
    'Memory & Ownership': ['Stack vs Heap', ...],
  },
  ...
}

NOTES = {
  'cpp-fundamentals': ['C++ vs UE C++ — Key Differences', 'Enums & enum class', ...],
  ...
}

QUIZ_NOTES = {
  'cpp-fundamentals': ['Stack vs Heap', 'Object Memory Layout', ...],
  ...
}

QUIZ_DATA = {}
QUIZ_DATA['Stack vs Heap'] = { questions: [...] }
QUIZ_DATA['Object Memory Layout'] = { questions: [...] }

NOTES_CONTENT = {
  'Stack vs Heap': { title: "Stack vs Heap", folder: "cpp-fundamentals", content: "..." },
  ...
}

REFERENCE = {
  'Glossary': "..." ,
  'DeepVault Guide': "...",
  'Learning Path': "...",
}
```

## Rebuilding (convert.py)

Run `python convert.py` from the project root. It:

1. Walks ALL vault folders recursively, skipping `ANKI/` directories
2. Strips YAML frontmatter from each `.md`
3. Preserves existing `QUIZ_DATA` (only keeps quizzes for notes that still exist)
4. Updates `FOLDER_GROUPS`, `NOTES`, `QUIZ_NOTES`, `NOTES_CONTENT`, and `REFERENCE`
5. Validates JavaScript syntax with `node -c`

**After rebuild, always verify:**
- `node -c js/data.js` — no syntax errors
- `grep -c "QUIZ_DATA\['" js/data.js` — correct quiz count
- Spot-check 3+ notes for ANKI contamination (`# ANKI — ` in title is a red flag)
- Verify `FOLDER_GROUPS` root group only contains root-level notes (not all notes)

## Critical Rules (Do NOT Break)

### 1. Plan-First Protocol
Never present a plan and execute in the same turn. Present the plan, WAIT for approval. "Apply?" is a question, not a signal to proceed.

### 2. CSS Brace Balance
After ANY CSS edit, verify braces are balanced:
```bash
python -c "import re; c=open('css/components.css').read(); c2=re.sub(r'/\*.*?\*/','',c,flags=re.DOTALL); print(c2.count('{')==c2.count('}'))"
```
Must return `True`. The `replace_all` patch flag is especially dangerous on CSS — it nests selectors.

### 3. Never `replace_all` on CSS
It nests selectors inside each other, producing `.folder-card { .folder-card { ... } }`. Always provide enough context for a unique match, or rewrite the entire file.

### 4. `&` Escaping Order
Wiki links MUST be processed BEFORE `&` → `&amp;` conversion. Wrong order turns `[[RAM & Virtual Memory]]` into `[[RAM &amp; Virtual Memory]]` which won't match `NOTES_CONTENT`.

### 5. Header Links
Must use `href="javascript:void(0)"`, NEVER `href="#"`. `href="#"` triggers dashboard navigation before the onclick fires.

### 6. Code Block Parser
Line-by-line state machine, NOT regex. Handle: back-to-back fences, blockquoted code blocks, indented fences (up to 3 spaces).

### 7. Syntax Highlighting
Character-by-character tokenizer. NEVER chain `.replace()` calls on already-highlighted HTML.

### 8. Sub-Agent Discipline
- Sub-agents fabricate content instead of reading existing files
- Always verify their output
- Max 2 sub-agents
- Never trust sub-agents on UE engine claims
- When in doubt, do it yourself

### 9. ANKI Contamination
`convert.py` must skip `ANKI/` directories. Verify after every rebuild by checking note titles for `# ANKI — ` prefix.

### 10. Unicode in JavaScript
- `\u{1F5A5}` for code points above U+FFFF
- `\uFE0F` for variation selectors
- Never `\U0001f5a5` (Python-only syntax)

### 11. Learning Path Cards — Nested Quotes
The LP index in `REFERENCE['Learning Path']` is raw HTML stored inside a JSON-encoded JS string. Getting the quote nesting right is fragile:

```html
<!-- CORRECT: double-quoted HTML attribute, single-quoted JS string inside -->
<a onclick="router.navigate('#/reference/...')" class="lp-card">

<!-- WRONG: single-at-top, single-at-bottom — # terminates attribute -->
<a onclick='router.navigate('#/reference/...')' class="lp-card">

<!-- WRONG: &quot; is treated as literal text inside JS, not decoded -->
<a onclick=&quot;router.navigate(&amp;quot;#/reference/...&amp;quot;)&quot; class="lp-card">
```

When building from Python, use `json.dumps()` to encode, then `"`. In the raw HTML inside
the JSON string, the pattern is: `onclick=\"router.navigate('#/reference/...')\"`.
This is the exact same pattern used by dashboard folder cards in `dashboard.js`.

## UI Conventions

### Theme System
Four themes via `[data-theme]` attribute on `<html>`: Midnight (🌙 navy), Dark (🌑 gray), Light (☀️ white), AMOLED (🌚 pure black). Toggled by icon button → dropdown in header.

### Tab Split (Study / Guides)
- **Study**: Notes WITH quiz data (`QUIZ_NOTES[folder.id]`)
- **Guides**: Notes WITHOUT quiz data (overviews, comparisons)

### Status Badges
Quiz-based only (reading Learn does NOT count):
- **NOT STARTED** (grey) — no quiz attempts
- **IN PROGRESS** (amber) — best score < 80%
- **COMPLETED** (green) — best score ≥ 80%

### Mark-as-Read
Toggle in Learn page header. ✅ indicator on Learn button in topic hub. Stored in `localStorage`. Cosmetic only — does NOT affect progress.

### Sequential Navigation
"← Previous | 3/14 | Next →" at bottom of every Learn page.

### Collapsible Folder Groups
Mirrors Obsidian subfolder structure. Collapsed by default. Root notes shown above groups. Group body uses `border-left` tree-line.

## Quiz Format

```javascript
{
  questions: [
    { type: "multiple_choice", question: "...", options: ["A","B","C"], correctIndex: 1, explanation: "..." },
    { type: "text_input", question: "...", correctAnswer: "...", acceptableAnswers: ["..."], explanation: "..." },
  ]
}
```

- 2-4 options for MC — don't force exactly 4
- Every question MUST have an explanation
- Extract answers directly from note content — never fabricate
- UE quizzes require source verification against engine code

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `Ctrl+K` | Focus search |
| `←` / `→` | Previous / Next note (in Learn view) |
| `Enter` | Submit quiz answer |
| `Escape` | Close search results / theme dropdown |
