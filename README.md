# DeepVault

> An interactive quiz & learning platform embedded in a single `index.html`. Zero dependencies. Zero server. Double-click to launch.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Live Site](https://img.shields.io/badge/live-site-blue.svg)](https://maykeu.github.io/DeepVault/)

---

## What Is This?

DeepVault is an interactive learning platform for mastering computers, programming, and software engineering — from silicon transistors to C++ templates to real-time networking. It comes pre-loaded with 68 notes and 67 quizzes covering:

- **Computer Systems** — 14 notes from bits through CPU architecture to GPU
- **C++ Fundamentals** — 22 notes across Core Language, Memory, OOP, and Types
- **Game Math** — 11 notes: trigonometry, matrices, quaternions, collision, UE math
- **Unreal Engine Core** — 11 notes: UHT, reflection, containers, casting, inheritance
- **UE Networking** — 7 notes: RPCs, replication, Iris, GAS prediction
- **Algorithms & Complexity** — 3 notes: Big O, amortized analysis, applied examples

Everything stays on your device — no accounts, no servers, no tracking.

## Quick Start

1. **Clone** this repository — `git clone https://github.com/MaykEu/DeepVault.git`
2. **Double-click** `index.html` — you're studying
3. Or visit the [live site](https://maykeu.github.io/DeepVault/) — no download needed

## What It Does

| Feature | Description |
|---|---|
| 📚 **Learn** | Full Obsidian vault notes rendered to HTML with syntax highlighting, table of contents, wiki links, and callouts |
| 🎯 **Quiz** | 67 quizzes with 230+ questions — multiple choice and text input with instant feedback |
| 📊 **Progress** | Track quiz scores per note and folder. Export/import to move between devices |
| 🧭 **Guides** | Learning Paths for every category. Sequential prev/next navigation |
| 🎨 **Themes** | Midnight, Dark, Light, and AMOLED — persistent per-device |
| 🔍 **Search** | Search all 68 notes by title, heading, or content |
| 📱 **Mobile** | Responsive design works on phones |
| 📂 **Subfolders** | Collapsible groups mirror your Obsidian vault structure |

## Architecture

```
index.html   →  Double-click to launch
convert.py   →  Rebuild data.js from Obsidian vault
guide-content.txt  →  Static guide page content
SKILL.md     →  Full AI contributor reference
css/         →  base.css + layout.css + components.css (4 themes)
js/          →  13 vanilla JS files, zero frameworks
```

See [SKILL.md](SKILL.md) for the complete architecture, data flow, rendering rules, and pitfall documentation.

## Adding Your Own Content

You can extend DeepVault with your own notes, categories, and quizzes. The pre-loaded content stays — you're adding to it, not replacing it.

### Add Notes to Existing Categories

1. Write `.md` files in your Obsidian vault folder (e.g., `C++ Fundamentals/My Note.md`)
2. Run `python convert.py` — it detects new files and rebuilds `data.js`
3. Add quiz questions for your notes in `js/data.js` (see format below)
4. Open `index.html` — your notes appear alongside the existing ones

### Add a Brand New Category

1. Create a folder in your Obsidian vault (e.g., `Shaders/`) and add `.md` notes
2. Add one entry to `FOLDER_MAP` in `convert.py`:
   ```python
   ('shaders', 'Shader Programming', 'Shaders', '🎨', '#ff6b6b'),
   ```
   Format: `(id, display_name, vault_folder, icon, color)`
3. Run `python convert.py` — your category appears on the dashboard
4. Add quiz questions for your notes in `QUIZ_DATA` inside `js/data.js`
5. Run `python convert.py` again — it preserves your quizzes during rebuild

### Quiz Format

```javascript
QUIZ_DATA['My Note'] = {
  questions: [
    {
      type: "multiple_choice",
      question: "What is X?",
      options: ["Option A", "Option B", "Option C"],
      correctIndex: 1,
      explanation: "Because..."
    },
    {
      type: "text_input",
      question: "Explain Y",
      correctAnswer: "The correct answer",
      acceptableAnswers: ["alt phrasing 1", "alt phrasing 2"],
      explanation: "Because..."
    }
  ]
};
```

- 2–4 options for multiple choice — don't force exactly 4
- Every question must have an explanation
- See [SKILL.md](SKILL.md) for the complete format reference

## Folder Structure (Vault)

```
Game Development/          ←  Your Obsidian vault root
├── Computer Systems/      ←  14 notes (complete)
├── C++ Fundamentals/
│   ├── Core Language/     ←  Subfolders → collapsible groups
│   ├── Memory & Ownership/
│   ├── OOP & Polymorphism/
│   └── Types & Data/
├── Game Math/
│   ├── Advanced/
│   └── UE Math/
├── UE Core/
├── UE Networking/
└── Big O Notation/
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add quizzes, notes, or features. AI contributors: read [SKILL.md](SKILL.md) first — it has 10 critical rules and every pitfall we encountered.

## License

- **Code** (HTML/CSS/JS/`convert.py`): MIT — use, modify, learn from freely
- **Content** (notes, quizzes, guides): All Rights Reserved — may not be republished (see [CONTENT_LICENSE.md](CONTENT_LICENSE.md))

---

## Development

DeepVault was built with AI assistance (Hermes Agent + Nous Research). The [SKILL.md](SKILL.md) file documents every architectural decision and pitfall from 40+ commits of development. If you're using AI to contribute, load SKILL.md first — it prevents the exact bugs we already solved.

Built for [Mayk's vault](https://github.com/MaykEu). Source-verified against UE 5.8 engine code.
