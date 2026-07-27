/**
 * DeepVault Game Math Practice — Dashboard & UI
 * 
 * Renders exercise cards on the dashboard, topic pages, and practice sessions.
 * Depends on: ExercisesEngine, EXERCISES_DATA (from exercises-data.js)
 */

var ExercisesUI = (function() {
  'use strict';

  // ── Dashboard Section Renderer ──────────────────────────────────
  // Called by Dashboard.render() to inject exercise cards
  function renderDashboardSection() {
    if (typeof EXERCISES_DATA === 'undefined' || !EXERCISES_DATA || !EXERCISES_DATA.topics) { return ''; }
    
    var topics = ExercisesEngine.getAllTopics();
    if (topics.length === 0) { return ''; }
    
    var html = '<h3 style="display:flex;align-items:center;gap:0.5rem;margin-top:2rem;margin-bottom:0.75rem;color:var(--text-secondary);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;">' +
      '<span>🎮 Game Math Practice</span>' +
      '</h3>' +
      '<div class="dashboard" style="margin-bottom:0.5rem;">';
    
    for (var i = 0; i < topics.length; i++) {
      var t = topics[i];
      var stars = '';
      for (var s = 1; s <= t.totalLevels; s++) {
        var clears = (t.perfectClears && t.perfectClears[s]) ? t.perfectClears[s] : 0;
        if (s < t.currentLevel || (s === t.currentLevel && clears >= 3)) stars += '★';
        else if (s === t.currentLevel && clears > 0) stars += '✦';
        else stars += '☆';
      }
      
      var lvLabel = 'Level ' + t.currentLevel + ' of ' + t.totalLevels;
      var pct = t.totalAnswered > 0 ? Math.round(t.totalCorrect / t.totalAnswered * 100) : 0;
      // Progress = completed levels / total (level 1 = 0%, level 10 = 100%)
      var completedCount = (t.completedLevels || []).length;
      var progressPct = Math.round(completedCount / t.totalLevels * 100);
      
      html += '<div class="folder-card ex-card" style="--card-accent:#d2991d" onclick="router.navigate(\'#/practice/' + t.id + '\')">' +
        '<div class="ex-card-top">' +
          '<div class="folder-icon" style="width:28px;height:28px;flex-shrink:0;">' + (FOLDER_ICONS['_' + t.id] || t.icon || '📐') + '</div>' +
          '<div class="folder-name">' + t.name + '</div>' +
          '<div class="ex-level-badge">' + t.currentLevel + '</div>' +
        '</div>' +
        '<div class="ex-card-progress">' +
          '<div class="ex-card-bar"><div class="ex-card-bar-fill" style="width:' + progressPct + '%"></div></div>' +
          '<span class="ex-card-pct">' + progressPct + '%</span>' +
        '</div>' +
      '</div>';
    }
    
    html += '</div>';
    return html;
  }

  // ── Topic Page Renderer ─────────────────────────────────────────
  function renderTopicPage(container, topicId) {
    var meta = ExercisesEngine.getTopicMeta(topicId);
    if (!meta) {
      container.innerHTML = '<div class="loading">Topic not found. <a href="javascript:void(0)" onclick="router.navigate(\'#/\')">Back to dashboard</a></div>';
      return;
    }
    
    var pct = meta.totalAnswered > 0 ? Math.round(meta.totalCorrect / meta.totalAnswered * 100) : 0;

    var html = '<div class="ex-topic-page">';
    
    // Back link
    html += '<a href="javascript:void(0)" class="ex-back" onclick="router.navigate(\'#/\')">← Back to Dashboard</a>';
    
    // Header
    html += '<div class="ex-topic-header">' +
      '<div class="ex-topic-icon">' + (FOLDER_ICONS['_' + meta.id] || meta.icon || '📐') + '</div>' +
      '<div>' +
        '<h1 class="ex-topic-title">' + meta.name + '</h1>' +
        '<p class="ex-topic-desc">' + (meta.description || '') + '</p>' +
      '</div>' +
    '</div>';
    
    // Stats bar
    html += '<div class="ex-stats">' +
      '<div class="ex-stat"><div class="ex-stat-value">' + meta.currentLevel + '/' + meta.totalLevels + '</div><div class="ex-stat-label">Current Level</div></div>' +
      '<div class="ex-stat"><div class="ex-stat-value">' + meta.bestStreak + '</div><div class="ex-stat-label">Best Streak</div></div>' +
      '<div class="ex-stat"><div class="ex-stat-value">' + meta.totalAnswered + '</div><div class="ex-stat-label">Questions</div></div>' +
      '<div class="ex-stat"><div class="ex-stat-value">' + pct + '%</div><div class="ex-stat-label">Accuracy</div></div>' +
    '</div>';
    
    // Rules box
    html += '<div class="ex-rules">' +
      '<strong>How it works</strong><br>' +
      '• Each session has <strong>5 questions</strong> from your current level<br>' +
      '• Get <strong>5/5 correct</strong> = ⭐ Perfect Clear<br>' +
      '• <strong>3 Perfect Clears</strong> → next level unlocks<br>' +
      '• Formulas are <em>never</em> shown — figure it out or use hints' +
    '</div>';
    
    // Level grid
    html += '<div class="ex-levels">';
    for (var i = 0; i < meta.levels.length; i++) {
      var lv = meta.levels[i];
      var isUnlocked = lv.level <= meta.currentLevel;
      var isCompleted = meta.completedLevels && meta.completedLevels.indexOf(lv.level) >= 0;
      var isCurrent = lv.level === meta.currentLevel;
      var clears = (meta.perfectClears && meta.perfectClears[lv.level]) ? meta.perfectClears[lv.level] : 0;
      
      var statusIcon = isCompleted ? '✅' : (isCurrent ? '▶' : (isUnlocked ? '🔓' : '🔒'));
      var cls = 'ex-level-card';
      if (!isUnlocked) cls += ' ex-locked';
      if (isCurrent) cls += ' ex-current';
      if (isCompleted) cls += ' ex-completed';
      
      var stars = '';
      for (var s = 0; s < 3; s++) { stars += s < clears ? '⭐' : '☆'; }
      
      html += '<div class="' + cls + '">' +
        '<div class="ex-level-status">' + statusIcon + '</div>' +
        '<div class="ex-level-num">Level ' + lv.level + '</div>' +
        '<div class="ex-level-title">' + lv.title + '</div>' +
        '<div class="ex-level-stars">' + stars + '</div>' +
        '</div>';
    }
    html += '</div>';
    
    // Start button
    html += '<div style="text-align:center;margin-top:20px;">' +
      '<button class="btn btn-primary" style="font-size:1.1rem;padding:12px 32px;" onclick="ExercisesUI.startPractice(\'' + topicId + '\', ' + meta.currentLevel + ')">' +
        '🎯 Start Practice — Level ' + meta.currentLevel +
      '</button>' +
    '</div>';
    
    html += '</div>';
    
    container.innerHTML = html;
  }

  // ── Practice Session Renderer ───────────────────────────────────
  function startPractice(topicId, level) {
    var result = ExercisesEngine.startSession(topicId, level);
    if (!result) {
      alert('Could not start session. Check that the data is loaded.');
      return;
    }
    _renderQuestion(false);
  }

  function _renderQuestion(showFeedback) {
    var q = ExercisesEngine.getCurrentQuestion();
    if (!q) {
      _renderResults();
      return;
    }
    
    if (!showFeedback) {
      // First render of this question
      var container = document.getElementById('app-main');
      var html = '<div class="ex-session">';
      
      // Header bar
      html += '<div class="ex-session-header">' +
        '<a href="javascript:void(0)" class="ex-back" onclick="ExercisesUI.endAndGoBack(\'' + q.topic + '\')">← Quit</a>' +
        '<span class="ex-session-progress">Question ' + (q.index + 1) + ' of ' + q.total + '</span>' +
        '<span class="ex-session-streak">Streak: 🔥 ' + q.streak + '</span>' +
      '</div>';
      
      // Scenario
      html += '<div class="ex-scenario">' + q.question.scenario + '</div>';
      
      // Visual diagram (if question has one)
      if (q.question._template && q.question._template.visual) {
        html += '<div class="ex-visual-wrap">' + _renderVisual(q.question._template.visual, q.question.params) + '</div>';
      }
      
      // Scratch pad — work through the problem here
      html += '<textarea id="ex-scratch" class="ex-scratch" placeholder="Work through your solution here... (scratch pad)" rows="4"></textarea>';
      
      // Input area
      html += '<div class="ex-input-area">' +
        '<input type="text" id="ex-answer" class="ex-answer-input" placeholder="Your answer..." autofocus onkeydown="if(event.key===\'Enter\')ExercisesUI.submitCurrentAnswer()">' +
        (q.question.units ? '<span class="ex-units">' + q.question.units + '</span>' : '') +
      '</div>';
      
      // Buttons
      html += '<div class="ex-buttons">' +
        '<button class="btn btn-primary" onclick="ExercisesUI.submitCurrentAnswer()">Submit</button>' +
        '<button class="btn btn-outline" onclick="ExercisesUI.showHint()">💡 Hint</button>' +
      '</div>';
      
      // Feedback area (empty initially)
      html += '<div id="ex-feedback"></div>';
      html += '<div id="ex-hints"></div>';
      
      html += '</div>';
      container.innerHTML = html;
      
      document.getElementById('ex-answer').focus();
    }
  }

  // Track hint level per question
  var _hintLevel = 0;

  function showHint() {
    var q = ExercisesEngine.getCurrentQuestion();
    if (!q || !q.question.hints || _hintLevel >= q.question.hints.length) { return; }
    
    var hintsDiv = document.getElementById('ex-hints');
    if (!hintsDiv) { return; }
    
    hintsDiv.innerHTML += '<div class="ex-hint">💡 Hint ' + (_hintLevel + 1) + ': ' + q.question.hints[_hintLevel] + '</div>';
    _hintLevel++;
  }

  function submitCurrentAnswer() {
    var input = document.getElementById('ex-answer');
    if (!input) { return; }
    var answer = input.value.trim();
    if (!answer) { return; }
    
    var result = ExercisesEngine.submitAnswer(answer);
    if (!result) { return; }
    
    var feedbackDiv = document.getElementById('ex-feedback');
    if (!feedbackDiv) { return; }
    
    if (result.correct) {
      feedbackDiv.innerHTML = '<div class="ex-feedback ex-feedback-correct">✅ Correct!</div>';
    } else {
      feedbackDiv.innerHTML = '<div class="ex-feedback ex-feedback-incorrect">❌ Incorrect</div>';
    }
    
    // Show solution
    feedbackDiv.innerHTML += '<div class="ex-solution">' +
      '<strong>Solution:</strong> ' + ExercisesEngine.formatCorrectValue(result.correctValue, result.answerType) +
      (result.units ? ' ' + result.units : '') +
      '<br><small style="color:var(--text-muted)">Formula: ' + result.solutionExpr.replace(/PI\b/g, 'π') + '</small>' +
    '</div>';
    
    // Update streak display
    var streakSpan = document.querySelector('.ex-session-streak');
    if (streakSpan) { streakSpan.textContent = 'Streak: 🔥 ' + result.streak; }
    
    // Disable input
    input.disabled = true;
    
    if (result.sessionDone) {
      // Show results after short delay
      setTimeout(function() { _renderResults(); }, 1200);
    } else {
      // Show next button
      var buttonsDiv = document.querySelector('.ex-buttons');
      if (buttonsDiv) {
        buttonsDiv.innerHTML = '<button class="btn btn-primary" onclick="ExercisesUI.nextQuestion()">Next Question →</button>';
      }
    }
  }

  function nextQuestion() {
    _hintLevel = 0;
    _renderQuestion(false);
  }

  function _renderResults() {
    var result = ExercisesEngine.getSessionResult();
    if (!result) { return; }
    
    var container = document.getElementById('app-main');
    var meta = ExercisesEngine.getTopicMeta(ExercisesEngine._getTopic());
    
    function _getTopic() {
      // Access internal state
      var q = ExercisesEngine.getCurrentQuestion();
      // Session is over, try to get topic from the internal state
      return ExercisesEngine._getInternalTopic();
    }
    
    var html = '<div class="ex-results">';
    
    if (result.perfect) {
      html += '<div class="ex-result-hero">' +
        '<div class="ex-result-icon">🎉</div>' +
        '<h2>PERFECT SCORE!</h2>' +
        '<p>5/5 Correct · ⭐ Star earned!</p>' +
        '<p class="ex-clears">' + result.clears + ' / ' + result.clearsNeeded + ' Perfect Clears</p>' +
      '</div>';
      
      if (result.leveledUp) {
        html += '<div class="ex-levelup">' +
          '<div class="ex-levelup-icon">🚀</div>' +
          '<h3>LEVEL ' + result.newLevel + ' UNLOCKED!</h3>' +
        '</div>';
      }
    } else {
      html += '<div class="ex-result-hero">' +
        '<h2>' + result.correct + ' / ' + result.total + ' Correct</h2>' +
        '<p>No perfect clear — keep trying!</p>' +
        '<p class="ex-clears">' + result.clears + ' / ' + result.clearsNeeded + ' Perfect Clears</p>' +
      '</div>';
    }
    
    html += '<div class="ex-results-bar">' +
      '<div class="ex-stat"><div class="ex-stat-value">🔥 ' + result.streak + '</div><div class="ex-stat-label">Final Streak</div></div>' +
      '<div class="ex-stat"><div class="ex-stat-value">' + result.correct + '/' + result.total + '</div><div class="ex-stat-label">This Session</div></div>' +
    '</div>';
    
    html += '<div class="ex-results-actions">' +
      '<button class="btn btn-primary" onclick="ExercisesUI.startPractice(\'vectors\', ' + result.level + ')">Retry Level ' + result.level + '</button>' +
      (result.leveledUp ? '<button class="btn btn-primary" onclick="ExercisesUI.startPractice(\'vectors\', ' + result.newLevel + ')">Go to Level ' + result.newLevel + ' →</button>' : '') +
      '<button class="btn btn-outline" onclick="router.navigate(\'#/practice/vectors\')">Back to Levels</button>' +
    '</div>';
    
    html += '</div>';
    
    container.innerHTML = html;
  }

  function endAndGoBack(topicId) {
    ExercisesEngine.endSession();
    router.navigate('#/practice/' + topicId);
  }

  // Public API can access internal topic state  
  function _getTopicFromSession() {
    // Try to extract from URL or from the last session
    return 'vectors'; // default
  }

  // ── Visual Renderer ────────────────────────────────────────────
  function _renderVisual(visual, params) {
    if (!visual || !visual.type) return '';
    
    switch(visual.type) {
      case 'right-triangle':
        return _renderRightTriangle(visual, params);
      default:
        return '';
    }
  }
  
  function _renderRightTriangle(vis, params) {
    // Interpolate any {{param}} values in the labels
    function lbl(key) {
      if (!vis[key]) return '';
      var s = vis[key];
      for (var p in params) {
        s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), params[p]);
      }
      return s;
    }
    
    var adj = lbl('adjacent');
    var opp = lbl('opposite');
    var hyp = lbl('hypotenuse');
    var angleLabel = lbl('angleLabel');
    
    var sw = 280, sh = 190;
    var x1 = 40, y1 = 170;   // bottom-left
    var x2 = 230, y2 = 170;  // bottom-right (right angle)
    var x3 = 230, y3 = 35;   // top-right
    
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + sw + ' ' + sh + '" style="width:100%;max-width:280px;display:block;margin:0 auto;">';
    
    // Triangle fill (subtle)
    svg += '<polygon points="' + x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3 + '" fill="rgba(88,166,255,0.06)" stroke="var(--text-secondary)" stroke-width="2" stroke-linejoin="round"/>';
    
    // Right angle marker (small square)
    var sq = 10;
    svg += '<polyline points="' + (x2-sq) + ',' + y2 + ' ' + (x2-sq) + ',' + (y2-sq) + ' ' + x2 + ',' + (y2-sq) + '" fill="none" stroke="var(--text-muted)" stroke-width="1.2"/>';
    
    // Angle arc at bottom-left
    svg += '<path d="M' + (x1+18) + ',' + y1 + ' A18,18 0 0,1 ' + (x1+18*Math.cos(Math.atan2(y3-y1,x3-x1))) + ',' + (y1-18*Math.sin(Math.atan2(y3-y1,x3-x1))) + '" fill="none" stroke="var(--accent,#58a6ff)" stroke-width="1.5"/>';
    
    // Side labels
    if (adj) {
      svg += '<text x="' + ((x1+x2)/2) + '" y="' + (y1+20) + '" text-anchor="middle" fill="var(--text-primary)" font-size="12" font-family="sans-serif">' + adj + '</text>';
    }
    if (opp) {
      svg += '<text x="' + (x2+14) + '" y="' + ((y2+y3)/2+5) + '" fill="var(--text-primary)" font-size="12" font-family="sans-serif">' + opp + '</text>';
    }
    if (hyp) {
      // Along the hypotenuse — position text near the middle, offset perpendicularly
      var mx = (x1+x3)/2 - 22;
      var my = (y1+y3)/2 - 6;
      svg += '<text x="' + mx + '" y="' + my + '" fill="var(--text-primary)" font-size="12" font-family="sans-serif">' + hyp + '</text>';
    }
    
    // Angle label (theta) near the angle arc
    if (angleLabel) {
      svg += '<text x="' + (x1+28) + '" y="' + (y1-10) + '" fill="var(--accent,#58a6ff)" font-size="13" font-family="sans-serif" font-style="italic">' + angleLabel + '</text>';
    }
    
    svg += '</svg>';
    return svg;
  }

  // ── Public API ─────────────────────────────────────────────────
  return {
    renderDashboardSection: renderDashboardSection,
    renderTopicPage: renderTopicPage,
    startPractice: startPractice,
    submitCurrentAnswer: submitCurrentAnswer,
    showHint: showHint,
    nextQuestion: nextQuestion,
    endAndGoBack: endAndGoBack
  };
})();

// Provide accessor for internal state
ExercisesEngine._getInternalTopic = function() { return 'vectors'; };
