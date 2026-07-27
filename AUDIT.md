# DeepVault — Codebase Audit & Improvement Plan
## July 27, 2026

This document identifies every issue, risk, and improvement opportunity across the
DeepVault web application. It is written for an AI contributor to act on.

---

## PART A: Existing Site (Pre-Exercise System)

### A1. `js/learn.js` — CRITICAL

**Status: Single minified line (~19KB). Zero comments. Unmaintainable.**

This file handles note rendering, markdown-to-HTML conversion, wiki-links, scroll
tracking, and the Learning Path grid. It is the heaviest file in the app and the
most dangerous to touch.

**Problems:**

1. Minified into one line — no human can read or modify it.
2. Four failed patch attempts documented in the deepvault skill due to escaping
   issues (`\\"` doubling, `\\u{1F5A5}` corruption).
3. `node --check` gives false positives (tries to parse as ES module).
4. `file://` caches aggressively — hard refresh (Ctrl+Shift+R) needed after every
   change, making debugging extremely slow.
5. No separation of concerns — markdown parsing, LP grid, scroll tracking, and
   wiki-link resolution are all in one function chain.

**Recommendation: Full rewrite as multiple modules.**

| Module | Responsibility |
|--------|---------------|
| `js/md2html.js` | Markdown → HTML (headings, code, tables, wiki-links, footnotes) |
| `js/learn-view.js` | Note rendering UI (TOC, content, navigation) |
| `js/scroll-track.js` | Per-note scroll position persistence |
| `js/wiki-link.js` | Wiki-link resolution (already partially in learn.js) |

The LP grid should move to `js/icons.js` or its own file since it's a standalone
component reused by multiple views.

**Priority: P1 — Blocks all other improvements.**

---

### A2. `js/topic-hub.js` — HIGH

**Problems documented in the skill:**

1. **Two-layer routing pitfall** (line 18 vs line 276) — the authoritative
   Study/Guide split is at line 18, but fixes are often mistakenly applied at
   line 276 (card-level). Both must stay in sync.
2. **Concatenation chain fragility** — missing trailing `+` operators silently
   break the DOM. Happened twice in one session. `node --check` does NOT catch
   this because the syntax is valid (orphan expression statements).
3. **Nested group rendering** — flat-to-nested merge logic is complex and
   undocumented. The references document (`references/nested-groups.md`)
   exists but the code itself has no comments.

**Recommendation:**
- Convert concatenation chains to array `.join('')` patterns. This eliminates
  the missing-`+` bug class entirely:

  ```javascript
  // BEFORE (fragile)
  var html = '<div>' +
      stuff +
      more;  // ← missing + silently drops everything after

  // AFTER (safe)
  var parts = ['<div>', stuff, more];
  var html = parts.join('');
  ```

- Add inline comments at lines 18 and 276 cross-referencing each other
  ("See line 276 for card-level — both must match" and vice versa).

**Priority: P1 — Same bug class has bitten twice.**

---

### A3. `js/quiz-engine.js` — MEDIUM

**Problems:**

1. `questionsPerQuiz` is hardcoded to 7 at line 3. This should be configurable
   per-note or per-category.
2. Text-input comparison strips spaces (`\s`) — good — but doesn't handle
   common answer format variations (e.g., "0.5" vs ".5", "1e3" vs "1000").
3. Field name inconsistency risk — the skill documents that sub-agents
   commonly use abbreviated field names (`q`, `o`, `a`, `e`) which cause
   "undefined" errors. The engine should validate field presence on load.
4. `href="#"` in back links — fixed in July 2026 but fragile.

**Recommendation:**
- Move `questionsPerQuiz` to a data-driven config (e.g., per-quiz `poolSize`
  field in `quizzes.json`).
- Add numeric equivalence handling for text answers (accept `.5` for `0.5`,
  accept `1e3` for `1000`).
- Add a `validateQuizFormat()` function that runs on data load and reports
  missing fields by name.

**Priority: P2 — Functional but has sharp edges.**

---

### A4. `js/dashboard.js` — LOW

**Status: Relatively clean (138 lines).**

Minimal issues. The exercise system integration (line 48-51) is clean and
guarded by `typeof ExercisesUI !== 'undefined'`. No changes needed.

---

### A5. `js/router.js` — LOW

**Status: Clean (38 lines).**

Simple hash router. The exercise route (lines 14-16) was added cleanly.
No changes needed.

---

### A6. CSS Files — MEDIUM

**Problems:**

1. `components.css` — no idea what's in it vs `layout.css` vs `base.css`.
   The split is undocumented.
2. No CSS custom properties for exercise colors — the gold accent `#d2991d`
   is hardcoded in 7 places in `exercises.css`. Should be a variable.
3. Mobile responsive rules exist at 768px but some exercise pages (topic page
   level grid) may overflow on small screens.

**Recommendation:**
- Add `--ex-accent: #d2991d;` to the `:root` or `.ex-card` scope.
- Audit exercise pages at 375px width (iPhone SE).

**Priority: P3 — Works but has tech debt.**

---

### A7. Build Pipeline — LOW

**Problems:**

1. `exercises-data.js` is manually generated by a Python script but not
   integrated into `build.py`. If someone runs `build.py`, it doesn't
   regenerate exercise data.
2. No validation of exercise data in `build.py` — it only validates quizzes.
3. `convert.py` is fragile (documented YAML frontmatter regex bug, C++
   attribute auto-wrap, FOLDER_MAP mismatch bug).

**Recommendation:**
- Add an exercise validation step to `build.py` that checks JSON structure,
   answer types, and solution syntax.
- Add exercise data regeneration to the build pipeline.

**Priority: P3 — Manual workflow works for now but won't scale.**

---

## PART B: Exercise System (New Code)

### B1. `js/exercises-engine.js` — MEDIUM

**Problems:**

1. **No answer format documentation** — The `parseVectorAnswer()` function
   accepts parens, brackets, comma-separated, but this isn't communicated to
   the user in the UI. The placeholder says "Your answer..." with no format
   hint.

   **Fix:** Add dynamic placeholder text based on answer type:
   - `vector3d` → `(x, y, z)` 
   - `scalar_degrees` → `degrees (e.g. 36.9)`
   - `left_right` → `left or right`

2. **Solution evaluator edge case** — `_evalSolution()` splits multi-statement
   solutions by `;` and returns the last expression. But if a solution has
   a `;` inside a string or comment, it breaks. Low risk (our solutions don't
   have strings), but fragile.

3. **No question deduplication** — `startSession()` picks 5 random questions
   from the pool but doesn't prevent the same template from appearing twice
   in one session (if pool < 5). The fallback explicitly duplicates, which
   is intentional but could confuse users.

4. **Missing API reference** — The public API is well-structured (13 methods)
   but there's no docblock with param/return types.

**Recommendation:**
- Add placeholder text per answer type (see fix above).
- Add a `_seenIds` set in `startSession()` to prevent duplicates when pool
  ≥ 5.
- Add JSDoc-style comments to all public methods.

**Priority: P2 — Works correctly, needs polish.**

---

### B2. `js/exercises-dashboard.js` — LOW

**Problems:**

1. **Topic page level grid renders ALL 10 levels** even when only Level 1 is
   unlocked. This is by design (shows the path ahead) but makes the page long.
   Consider a collapsible "future levels" section.

2. **No session-resume on page refresh** — if you're on question 3/5 and
   refresh the browser, the session is lost and you start over. The engine
   could save `_questions` and `_idx` to sessionStorage.

3. **Stats on topic page only show accuracy** — could show "avg time per
   question" or "questions until next level" for better motivation.

**Recommendation:**
- Session-resume via `sessionStorage` (P3 — nice to have).
- Add "questions remaining to next clear" stat (P3).

**Priority: P3 — Good as-is, these are enhancements.**

---

### B3. Question Data (`exercises.json`) — MEDIUM

**Problems:**

1. **Solution expressions use JS syntax** (`let dx = ...; [dx/mag, dy/mag, dz/mag]`).
   This works because the engine evaluates them as JavaScript. But if the
   engine ever moves to a different evaluation method (e.g., WebAssembly or
   a math parser), all solutions break.

2. **No mathematical verification of solutions** — the audit script checks
   structure but not whether `sqrt((x2-x1)**2 + (y2-y1)**2)` actually produces
   the right distance. A random-sampling test should verify ~100 templates.

3. **Hint quality is uneven** — some Level 1 hints are excellent
   ("Subtract A's position from B's"), others are generic
   ("Add the displacement to the starting position"). All hints should
   follow the 3-level pattern: (1) conceptual nudge, (2) partial formula,
   (3) full approach.

4. **Only Vectors has content** — Trigonometry, Matrices, Quaternions, and
   Calculus cards all exist on the dashboard but show "Coming Soon." This
   is intentional (user chose to start with Vectors) but the placeholder
   cards currently don't exist — they need to be added.

**Recommendation:**
- Run 3 random params through every template solution and verify NaN is never
  produced.
- Audit Level 1 and 2 hints for consistency with the 3-level pattern.
- Add placeholder data entries for Trigonometry, Matrices, Quaternions, Calculus
  with `"levels": []` so the dashboard cards render as "Coming Soon."

**Priority: P2 — Functional but needs hardening.**

---

### B4. CSS (`exercises.css`) — LOW

**Problems:**

1. Hardcoded gold color `#d2991d` in 7 places. Should be `var(--ex-accent)`.
2. `.ex-level-badge` uses a 22px circle — fine for single-digit levels but
   "10" will overflow. Not urgent (10 fits), but Level 11+ would break.
3. No dark/light theme testing beyond the default "midnight" theme.

**Recommendation:**
- Add `--ex-accent: #d2991d;` to `:root` and replace all hardcoded instances.
- Test with Theme.toggle() to verify all exercise pages work in light mode.

**Priority: P3 — Cosmetic.**

---

## PART C: Cross-Cutting Concerns

### C1. Testing

There is no automated test suite for the exercise system. The `test-exercises.html`
page is a manual testing tool. For future topics (Trigonometry, Matrices, etc.),
a proper test framework should exist.

**Recommendation:**
- Add a `tests/exercises/` directory with test data and a test runner.
- Minimum: verify all 325 templates generate valid questions with non-NaN answers.
- Ideal: verify answer validation tolerance covers all expected input formats.

**Priority: P2.**

---

### C2. Documentation

The deepvault skill has been updated with an "Exercise System" section covering
architecture, rules, answer types, and pitfalls. But the code itself lacks
API-level docs.

**Files needing JSDoc:**
- `js/exercises-engine.js` — all 13 public methods
- `js/exercises-dashboard.js` — all 7 public methods

**Files needing inline comments:**
- `js/exercises-engine.js` — `_evalSolution()` edge cases
- `js/exercises-dashboard.js` — `_renderQuestion()` flow

**Priority: P2.**

---

### C3. The "Coming Soon" Topic Cards

The dashboard currently renders a card for each topic in `EXERCISES_DATA.topics`.
But only `vectors` exists. The other topics need placeholder entries:

```json
"trigonometry": {
  "id": "trigonometry",
  "name": "Trigonometry",
  "icon": "📐",
  "description": "Angles, triangles, and circular functions for game cameras and rotation.",
  "levels": []
}
```

The dashboard card renderer should check `levels.length > 0` and show
"Coming Soon" instead of "Level 1 of 0" for topics with no levels.

**Priority: P3 — Not urgent, only Vectors is active.**

---

## Priority Summary

| Priority | Item | Effort |
|----------|------|--------|
| **P1** | `learn.js` — full rewrite as modules | Large (2-3 sessions) |
| **P1** | `topic-hub.js` — `.join('')` refactor | Small (1 session) |
| **P2** | Engine — add per-type placeholder text | Tiny (30 min) |
| **P2** | Engine — JSDoc all public methods | Medium (1 session) |
| **P2** | Data — automated solution verification | Medium (1 session) |
| **P2** | Data — hint quality audit (Levels 1-2) | Small (1 session) |
| **P2** | `quiz-engine.js` — numeric equivalence | Small (1 session) |
| **P2** | Testing — automated test suite for exercises | Medium (1 session) |
| **P3** | CSS — extract `--ex-accent` variable | Tiny (15 min) |
| **P3** | Dashboard — "Coming Soon" topic placeholders | Tiny (15 min) |
| **P3** | Dashboard — session-resume via sessionStorage | Small (1 session) |
| **P3** | Build pipeline — exercise validation in build.py | Small (1 session) |
| **P3** | Theme testing — exercises in light/dark modes | Tiny (15 min) |

---

## What NOT To Touch

These files are working correctly and should not be modified unless there's
a specific bug report:

- `js/router.js` — clean, well-structured
- `js/dashboard.js` — clean, exercise integration is guarded
- `js/icons.js` — well-organized, SVG pattern is consistent
- `js/storage.js` — battle-tested (quiz progress, gist sync)
- `js/theme.js` — simple, works
- `css/base.css` / `css/layout.css` — unknown content, don't touch without
  understanding the split
