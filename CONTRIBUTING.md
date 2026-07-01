# Contributing to DeepVault

Thanks for wanting to help! Here's how.

## Ways to Contribute

### 1. Add Quiz Questions
Find a note that needs quizzes, read the note content, and add questions to `QUIZ_DATA` in `js/data.js`.

**Format:**
```javascript
QUIZ_DATA['Note Name'] = {
  questions: [
    {
      type: "multiple_choice",
      question: "What is X?",
      options: ["A", "B", "C"],
      correctIndex: 1,
      explanation: "Because..."
    },
    {
      type: "text_input",
      question: "Explain Y",
      correctAnswer: "The correct answer",
      acceptableAnswers: ["alternative 1", "alternative 2"],
      explanation: "Because..."
    }
  ]
};
```

**Rules:**
- 2-4 options for multiple choice — don't force exactly 4
- Every question MUST have an explanation
- Extract answers directly from the note content — never fabricate
- Add the note name to `QUIZ_NOTES[categoryId]` array

### 2. Add New Notes
Write `.md` files in your Obsidian vault, then run `python convert.py`.

**Note format:**
```markdown
# Note Title

## Section

Content here...

### Subsection

More content with `inline code`, **bold**, *italic*.

> [!info] Callout
> Callout content here.

Code blocks:
\`\`\`cpp
void example() { }
\`\`\`

Wiki links: [[Other Note]]
```

### 3. Add a New Category
1. Create a new folder in your Obsidian vault
2. Add notes to it
3. Add an entry to `FOLDER_MAP` in `convert.py`
4. Add the folder to `FOLDERS` in `js/data.js`
5. Run `python convert.py`
6. Add quizzes for the new notes

### 4. Fix Bugs or Add Features
- Read [SKILL.md](SKILL.md) first — it has every pitfall we encountered
- JavaScript: ES5-compatible (no arrow functions, no template literals, no `let`/`const` — use `var`)
- CSS: Use CSS variables (`var(--bg-primary)`, etc.) — all 4 themes must work
- After any CSS edit, verify braces are balanced
- After any JS edit, run `node -c js/data.js`
- Commit locally before risky changes (`git add -A && git commit -m "snapshot"`)

### 5. Improve Documentation
Fix typos in notes, improve explanations, add examples. These live in the Obsidian vault and are rebuilt into `data.js` by `convert.py`.

## AI Contributors

Read [SKILL.md](SKILL.md) before touching anything. It documents:
- 10 critical rules (breaking any of them causes bugs)
- Markdown renderer architecture (line-by-line state machine)
- Quiz format and validation
- convert.py rebuild procedure
- Every pitfall from 35+ commits of development

## Pull Request Process

1. Create a branch for your change
2. Make your changes and commit
3. Run `python convert.py` if you changed any vault files
4. Verify: `node -c js/data.js` (must pass)
5. Open a PR with a clear description
6. I'll review and merge

## Questions?

Open an issue or start a discussion. Happy to help!
