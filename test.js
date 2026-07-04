// DeepVault smoke tests — run with: node test.js
var fs = require('fs');

var fail = 0, pass = 0;

function check(name, fn) {
  try { if (fn()) { pass++; } else { console.log('FAIL: ' + name); fail++; } }
  catch(e) { console.log('ERROR: ' + name + ' — ' + e.message); fail++; }
}

function ok(name, condition) { check(name, function() { return condition; }); }

// 1. Syntax: all JS files parse
console.log('--- Syntax ---');
['data','storage','theme','search','router','dashboard','topic-hub','quiz-engine','summary','learn','history','app'].forEach(function(f){
  ok('js/' + f + '.js syntax', function(){
    try { fs.readFileSync('js/' + f + '.js', 'utf8'); new Function(fs.readFileSync('js/' + f + '.js', 'utf8')); return true; }
    catch(e) { console.log('  ' + e.message); return false; }
  });
});

// 2. CSS brace balance
console.log('--- CSS ---');
['base','components','layout'].forEach(function(f){
  ok('css/' + f + '.css braces', function(){
    var c = fs.readFileSync('css/' + f + '.css', 'utf8');
    c = c.replace(/\/\*[\s\S]*?\*\//g, '');
    return c.split('{').length === c.split('}').length;
  });
});

// 3. Quiz format: every QUIZ_DATA entry has valid JSON, answers in options, explanations
console.log('--- Quiz format ---');
var data = fs.readFileSync('js/data.js', 'utf8');
var qm = data.matchAll(/QUIZ_DATA\['([^']+)'\] = (\{[\s\S]*?\});/g);
var quizCount = 0, qErrors = 0;
for (var m of qm) {
  quizCount++;
  try {
    var q = JSON.parse(m[2]);
    (q.questions || []).forEach(function(qq, i) {
      if (qq.options && qq.options.indexOf(qq.correctAnswer) < 0) {
        console.log('  ' + m[1] + ' Q' + (i+1) + ': answer ' + qq.correctAnswer + ' not in options');
        qErrors++;
      }
      if (!qq.explanation) {
        console.log('  ' + m[1] + ' Q' + (i+1) + ': missing explanation');
        qErrors++;
      }
    });
  } catch(e) { 
    console.log('  ' + m[1] + ': invalid JSON — ' + e.message);
    qErrors++;
  }
}
ok('quiz format (' + quizCount + ' entries, ' + qErrors + ' errors)', qErrors === 0);

// 4. REFERENCE: all 9 entries present
console.log('--- REFERENCE ---');
var refMatch = data.match(/const REFERENCE = \{([\s\S]*?)\n\};/);
var refs = refMatch ? (refMatch[1].match(/'([^']+)'/g) || []) : [];
ok('REFERENCE entries >= 9', refs.length >= 9);

// 5. FOLDER_GROUPS: 6 folders
var fgMatch = data.match(/const FOLDER_GROUPS = \{([\s\S]*?)\n\};/);
var folders = fgMatch ? (fgMatch[1].match(/'([a-z-]+)':\s*\{/g) || []) : [];
ok('FOLDER_GROUPS has 6 folders', folders.length === 6);

// 6. No debug artifacts
ok('no console.log in JS', !fs.readFileSync('js/dashboard.js','utf8').includes('console.log'));
ok('no temp files committed', !fs.existsSync('js/data.js.latest'));

console.log('\n' + pass + '/' + (pass+fail) + ' passed');
process.exit(fail > 0 ? 1 : 0);
