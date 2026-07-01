# DeepVault

> An interactive quiz & learning platform embedded in a single `index.html`. Zero dependencies. Zero server. Double-click to launch.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Live Demo](https://img.shields.io/badge/demo-live-blue.svg)](https://maykeu.github.io/DeepVault/)

---

## Quick Start

1. **Fork** this repository
2. **Clone** your fork
3. **Double-click** `index.html` — you're in
4. Or visit the [live demo](https://maykeu.github.io/DeepVault/)

## What It Does

| Feature | Description |
|---|---|
| 📚 **Learn** | Full Obsidian vault notes rendered to HTML with syntax highlighting, table of contents, wiki links, and callouts |
| 🎯 **Quiz** | 67 quizzes with 300+ questions — multiple choice and text input with instant feedback |
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

1. **Create an Obsidian vault** with folders matching the categories
2. **Add `.md` notes** to each folder
3. **Run `python convert.py`** — it reads your vault, strips YAML frontmatter, and rebuilds `data.js`
4. **Create quizzes** in `QUIZ_DATA` following the format in SKILL.md
5. **Open `index.html`** — your notes and quizzes are live

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

## Tech

- **Pure HTML/CSS/JS** — no frameworks, no npm, no build step
- **localStorage** — all data stays on your device
- **GitHub Pages** — free hosting, instant deploy
- **Code**: MIT — use the HTML/CSS/JS freely
- **Content**: All Rights Reserved — notes and quizzes may not be republished (see [CONTENT_LICENSE.md](CONTENT_LICENSE.md))

---

Built for [Mayk's vault](https://github.com/MaykEu). Source-verified against UE 5.8 engine code.
