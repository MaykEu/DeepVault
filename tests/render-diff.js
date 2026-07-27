/**
 * DeepVault Render-Diff Test Harness
 * 
 * Generates baseline HTML from 52 sample vault notes using the CURRENT learn.js md2html.
 * After module extraction, run diff against baseline to verify zero regressions.
 * 
 * Usage:
 *   node tests/render-diff.js generate    — create baseline
 *   node tests/render-diff.js compare     — compare current output against baseline
 */

"use strict";

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var DEEPV = 'D:/User/Desktop/DeepVault';
var VAULT = path.join(DEEPV, 'Obsidian/Game Development');
var BASELINE = path.join(DEEPV, 'tests/baseline');
var SAMPLE_LIST = path.join(DEEPV, 'tests/sample-notes.txt');
var NOTES_CONTENT = null;

// ── Load learn.js ──────────────────────────────────────────────
function loadLearnView() {
  var code = fs.readFileSync(path.join(DEEPV, 'js/learn.js'), 'utf-8');
  
  // LearnView.md2html needs NOTES_CONTENT and REFERENCE
  // Load data.js to get those
  var dataCode = fs.readFileSync(path.join(DEEPV, 'js/data.js'), 'utf-8');
  
  // Extract NOTES_CONTENT and REFERENCE from data.js
  var sandbox = { NOTES_CONTENT: {}, REFERENCE: {} };
  vm.createContext(sandbox);
  
  // Execute data.js to populate NOTES_CONTENT and REFERENCE
  new vm.Script(dataCode).runInContext(sandbox);
  
  NOTES_CONTENT = sandbox.NOTES_CONTENT || {};
  global.REFERENCE = sandbox.REFERENCE || {};
  
  // Now execute learn.js
  new vm.Script(code).runInThisContext();
  
  if (typeof LearnView === 'undefined' || typeof LearnView.md2html !== 'function') {
    console.error('ERROR: LearnView.md2html not found after loading learn.js');
    process.exit(1);
  }
  console.log('Loaded LearnView.md2html');
}

// ── Strip YAML frontmatter ─────────────────────────────────────
function stripFrontmatter(md) {
  var re = /^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]+/;
  return md.replace(re, '').trim();
}

// ── Generate baseline ──────────────────────────────────────────
function generateBaseline() {
  var list = fs.readFileSync(SAMPLE_LIST, 'utf-8').split('\n').filter(Boolean);
  var passed = 0;
  var failed = 0;
  
  for (var i = 0; i < list.length; i++) {
    var notePath = VAULT.replace(/\\/g, '/') + '/' + list[i];
    if (!fs.existsSync(notePath)) {
      console.log('SKIP (not found): ' + list[i]);
      continue;
    }
    
    var raw = fs.readFileSync(notePath, 'utf-8');
    var md = stripFrontmatter(raw);
    var html = LearnView.md2html(md);
    
    var outPath = path.join(BASELINE, list[i].replace(/\//g, '__').replace(/[\\:]/g, '_') + '.html');
    fs.writeFileSync(outPath, html, 'utf-8');
    
    if (html && html.length > 50) {
      passed++;
    } else {
      console.log('WARN: short output for ' + list[i] + ' (' + html.length + ' bytes)');
      failed++;
    }
  }
  
  console.log('Generated baseline: ' + passed + ' passed, ' + failed + ' warnings');
}

// ── Compare against baseline ───────────────────────────────────
function compareBaseline() {
  var list = fs.readFileSync(SAMPLE_LIST, 'utf-8').split('\n').filter(Boolean);
  var passed = 0;
  var failed = 0;
  
  for (var i = 0; i < list.length; i++) {
    var notePath = VAULT.replace(/\\/g, '/') + '/' + list[i];
    if (!fs.existsSync(notePath)) continue;
    
    var baseFile = path.join(BASELINE, list[i].replace(/\//g, '__').replace(/[\\:]/g, '_') + '.html');
    if (!fs.existsSync(baseFile)) {
      console.log('SKIP (no baseline): ' + list[i]);
      continue;
    }
    
    var raw = fs.readFileSync(notePath, 'utf-8');
    var md = stripFrontmatter(raw);
    var current = LearnView.md2html(md);
    var baseline = fs.readFileSync(baseFile, 'utf-8');
    
    if (current === baseline) {
      passed++;
    } else {
      failed++;
      console.log('DIFF: ' + list[i]);
      // Show first difference location
      for (var j = 0; j < Math.min(current.length, baseline.length); j++) {
        if (current[j] !== baseline[j]) {
          console.log('  First diff at byte ' + j + ':');
          console.log('    Baseline: ' + JSON.stringify(baseline.substring(Math.max(0,j-20), j+20)));
          console.log('    Current:  ' + JSON.stringify(current.substring(Math.max(0,j-20), j+20)));
          break;
        }
      }
      if (current.length !== baseline.length) {
        console.log('  Length mismatch: baseline=' + baseline.length + ', current=' + current.length);
      }
    }
  }
  
  console.log('\nCompare: ' + passed + ' passed, ' + failed + ' diffs');
  if (failed > 0) process.exit(1);
}

// ── Main ───────────────────────────────────────────────────────
loadLearnView();
var cmd = process.argv[2] || 'compare';

if (cmd === 'generate') {
  generateBaseline();
} else if (cmd === 'compare') {
  compareBaseline();
} else {
  console.log('Usage: node tests/render-diff.js [generate|compare]');
}
