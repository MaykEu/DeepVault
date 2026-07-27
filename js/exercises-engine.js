/**
 * DeepVault Game Math Practice — Exercises Engine
 * 
 * Vanilla JS. No dependencies. Works alongside the existing DeepVault app.
 * 
 * Architecture:
 *   - Loads question templates from EXERCISES_DATA (injected via data.js or standalone JSON)
 *   - Generates randomized question instances at session start
 *   - Validates answers with type-aware tolerance
 *   - Persists progress to localStorage
 *   - Renders questions, hints, solutions, results via DOM callbacks
 */

var ExercisesEngine = (function() {
  'use strict';

  // ── State ──────────────────────────────────────────────────────
  var _topic = null;           // current topic id (e.g. 'vectors')
  var _level = null;           // current level number (1-10)
  var _questions = [];         // current session: [{template, params, answer}]
  var _idx = 0;                // current question index (0-based)
  var _streak = 0;             // current session streak
  var _correctThisSession = 0; // correct answers this session
  var _sessionActive = false;  // is a session in progress?
  var _lastAnswer = null;      // last submitted answer (for showing solution)
  var _lastCorrect = false;    // was last answer correct?

  // ── Constants ──────────────────────────────────────────────────
  var QUESTIONS_PER_SESSION = 5;
  var CLEARS_TO_UNLOCK = 3;
  var LS_KEY = 'deepvault-exercises';

  // ── Default Progress ───────────────────────────────────────────
  function _defaultProgress() {
    return {
      vectors: {
        currentLevel: 1,
        perfectClears: {},
        bestStreak: 0,
        totalAnswered: 0,
        totalCorrect: 0,
        completedLevels: []
      }
    };
  }

  // ── Progress (localStorage) ────────────────────────────────────
  function loadProgress() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (!raw) { return _defaultProgress(); }
      var p = JSON.parse(raw);
      // Merge with defaults to handle new fields
      var def = _defaultProgress();
      for (var topic in def) {
        if (!p[topic]) { p[topic] = def[topic]; }
        for (var key in def[topic]) {
          if (!(key in p[topic])) { p[topic][key] = def[topic][key]; }
        }
      }
      return p;
    } catch(e) {
      return _defaultProgress();
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(progress));
    } catch(e) {
      // storage full — silent fail
    }
  }

  function getTopicProgress(topicId) {
    var p = loadProgress();
    if (!p[topicId]) {
      p[topicId] = { currentLevel: 1, perfectClears: {}, bestStreak: 0, totalAnswered: 0, totalCorrect: 0, completedLevels: [] };
      saveProgress(p);
    }
    return p[topicId];
  }

  function updateTopicProgress(topicId, updater) {
    var p = loadProgress();
    if (!p[topicId]) { p[topicId] = { currentLevel: 1, perfectClears: {}, bestStreak: 0, totalAnswered: 0, totalCorrect: 0, completedLevels: [] }; }
    updater(p[topicId]);
    saveProgress(p);
    return p[topicId];
  }

  // ── Random Helpers ─────────────────────────────────────────────
  function _randInt(min, max, step) {
    step = step || 1;
    var range = Math.floor((max - min) / step) + 1;
    return min + (Math.floor(Math.random() * range)) * step;
  }

  function _randFloat(min, max, decimals) {
    decimals = (decimals !== undefined) ? decimals : 2;
    var val = min + Math.random() * (max - min);
    return parseFloat(val.toFixed(decimals));
  }

  function _choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function _shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ── Parameter Resolution ───────────────────────────────────────
  // Evaluates param definitions like "randint(10, 50, 5)" or "choice(['left','right'])"
  function _resolveParams(paramDefs) {
    var params = {};
    for (var key in paramDefs) {
      var def = paramDefs[key];
      if (typeof def === 'number') {
        params[key] = def;
        continue;
      }
      if (!isNaN(parseFloat(def))) {
        params[key] = parseFloat(def);
        continue;
      }
      // Evaluate: randint(min,max,step), randfloat(min,max,dec), choice([...])
      try {
        // Safely evaluate built-in patterns only
        var val = _evalParam(def);
        params[key] = val;
      } catch(e) {
        params[key] = 0;
      }
    }
    return params;
  }

  function _evalParam(def) {
    def = def.trim();
    // randint(min, max, step?)
    var m = def.match(/^randint\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*(?:,\s*(-?\d+\.?\d*))?\s*\)$/);
    if (m) {
      var rMin = parseFloat(m[1]);
      var rMax = parseFloat(m[2]);
      var rStep = m[3] ? parseFloat(m[3]) : 1;
      return _randInt(rMin, rMax, rStep);
    }
    // randfloat(min, max, decimals?)
    m = def.match(/^randfloat\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*(?:,\s*(\d+))?\s*\)$/);
    if (m) {
      var fMin = parseFloat(m[1]);
      var fMax = parseFloat(m[2]);
      var fDec = m[3] ? parseInt(m[3]) : 2;
      return _randFloat(fMin, fMax, fDec);
    }
    // choice([...])
    m = def.match(/^choice\(\s*\[(.*)\]\s*\)$/);
    if (m) {
      var items = m[1].split(',').map(function(s) {
        s = s.trim();
        if ((s[0] === "'" && s[s.length-1] === "'") || (s[0] === '"' && s[s.length-1] === '"')) {
          return s.slice(1, -1);
        }
        return s;
      });
      return _choice(items);
    }
    // Fallback: try as number
    return parseFloat(def);
  }

  // ── Template Interpolation ─────────────────────────────────────
  function _interpolate(template, params) {
    return template.replace(/\{\{(\w+)\}\}/g, function(_, key) {
      return (key in params) ? params[key] : '??';
    });
  }

  // ── Solution Evaluation ────────────────────────────────────────
  // Evaluates the solution expression with the given params.
  // Supports: simple expressions (e.g. "x + y"), array literals (e.g. "[x, y, z]"),
  // and multi-statement blocks (e.g. "let dx = ...; let dy = ...; [dx, dy, dz]").
  function _evalSolution(solutionExpr, params) {
    // Build the function body
    var body = solutionExpr;
    
    // Replace PI with Math.PI
    body = body.replace(/\bPI\b/g, 'Math.PI');
    
    // Replace math functions with Math.* equivalents
    body = body.replace(/\b(sin|cos|tan|asin|acos|atan|atan2|abs|sqrt|pow|round|ceil|floor|max|min)\b/g, 'Math.$1');
    
    try {
      // If the solution contains 'let' or multiple statements, execute as a block.
      // Otherwise, wrap in return.
      var isMultiStatement = body.indexOf(';') >= 0 || body.indexOf('let ') >= 0;
      var fnBody;
      if (isMultiStatement) {
        // Multi-statement: the last expression before the final semicolon or end
        // is the return value. We need to wrap and return it.
        var lines = body.split(';').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
        if (lines.length === 0) { return NaN; }
        // Rejoin: all but last line as statements, last line returned
        var lastLine = lines[lines.length - 1];
        lines[lines.length - 1] = 'return (' + lastLine + ');';
        body = lines.join(';\n');
      } else {
        body = 'return (' + body + ');';
      }
      
      // Build parameter names and values
      var argNames = Object.keys(params);
      var argValues = argNames.map(function(k) { return params[k]; });
      
      var fn = Function.apply(null, argNames.concat([body]));
      var result = fn.apply(null, argValues);
      return result;
    } catch(e) {
      console.error('Solution eval error:', solutionExpr, JSON.stringify(params), e.message);
      return NaN;
    }
  }

  // ── Answer Parsing ─────────────────────────────────────────────
  function parseVectorAnswer(raw) {
    raw = String(raw).trim();
    // Strip surrounding parentheses
    if (raw[0] === '(' && raw[raw.length-1] === ')') {
      raw = raw.slice(1, -1);
    }
    // Strip brackets
    if (raw[0] === '[' && raw[raw.length-1] === ']') {
      raw = raw.slice(1, -1);
    }
    // Split by comma
    var parts = raw.split(',');
    if (parts.length !== 3) { return null; }
    var x = parseFloat(parts[0].trim());
    var y = parseFloat(parts[1].trim());
    var z = parseFloat(parts[2].trim());
    if (isNaN(x) || isNaN(y) || isNaN(z)) { return null; }
    return [x, y, z];
  }

  // ── Answer Validation ──────────────────────────────────────────
  function validateAnswer(userAnswer, correctValue, answerType) {
    answerType = answerType || 'scalar';

    switch(answerType) {
      case 'vector3d':
        return _validateVector(userAnswer, correctValue);

      case 'scalar':
      case 'scalar_magnitude':
        return _validateScalar(userAnswer, correctValue, 0.01);

      case 'scalar_degrees':
        return _validateScalar(userAnswer, correctValue, 0.25);

      case 'scalar_dot':
        return _validateScalar(userAnswer, correctValue, 0.008);

      case 'scalar_component':
        return _validateScalar(userAnswer, correctValue, 0.01);

      case 'left_right':
        return _validateEnum(userAnswer, ['left', 'right', 'l', 'r']);

      case 'cw_ccw':
        return _validateEnum(userAnswer, ['clockwise', 'counter-clockwise', 'counterclockwise', 'cw', 'ccw']);

      case 'yes_no':
        return _validateEnum(userAnswer, ['yes', 'no', 'y', 'n']);

      case 'front_behind':
        return _validateEnum(userAnswer, ['front', 'behind', 'in front', 'in_front']);

      case 'positive_negative_zero':
        return _validateEnum(userAnswer, ['positive', 'negative', 'zero', 'pos', 'neg', '+', '-', '0']);

      default:
        return _validateScalar(userAnswer, correctValue, 0.01);
    }
  }

  function _validateVector(userAnswer, expected) {
    var parsed = parseVectorAnswer(userAnswer);
    if (!parsed) { return false; }
    if (!Array.isArray(expected) || expected.length !== 3) {
      // expected is a single number? compare all components
      if (typeof expected === 'number') {
        return parsed.every(function(v) { return Math.abs(v - expected) < 0.01; });
      }
      return false;
    }
    for (var i = 0; i < 3; i++) {
      if (Math.abs(parsed[i] - expected[i]) > 0.01) { return false; }
    }
    return true;
  }

  function _validateScalar(userAnswer, expected, tolerance) {
    var val = parseFloat(String(userAnswer).trim());
    if (isNaN(val)) { return false; }
    // Relative tolerance for large numbers
    var absDiff = Math.abs(val - expected);
    if (absDiff <= tolerance) { return true; }
    // For values > 100, use relative tolerance
    if (Math.abs(expected) > 100) {
      var relTol = Math.max(tolerance, Math.abs(expected) * 0.001);
      return absDiff <= relTol;
    }
    return false;
  }

  function _validateEnum(userAnswer, validValues) {
    var val = String(userAnswer).trim().toLowerCase();
    // Normalize common variations
    var normalized = val
      .replace(/-/g, '')
      .replace(/\s+/g, '')
      .replace(/_/g, '');
    var validNorms = validValues.map(function(v) {
      return v.toLowerCase().replace(/-/g, '').replace(/\s+/g, '').replace(/_/g, '');
    });
    return validNorms.indexOf(normalized) >= 0 || validValues.map(function(v) { return v.toLowerCase(); }).indexOf(val) >= 0;
  }

  // ── Question Generation ────────────────────────────────────────
  function _generateQuestion(template) {
    var params = _resolveParams(template.params || {});
    var scenario = _interpolate(template.scenario, params);
    var solutionExpr = template.solution;
    var correctValue = _evalSolution(solutionExpr, params);
    var hints = (template.hints || []).map(function(h) { return _interpolate(h, params); });
    var answerType = template.answerType || 'scalar';
    var units = template.units || '';
    var tolerance = template.tolerance || null;

    return {
      id: template.id,
      level: template.level,
      scenario: scenario,
      correctValue: correctValue,
      hints: hints,
      answerType: answerType,
      units: units,
      tolerance: tolerance,
      params: params,
      solutionExpr: solutionExpr,
      // Store for solution display
      _template: template
    };
  }

  // ── Session Management ─────────────────────────────────────────
  function startSession(topicId, level) {
    var topicData = _getTopicData(topicId);
    if (!topicData) { return null; }

    var levelData = _getLevelData(topicData, level);
    if (!levelData || !levelData.questions || levelData.questions.length === 0) {
      return null;
    }

    _topic = topicId;
    _level = level;
    _idx = 0;
    _streak = 0;
    _correctThisSession = 0;
    _sessionActive = true;
    _lastAnswer = null;
    _lastCorrect = false;

    // Shuffle and pick distinct templates
    var pool = _shuffle(levelData.questions);
    // Pick 5 distinct questions (or fewer if pool is small)
    var count = Math.min(QUESTIONS_PER_SESSION, pool.length);
    var selected = pool.slice(0, count);

    // If pool < 5, dupe with different params (regenerating gives new random params)
    while (selected.length < QUESTIONS_PER_SESSION) {
      var extra = pool[_randInt(0, pool.length - 1)];
      selected.push(extra);
    }

    _questions = selected.map(function(t) { return _generateQuestion(t); });
    return { total: _questions.length, topic: topicId, level: level };
  }

  function getCurrentQuestion() {
    if (!_sessionActive || _idx >= _questions.length) { return null; }
    return {
      question: _questions[_idx],
      index: _idx,
      total: _questions.length,
      streak: _streak,
      level: _level,
      topic: _topic
    };
  }

  function submitAnswer(rawAnswer) {
    if (!_sessionActive || _idx >= _questions.length) { return null; }

    var q = _questions[_idx];
    var correct = validateAnswer(rawAnswer, q.correctValue, q.answerType);

    _lastAnswer = rawAnswer;
    _lastCorrect = correct;

    if (correct) {
      _streak++;
      _correctThisSession++;
      updateTopicProgress(_topic, function(p) {
        p.totalAnswered = (p.totalAnswered || 0) + 1;
        p.totalCorrect = (p.totalCorrect || 0) + 1;
        if (_streak > (p.bestStreak || 0)) { p.bestStreak = _streak; }
      });
    } else {
      _streak = 0;
      updateTopicProgress(_topic, function(p) {
        p.totalAnswered = (p.totalAnswered || 0) + 1;
      });
    }

    var result = {
      correct: correct,
      correctValue: q.correctValue,
      solutionExpr: q.solutionExpr,
      params: q.params,
      hints: q.hints,
      answerType: q.answerType,
      units: q.units,
      streak: _streak,
      questionIndex: _idx,
      total: _questions.length
    };

    // Advance index
    _idx++;

    // Check if session is done
    if (_idx >= _questions.length) {
      result.sessionDone = true;
      result.sessionResult = getSessionResult();
    }

    return result;
  }

  function getSessionResult() {
    if (!_sessionActive) { return null; }
    var isPerfect = _correctThisSession >= QUESTIONS_PER_SESSION;
    var progress = getTopicProgress(_topic);

    var clears = (progress.perfectClears && progress.perfectClears[_level]) ? progress.perfectClears[_level] : 0;

    if (isPerfect) {
      clears++;
      // Save perfect clear
      updateTopicProgress(_topic, function(p) {
        if (!p.perfectClears) { p.perfectClears = {}; }
        p.perfectClears[_level] = clears;
      });

      var leveledUp = false;
      if (clears >= CLEARS_TO_UNLOCK && _level < 10) {
        // Level up!
        var newLevel = _level + 1;
        updateTopicProgress(_topic, function(p) {
          p.currentLevel = newLevel;
          if (!p.completedLevels) { p.completedLevels = []; }
          if (p.completedLevels.indexOf(_level) < 0) {
            p.completedLevels.push(_level);
          }
        });
        leveledUp = true;
      }

      return {
        perfect: true,
        correct: _correctThisSession,
        total: _questions.length,
        clears: clears,
        clearsNeeded: CLEARS_TO_UNLOCK,
        leveledUp: leveledUp,
        newLevel: leveledUp ? (_level + 1) : null,
        streak: _streak,
        level: _level
      };
    }

    return {
      perfect: false,
      correct: _correctThisSession,
      total: _questions.length,
      clears: clears,
      clearsNeeded: CLEARS_TO_UNLOCK,
      streak: _streak,
      level: _level
    };
  }

  function endSession() {
    _sessionActive = false;
    _questions = [];
    _idx = 0;
    _streak = 0;
  }

  // ── Data Access ────────────────────────────────────────────────
  function _getTopicData(topicId) {
    if (typeof EXERCISES_DATA !== 'undefined' && EXERCISES_DATA.topics) {
      return EXERCISES_DATA.topics[topicId];
    }
    return null;
  }

  function _getLevelData(topicData, level) {
    if (!topicData || !topicData.levels) { return null; }
    for (var i = 0; i < topicData.levels.length; i++) {
      if (topicData.levels[i].level === level) {
        return topicData.levels[i];
      }
    }
    return null;
  }

  function getTopicMeta(topicId) {
    var data = _getTopicData(topicId);
    if (!data) { return null; }
    var progress = getTopicProgress(topicId);
    return {
      id: topicId,
      name: data.name,
      icon: data.icon,
      description: data.description,
      totalLevels: data.levels ? data.levels.length : 10,
      currentLevel: progress.currentLevel,
      completedLevels: progress.completedLevels || [],
      perfectClears: progress.perfectClears || {},
      bestStreak: progress.bestStreak || 0,
      totalAnswered: progress.totalAnswered || 0,
      totalCorrect: progress.totalCorrect || 0,
      levels: data.levels ? data.levels.map(function(l) { return { level: l.level, title: l.title }; }) : []
    };
  }

  function getAllTopics() {
    if (typeof EXERCISES_DATA === 'undefined' || !EXERCISES_DATA.topics) { return []; }
    return Object.keys(EXERCISES_DATA.topics).map(function(id) {
      return getTopicMeta(id);
    });
  }

  // ── Format Helpers ─────────────────────────────────────────────
  function formatCorrectValue(value, answerType) {
    if (answerType === 'vector3d' && Array.isArray(value)) {
      return '(' + value.map(function(v) { return _fmtNum(v); }).join(', ') + ')';
    }
    if (typeof value === 'number') {
      return _fmtNum(value);
    }
    return String(value);
  }

  function _fmtNum(n) {
    if (Number.isInteger(n)) { return String(n); }
    return parseFloat(n.toFixed(4)).toString();
  }

  function formatSolutionSteps(expr, params, answerType, units) {
    var steps = [];
    steps.push('Formula: ' + expr.replace(/PI\b/g, 'π'));
    steps.push('Values: ' + JSON.stringify(params).replace(/"/g, ''));
    return steps;
  }

  // ── Public API ─────────────────────────────────────────────────
  return {
    // Session
    startSession: startSession,
    getCurrentQuestion: getCurrentQuestion,
    submitAnswer: submitAnswer,
    getSessionResult: getSessionResult,
    endSession: endSession,
    isActive: function() { return _sessionActive; },

    // Progress
    loadProgress: loadProgress,
    saveProgress: saveProgress,
    getTopicProgress: getTopicProgress,
    getTopicMeta: getTopicMeta,
    getAllTopics: getAllTopics,

    // Helpers
    formatCorrectValue: formatCorrectValue,
    formatSolutionSteps: formatSolutionSteps,
    parseVectorAnswer: parseVectorAnswer,
    validateAnswer: validateAnswer,

    // Constants
    QUESTIONS_PER_SESSION: QUESTIONS_PER_SESSION,
    CLEARS_TO_UNLOCK: CLEARS_TO_UNLOCK,

    // State
    getStreak: function() { return _streak; },
    getCorrectCount: function() { return _correctThisSession; },
    getLastResult: function() { return { answer: _lastAnswer, correct: _lastCorrect }; }
  };
})();
