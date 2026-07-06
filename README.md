# DeepVault

> An interactive quiz & learning platform embedded in a single `index.html`. Zero dependencies. Zero server. Double-click to launch.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Live Site](https://img.shields.io/badge/live-site-blue.svg)](https://maykeu.github.io/DeepVault/)

---

## What Is This?

DeepVault turns an Obsidian vault into an interactive learning platform — quizzes, progress tracking, wiki links, learning paths. **Built for computing education** — programming languages, computer systems, game engines, algorithms, networking, cybersecurity, and everything in between. The current pre-loaded content covers C++, Unreal Engine, game math, and computer systems, but the platform works for any computing domain (Rust, Python, Unity, Godot, Vulkan, or your own stack).

Content assumes basic programming familiarity. Start with the [Computer Systems Learning Path](https://maykeu.github.io/DeepVault/#/reference/Learning%20Path%20%E2%80%94%20Computer%20Systems) if you're new to computing.

Everything stays on your device — no accounts, no servers, no tracking.

## Quick Start

1. **Clone** this repository — `git clone https://github.com/MaykEu/DeepVault.git`
2. **Double-click** `index.html` — you're studying
3. Or visit the [live site](https://maykeu.github.io/DeepVault/) — no download needed

## What It Does

| Feature | Description |
|---|---|
| 📚 **Learn** | 181 notes across 6 categories — full Obsidian vault notes with syntax highlighting, TOC, wiki links, callouts |
| 🎯 **Quiz** | 1,062 questions across 169 notes — MC and text input with instant feedback |
| 🔨 **Projects** | 6 capstone projects — build a CPU, allocator, smart pointers, vector, math library, and physics engine |
| 📊 **Progress** | Track quiz scores per note and folder. Sync across devices with a free GitHub token |
| 🧭 **Guides** | Learning Paths for every category. Sequential prev/next navigation |
| 🎨 **Themes** | Midnight, Dark, Light, and AMOLED — persistent per-device |
| 🔍 **Search** | Search all notes by title, heading, or content |
| 📱 **Mobile** | Responsive design works on phones |
| 📂 **Subfolders** | Collapsible groups mirror your Obsidian vault structure |
| ⭐ **Bookmarks** | Bookmark notes for quick access under a dedicated tab |

## Architecture

```
data/               ← 5 independent JSON source files
├── notes.json      ← Note content (vault → convert.py)
├── quizzes.json    ← Quiz questions (safe to edit)
├── folders.json    ← Folder structure
├── projects.json   ← Project notes (vault → convert.py)
└── reference.json  ← Glossary, Guide, Learning Paths

build.py            ← Combines sources → js/data.js (validates first)
quiz-cli.py         ← Safe quiz management (add, verify, backup)
test.js             ← Smoke tests (syntax, CSS, quiz format)
convert.py          ← Vault → data/*.json converter
index.html          ← Double-click to launch
favicon.svg         ← Site icon
css/                ← base.css + layout.css + components.css
js/                 ← 13 vanilla JS files + generated data.js
Obsidian/           ← Bundled Obsidian vault (source of truth for all content)
SKILL.md            ← Full AI contributor reference
```

See [SKILL.md](SKILL.md) for the complete architecture, data flow, rendering rules, and pitfall documentation.

## Adding Your Own Content

You can use DeepVault for ANY subject. The platform doesn't care what you're teaching.

### Add a Brand New Category

1. Create a folder in your Obsidian vault (e.g., `Medicine/`) and add `.md` notes
2. Add one entry to `FOLDER_MAP` in `convert.py`:
   ```python
   ('medicine', 'Medicine', 'Medicine', '🩺', '#ff6b6b'),
   ```
   Format: `(id, display_name, vault_folder, icon, color)`
3. Run `python convert.py` — your category appears on the dashboard
4. Add quiz questions for your notes using `quiz-cli.py`:
   ```bash
   python quiz-cli.py add my_quizzes.json
   ```

### Quiz Format

```javascript
QUIZ_DATA['My Note'] = {
  questions: [
    {
      question: "What is X?",
      options: ["Option A", "Option B", "Option C"],
      correctAnswer: "Option B",
      explanation: "Because..."
    },
    {
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

## Content Quality Standards

DeepVault notes are **lessons, not summaries**. Every note follows these principles:

- **Hardware-first / Concrete-first:** Start from physical reality — what's actually happening — before abstractions
- **Two-Way Explanation:** Every note has both a simple analogy and a technical deep dive
- **No shallow summaries:** Deep coverage of concepts, not bullet-point overviews. 700-1100 line notes are normal
- **Prerequisites callout:** Every note states what you need to know before reading it
- **See Also with wiki-links:** Every note links to related notes for cross-referencing
- **Exercises:** Conceptual, code/application, analysis, and real-world problems per note

See [SKILL.md](SKILL.md) for the full pedagogical standards.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add quizzes, notes, or features. AI contributors: read [SKILL.md](SKILL.md) first — it has every pitfall from dozens of commits of development.

## License

- **Code** (HTML/CSS/JS/`convert.py`/`quiz-cli.py`): MIT — use, modify, learn from freely
- **Content** (notes, quizzes, guides): All Rights Reserved — may not be republished (see [CONTENT_LICENSE.md](CONTENT_LICENSE.md))

---

## Made with AI

DeepVault was built entirely with AI assistance. Every note, quiz, theme, and feature — from the markdown renderer to the collapsible folder groups — was designed, coded, and debugged through AI collaboration. The [SKILL.md](SKILL.md) file documents every architectural decision and pitfall from dozens of commits of development.

**Content is actively updated.** New notes, quizzes, and categories are added regularly. Star the repo to stay updated.

If you're contributing with AI, load SKILL.md first — it prevents the exact bugs we already solved.
