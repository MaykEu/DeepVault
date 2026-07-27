/**
 * Compare current render output against baseline.
 * Run after each module extraction to verify no regressions.
 * Usage: node tests/render-compare.js
 */
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var BASE = 'D:/User/Desktop/DeepVault';
var VAULT = path.join(BASE, 'Obsidian/Game Development');
var BASELINE = path.join(BASE, 'tests/baseline');
var SAMPLE_LIST = path.join(BASE, 'tests/sample-notes.txt');

// Load data.js
new vm.Script(fs.readFileSync(path.join(BASE, 'js/data.js'), 'utf-8')).runInThisContext();

// Load NEW modules (these replace learn.js)
// Phase 2 extraction: these files will exist after modules are extracted
var modules = [
  'js/md2html.js',
  'js/wiki-link.js',
  'js/code-highlight.js',
  'js/learn-view.js',
  'js/scroll-track.js'
];

// Load modules in order (matching index.html)
var loadOrder = ['js/code-highlight.js', 'js/wiki-link.js', 'js/learn.js'];
for (var i = 0; i < loadOrder.length; i++) {
  var mp = path.join(BASE, loadOrder[i]);
  if (fs.existsSync(mp)) {
    new vm.Script(fs.readFileSync(mp, 'utf-8')).runInThisContext();
  }
}

// ── Compare ──────────────────────────────────────────────────
var list = fs.readFileSync(SAMPLE_LIST, 'utf-8').split('\n').filter(Boolean);
var passed = 0;
var failed = 0;

for (var i = 0; i < list.length; i++) {
  var notePath = path.join(VAULT, list[i]);
  if (!fs.existsSync(notePath)) continue;

  var baseFile = path.join(BASELINE, list[i].replace(/\//g, '__').replace(/[\\:]/g, '_') + '.html');
  if (!fs.existsSync(baseFile)) continue;

  var raw = fs.readFileSync(notePath, 'utf-8');
  var md = raw.replace(/^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]+/, '').trim();
  var current = LearnView.md2html(md);
  var baseline = fs.readFileSync(baseFile, 'utf-8');

  if (current === baseline) {
    passed++;
  } else {
    failed++;
    console.log('DIFF: ' + list[i]);
    console.log('  Baseline: ' + baseline.length + ' bytes, Current: ' + current.length + ' bytes');
    // Find first difference
    for (var j = 0; j < Math.min(current.length, baseline.length); j++) {
      if (current[j] !== baseline[j]) {
        console.log('  First diff at byte ' + j);
        console.log('    Base: ' + JSON.stringify(baseline.substring(Math.max(0,j-15), j+15)));
        console.log('    Curr: ' + JSON.stringify(current.substring(Math.max(0,j-15), j+15)));
        break;
      }
    }
  }
}

console.log('\n' + passed + ' passed, ' + failed + ' diffs');
if (failed > 0) process.exit(1);
