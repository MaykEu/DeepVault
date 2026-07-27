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
      html += '<div class="ex-scratch-toolbar">' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'√\')" title="Square root">√</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'²\')" title="Squared">x²</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'θ\')" title="Theta">θ</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'π\')" title="Pi">π</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'°\')" title="Degrees">°</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'·\')" title="Dot product">·</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'Δ\')" title="Delta / change">Δ</button>' +
        '<button class="ex-sym-btn" onclick="ExercisesUI._insertSymbol(\'→\')" title="Arrow">→</button>' +
      '</div>';
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
      
      // Render Three.js 3D scene if this question uses coordinate-3d
      var qData = ExercisesEngine.getCurrentQuestion();
      if (qData && qData.question._template) {
        var vis = qData.question._template.visual;
        if (vis && vis.type === 'coordinate-3d') {
          var graphDiv = document.getElementById('ex-3d-' + _graphId);
          if (graphDiv) {
            if (typeof window.render3DScene === 'function') {
              try {
                var resolvedParams = qData.question.params || {};
                var pts = vis.points || [];
            var pointData = [];
            
            function resolveCoord(expr) {
              var s = String(expr);
              for (var p in resolvedParams) {
                s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), resolvedParams[p]);
              }
              var n = parseFloat(s);
              if (!isNaN(n) && String(n) === s.trim()) return n;
              try {
                var val = Function('return (' + s + ')')();
                if (!isNaN(val)) return val;
              } catch(e) {}
              return parseFloat(s) || 0;
            }
            
            for (var pi = 0; pi < pts.length; pi++) {
              pointData.push({
                x: resolveCoord(pts[pi].x),
                y: resolveCoord(pts[pi].y),
                z: resolveCoord(pts[pi].z),
                label: pts[pi].label || ''
              });
            }
            
            var arrowData = (vis.arrows || []).map(function(a) {
              return { from: a.from, to: a.to, label: a.label || '' };
            });
            
            window.render3DScene(graphDiv, pointData, arrowData);
            _graphId++;
              } catch(e) {
                console.error('Three.js render failed:', e);
                graphDiv.innerHTML = '<p style="color:#f85149;padding:12px;">3D render error: ' + e.message + '</p>';
              }
            } else {
              console.warn('window.render3DScene not available');
              graphDiv.innerHTML = '<p style="color:#888;padding:12px;">3D renderer loading...</p>';
            }
          }
        }
      }
      
      document.getElementById('ex-answer').focus();
    }
  }

  // Track hint level per question
  var _hintLevel = 0;
  var _graphId = 0;

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
      case 'unit-circle':
        return _renderUnitCircle(visual, params);
      case 'vector-2d':
        return _renderVector2D(visual, params);
      case 'reflection':
        return _renderReflection(visual, params);
      case 'fov-cone':
        return _renderFOVCone(visual, params);
      case 'coordinate-3d':
        return '<div class="ex-visual-wrap"><div class="ex-3d-graph" id="ex-3d-' + _graphId + '"></div></div>';
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
    var arcAngle = Math.atan2(y3-y1, x3-x1);
    var arcEx = x1 + 18 * Math.cos(arcAngle);
    var arcEy = y1 + 18 * Math.sin(arcAngle);
    svg += '<path d="M' + (x1+18) + ',' + y1 + ' A18,18 0 0,1 ' + arcEx.toFixed(1) + ',' + arcEy.toFixed(1) + '" fill="none" stroke="var(--accent,#58a6ff)" stroke-width="1.5"/>';
    
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

  function _renderUnitCircle(vis, params) {
    function lbl(key) {
      if (!vis[key]) return '';
      var s = vis[key];
      for (var p in params) { s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), params[p]); }
      return s;
    }
    var angleVal = lbl('angle');
    var radiusVal = lbl('radius') || '1';
    var pointLabel = lbl('pointLabel');
    var cx = 140, cy = 100, r = 70;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:280px;display:block;margin:0 auto;">';
    // Axes
    svg += '<line x1="30" y1="' + cy + '" x2="250" y2="' + cy + '" stroke="var(--text-muted)" stroke-width="0.8" stroke-dasharray="4 3"/>';
    svg += '<line x1="' + cx + '" y1="10" x2="' + cx + '" y2="190" stroke="var(--text-muted)" stroke-width="0.8" stroke-dasharray="4 3"/>';
    // Circle
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="rgba(88,166,255,0.05)" stroke="var(--text-secondary)" stroke-width="1.5"/>';
    // Radius line
    var ang = parseFloat(angleVal) || 45;
    var rad = ang * Math.PI / 180;
    var px = cx + r * Math.cos(rad);
    var py = cy - r * Math.sin(rad);
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + px + '" y2="' + py + '" stroke="var(--accent,#58a6ff)" stroke-width="1.5"/>';
    svg += '<circle cx="' + px + '" cy="' + py + '" r="3" fill="var(--accent,#58a6ff)"/>';
    // Angle arc from 0 to angle
    var arcR = 20;
    var ax = cx + arcR, ay = cy;
    svg += '<path d="M' + ax + ',' + ay + ' A' + arcR + ',' + arcR + ' 0 ' + (ang > 180 ? 1 : 0) + ',1 ' + (cx + arcR*Math.cos(rad)) + ',' + (cy - arcR*Math.sin(rad)) + '" fill="none" stroke="var(--accent,#58a6ff)" stroke-width="1.2"/>';
    // Labels
    if (angleVal) svg += '<text x="' + (cx+arcR+10) + '" y="' + (cy-arcR/2) + '" fill="var(--accent,#58a6ff)" font-size="12" font-family="sans-serif" font-style="italic">' + angleVal + '°</text>';
    if (pointLabel) svg += '<text x="' + (px+8) + '" y="' + (py-6) + '" fill="var(--text-primary)" font-size="11" font-family="sans-serif">' + pointLabel + '</text>';
    svg += '<text x="' + (cx+5) + '" y="' + (cy-5) + '" fill="var(--text-muted)" font-size="10" font-family="sans-serif">' + radiusVal + '</text>';
    svg += '</svg>';
    return svg;
  }

  function _renderVector2D(vis, params) {
    function lbl(key) {
      if (!vis[key]) return '';
      var s = vis[key];
      for (var p in params) { s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), params[p]); }
      return s;
    }
    var fromLabel = lbl('fromLabel') || 'A';
    var toLabel = lbl('toLabel') || 'B';
    var resultLabel = lbl('resultLabel');
    var sw = 280, sh = 160;
    // Fixed origin near center-left
    var ox = 60, oy = 100;
    var tx = 210, ty = 50;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + sw + ' ' + sh + '" style="width:100%;max-width:280px;display:block;margin:0 auto;">';
    // Grid hint
    svg += '<rect x="20" y="20" width="' + (sw-40) + '" height="' + (sh-40) + '" fill="none" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3 3" rx="4"/>';
    // Arrow
    svg += '<line x1="' + ox + '" y1="' + oy + '" x2="' + tx + '" y2="' + ty + '" stroke="var(--accent,#58a6ff)" stroke-width="2"/>';
    svg += '<polygon points="' + (tx-6) + ',' + (ty-3) + ' ' + tx + ',' + ty + ' ' + (tx-3) + ',' + (ty-6) + '" fill="var(--accent,#58a6ff)"/>';
    // Component lines
    svg += '<line x1="' + ox + '" y1="' + oy + '" x2="' + tx + '" y2="' + oy + '" stroke="var(--text-muted)" stroke-width="0.8" stroke-dasharray="4 2"/>';
    svg += '<line x1="' + tx + '" y1="' + oy + '" x2="' + tx + '" y2="' + ty + '" stroke="var(--text-muted)" stroke-width="0.8" stroke-dasharray="4 2"/>';
    // Points
    svg += '<circle cx="' + ox + '" cy="' + oy + '" r="3" fill="var(--text-primary)"/>';
    svg += '<circle cx="' + tx + '" cy="' + ty + '" r="3" fill="var(--accent,#58a6ff)"/>';
    // Labels
    svg += '<text x="' + (ox-10) + '" y="' + (oy+16) + '" fill="var(--text-primary)" font-size="12" font-family="sans-serif" font-weight="600">' + fromLabel + '</text>';
    svg += '<text x="' + (tx+6) + '" y="' + (ty-6) + '" fill="var(--accent,#58a6ff)" font-size="12" font-family="sans-serif" font-weight="600">' + toLabel + '</text>';
    if (resultLabel) svg += '<text x="' + ((ox+tx)/2) + '" y="' + ((oy+ty)/2-8) + '" text-anchor="middle" fill="var(--accent,#58a6ff)" font-size="11" font-family="sans-serif">' + resultLabel + '</text>';
    svg += '</svg>';
    return svg;
  }

  function _renderReflection(vis, params) {
    function lbl(key) {
      if (!vis[key]) return '';
      var s = vis[key];
      for (var p in params) { s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), params[p]); }
      return s;
    }
    var incomingLabel = lbl('incoming') || 'V';
    var outgoingLabel = lbl('outgoing') || 'R';
    var normalLabel = lbl('normal') || 'N';
    var sw = 280, sh = 170;
    var wx1 = 60, wy1 = 120, wx2 = 220, wy2 = 120; // wall
    var mx = 140, my = 120; // hit point
    var ix = 100, iy = 40;  // incoming from
    var ox = 185, oy = 40;  // outgoing to
    var nx = mx, ny = my - 50; // normal upward
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + sw + ' ' + sh + '" style="width:100%;max-width:280px;display:block;margin:0 auto;">';
    // Wall
    svg += '<line x1="' + wx1 + '" y1="' + wy1 + '" x2="' + wx2 + '" y2="' + wy2 + '" stroke="var(--text-primary)" stroke-width="2.5"/>';
    // Normal (dashed)
    svg += '<line x1="' + mx + '" y1="' + my + '" x2="' + nx + '" y2="' + ny + '" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="5 3"/>';
    // Incoming arrow
    svg += '<line x1="' + ix + '" y1="' + iy + '" x2="' + mx + '" y2="' + my + '" stroke="#f85149" stroke-width="1.8"/>';
    svg += '<polygon points="' + (mx-5) + ',' + (my-3) + ' ' + mx + ',' + my + ' ' + (mx-3) + ',' + (my-5) + '" fill="#f85149"/>';
    // Outgoing arrow
    svg += '<line x1="' + mx + '" y1="' + my + '" x2="' + ox + '" y2="' + oy + '" stroke="#3fb950" stroke-width="1.8"/>';
    svg += '<polygon points="' + (ox-5) + ',' + (oy-3) + ' ' + ox + ',' + oy + ' ' + (ox-3) + ',' + (oy-5) + '" fill="#3fb950"/>';
    // Labels
    svg += '<text x="' + (ix-26) + '" y="' + (iy+4) + '" fill="#f85149" font-size="11" font-family="sans-serif" font-weight="600">' + incomingLabel + '</text>';
    svg += '<text x="' + (ox+4) + '" y="' + (oy-4) + '" fill="#3fb950" font-size="11" font-family="sans-serif" font-weight="600">' + outgoingLabel + '</text>';
    svg += '<text x="' + (nx+4) + '" y="' + (ny+4) + '" fill="var(--text-muted)" font-size="11" font-family="sans-serif">' + normalLabel + '</text>';
    svg += '</svg>';
    return svg;
  }

  function _renderFOVCone(vis, params) {
    function lbl(key) {
      if (!vis[key]) return '';
      var s = vis[key];
      for (var p in params) { s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), params[p]); }
      return s;
    }
    var sw = 280, sh = 180;
    var cx = 80, cy = 100; // guard position
    var fx = 200, fy = 100; // forward direction endpoint
    var coneAngle = parseFloat(lbl('coneAngle')) || 30;
    var halfRad = coneAngle * Math.PI / 360;
    var r = 140;
    var targetLabel = lbl('targetLabel');
    var tx = parseFloat(lbl('tx')) || 190;
    var ty = parseFloat(lbl('ty')) || 60;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + sw + ' ' + sh + '" style="width:100%;max-width:280px;display:block;margin:0 auto;">';
    // FOV cone
    var dx = fx - cx, dy = fy - cy;
    var baseAngle = Math.atan2(dy, dx);
    var a1 = baseAngle - halfRad, a2 = baseAngle + halfRad;
    svg += '<path d="M' + cx + ',' + cy + ' L' + (cx+r*Math.cos(a1)) + ',' + (cy+r*Math.sin(a1)) + ' A' + r + ',' + r + ' 0 0,1 ' + (cx+r*Math.cos(a2)) + ',' + (cy+r*Math.sin(a2)) + ' Z" fill="rgba(88,166,255,0.06)" stroke="var(--accent,#58a6ff)" stroke-width="1" stroke-dasharray="6 3"/>';
    // Forward line
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + fx + '" y2="' + fy + '" stroke="var(--accent,#58a6ff)" stroke-width="1.5"/>';
    svg += '<polygon points="' + (fx-6) + ',' + (fy-3) + ' ' + fx + ',' + fy + ' ' + (fx-3) + ',' + (fy-6) + '" fill="var(--accent,#58a6ff)"/>';
    // Guard
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="5" fill="var(--text-primary)"/>';
    // Target
    svg += '<circle cx="' + tx + '" cy="' + ty + '" r="4" fill="' + (lbl('inCone') === 'yes' ? '#3fb950' : '#f85149') + '"/>';
    if (targetLabel) svg += '<text x="' + (tx+8) + '" y="' + (ty-6) + '" fill="var(--text-primary)" font-size="11" font-family="sans-serif">' + targetLabel + '</text>';
    svg += '<text x="' + (cx-12) + '" y="' + (cy+16) + '" fill="var(--text-primary)" font-size="11" font-family="sans-serif">Guard</text>';
    svg += '</svg>';
    return svg;
  }

  function _renderCoordinate3D(vis, params) {
    // ── Projection ──────────────────────────────────────────────
    // UE convention: X=forward (red), Y=right (green), Z=up (blue)
    // Oblique projection with scale for readability
    var KS = 6.5;  // pixels per unit
    var ox = 250, oy = 240;  // origin in SVG space
    
    function project(x, y, z) {
      var sx = ox + (x - y) * KS * 0.7;
      var sy = oy - z * KS - (x + y) * KS * 0.35;
      return [sx, sy];
    }
    
    var sw = 500, sh = 400;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + sw + ' ' + sh + '" style="width:100%;max-width:520px;height:auto;display:block;margin:0 auto;">';
    
    // ── Helper: resolve coordinate expressions ──────────────────
    function resolveCoord(expr) {
      var s = String(expr);
      for (var p in params) {
        s = s.replace(new RegExp('\\{\\{' + p + '\\}\\}', 'g'), params[p]);
      }
      var n = parseFloat(s);
      if (!isNaN(n) && String(n) === s.trim()) return n;
      try {
        var val = Function('return (' + s + ')')();
        if (!isNaN(val)) return val;
      } catch(e) {}
      return parseFloat(s) || 0;
    }
    
    // ── Grid on all 3 planes (XZ=ground, XY=side, YZ=side) ─────
    var gridRange = 12, gridStep = 2;
    for (var g = -gridRange; g <= gridRange; g += gridStep) {
      if (g === 0) continue;
      // XZ plane — horizontal grid lines running parallel to X
      var a = project(-gridRange, g, 0), b = project(gridRange, g, 0);
      svg += '<line x1="' + a[0].toFixed(0) + '" y1="' + a[1].toFixed(0) + '" x2="' + b[0].toFixed(0) + '" y2="' + b[1].toFixed(0) + '" stroke="var(--border)" stroke-width="0.4" opacity="0.6"/>';
      // XZ plane — lines running parallel to Y
      a = project(g, -gridRange, 0); b = project(g, gridRange, 0);
      svg += '<line x1="' + a[0].toFixed(0) + '" y1="' + a[1].toFixed(0) + '" x2="' + b[0].toFixed(0) + '" y2="' + b[1].toFixed(0) + '" stroke="var(--border)" stroke-width="0.4" opacity="0.6"/>';
    }
    
    // ── Axes (positive direction only — drawn as solid rays) ────
    var axLen = 12;
    var orig = project(0, 0, 0);
    var xPos = project(axLen, 0, 0), xNeg = project(-axLen, 0, 0);
    var yPos = project(0, axLen, 0), yNeg = project(0, -axLen, 0);
    var zPos = project(0, 0, axLen), zNeg = project(0, 0, -axLen);
    
    // Negative half-axes (dashed, subtle)
    svg += '<line x1="' + orig[0].toFixed(0) + '" y1="' + orig[1].toFixed(0) + '" x2="' + xNeg[0].toFixed(0) + '" y2="' + xNeg[1].toFixed(0) + '" stroke="#f85149" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>';
    svg += '<line x1="' + orig[0].toFixed(0) + '" y1="' + orig[1].toFixed(0) + '" x2="' + yNeg[0].toFixed(0) + '" y2="' + yNeg[1].toFixed(0) + '" stroke="#3fb950" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>';
    svg += '<line x1="' + orig[0].toFixed(0) + '" y1="' + orig[1].toFixed(0) + '" x2="' + zNeg[0].toFixed(0) + '" y2="' + zNeg[1].toFixed(0) + '" stroke="#58a6ff" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>';
    
    // Positive half-axes (solid, thick)
    svg += '<line x1="' + orig[0].toFixed(0) + '" y1="' + orig[1].toFixed(0) + '" x2="' + xPos[0].toFixed(0) + '" y2="' + xPos[1].toFixed(0) + '" stroke="#f85149" stroke-width="2.5" stroke-linecap="round"/>';
    svg += '<line x1="' + orig[0].toFixed(0) + '" y1="' + orig[1].toFixed(0) + '" x2="' + yPos[0].toFixed(0) + '" y2="' + yPos[1].toFixed(0) + '" stroke="#3fb950" stroke-width="2.5" stroke-linecap="round"/>';
    svg += '<line x1="' + orig[0].toFixed(0) + '" y1="' + orig[1].toFixed(0) + '" x2="' + zPos[0].toFixed(0) + '" y2="' + zPos[1].toFixed(0) + '" stroke="#58a6ff" stroke-width="2.5" stroke-linecap="round"/>';
    
    // ── Tick marks and numbering on each positive axis ──────────
    for (var t = 2; t <= 12; t += 2) {
      var tickSize = 4;
      // X axis ticks
      var tx = project(t, 0, 0);
      svg += '<line x1="' + tx[0].toFixed(0) + '" y1="' + (tx[1]-tickSize).toFixed(0) + '" x2="' + tx[0].toFixed(0) + '" y2="' + (tx[1]+tickSize).toFixed(0) + '" stroke="#f85149" stroke-width="1.2"/>';
      svg += '<text x="' + tx[0].toFixed(0) + '" y="' + (tx[1]+14).toFixed(0) + '" text-anchor="middle" fill="#f85149" font-size="9" font-family="monospace">' + t + '</text>';
      
      // Y axis ticks
      var ty = project(0, t, 0);
      svg += '<line x1="' + (ty[0]-tickSize).toFixed(0) + '" y1="' + ty[1].toFixed(0) + '" x2="' + (ty[0]+tickSize).toFixed(0) + '" y2="' + ty[1].toFixed(0) + '" stroke="#3fb950" stroke-width="1.2"/>';
      svg += '<text x="' + (ty[0]-10).toFixed(0) + '" y="' + (ty[1]+12).toFixed(0) + '" text-anchor="middle" fill="#3fb950" font-size="9" font-family="monospace">' + t + '</text>';
      
      // Z axis ticks
      var tz = project(0, 0, t);
      svg += '<line x1="' + (tz[0]-tickSize).toFixed(0) + '" y1="' + tz[1].toFixed(0) + '" x2="' + (tz[0]+tickSize).toFixed(0) + '" y2="' + tz[1].toFixed(0) + '" stroke="#58a6ff" stroke-width="1.2"/>';
      svg += '<text x="' + (tz[0]-12).toFixed(0) + '" y="' + (tz[1]+3).toFixed(0) + '" text-anchor="end" fill="#58a6ff" font-size="9" font-family="monospace">' + t + '</text>';
    }
    
    // ── Axis labels at tips ─────────────────────────────────────
    svg += '<text x="' + (xPos[0]+8).toFixed(0) + '" y="' + (xPos[1]-6).toFixed(0) + '" fill="#f85149" font-size="14" font-family="sans-serif" font-weight="800">X</text>';
    svg += '<text x="' + (yPos[0]+8).toFixed(0) + '" y="' + (yPos[1]-6).toFixed(0) + '" fill="#3fb950" font-size="14" font-family="sans-serif" font-weight="800">Y</text>';
    svg += '<text x="' + (zPos[0]+8).toFixed(0) + '" y="' + (zPos[1]-6).toFixed(0) + '" fill="#58a6ff" font-size="14" font-family="sans-serif" font-weight="800">Z</text>';
    
    // ── Origin dot ──────────────────────────────────────────────
    svg += '<circle cx="' + orig[0].toFixed(0) + '" cy="' + orig[1].toFixed(0) + '" r="4.5" fill="var(--text-primary)"/>';
    
    // ── Points ──────────────────────────────────────────────────
    var points = vis.points || [];
    var pointCoords = [];
    
    for (var pi = 0; pi < points.length; pi++) {
      var pt = points[pi];
      var px = resolveCoord(pt.x);
      var py = resolveCoord(pt.y);
      var pz = resolveCoord(pt.z);
      var proj = project(px, py, pz);
      pointCoords.push({x: px, y: py, z: pz, sx: proj[0], sy: proj[1], label: pt.label || ''});
    }
    
    // ── Drop lines to ground plane (XZ) for each point ──────────
    for (var di = 0; di < pointCoords.length; di++) {
      var dp = pointCoords[di];
      if (dp.z !== 0) {
        var ground = project(dp.x, dp.y, 0);
        svg += '<line x1="' + dp.sx.toFixed(0) + '" y1="' + dp.sy.toFixed(0) + '" x2="' + ground[0].toFixed(0) + '" y2="' + ground[1].toFixed(0) + '" stroke="var(--text-muted)" stroke-width="0.6" stroke-dasharray="3 3" opacity="0.5"/>';
        // Small dot on ground
        svg += '<circle cx="' + ground[0].toFixed(0) + '" cy="' + ground[1].toFixed(0) + '" r="1.5" fill="var(--text-muted)" opacity="0.5"/>';
      }
    }
    
    // ── Arrows between points ───────────────────────────────────
    var arrows = vis.arrows || [];
    for (var ai = 0; ai < arrows.length; ai++) {
      var arr = arrows[ai];
      var from = pointCoords[arr.from];
      var to = pointCoords[arr.to];
      if (!from || !to) continue;
      
      // Main vector arrow (thick gold)
      svg += '<line x1="' + from.sx.toFixed(0) + '" y1="' + from.sy.toFixed(0) + '" x2="' + to.sx.toFixed(0) + '" y2="' + to.sy.toFixed(0) + '" stroke="var(--accent,#d2991d)" stroke-width="3"/>';
      
      // Arrowhead
      var adx = to.sx - from.sx, ady = to.sy - from.sy;
      var alen = Math.sqrt(adx*adx + ady*ady);
      if (alen > 0.5) {
        var ux = adx / alen, uy = ady / alen;
        var ahs = 11;
        svg += '<polygon points="' + (to.sx - ux*ahs + uy*5).toFixed(0) + ',' + (to.sy - uy*ahs - ux*5).toFixed(0) + ' ' + to.sx.toFixed(0) + ',' + to.sy.toFixed(0) + ' ' + (to.sx - ux*ahs - uy*5).toFixed(0) + ',' + (to.sy - uy*ahs + ux*5).toFixed(0) + '" fill="var(--accent,#d2991d)"/>';
      }
      
      if (arr.label) {
        var mx = (from.sx + to.sx) / 2, my = (from.sy + to.sy) / 2 - 12;
        svg += '<text x="' + mx.toFixed(0) + '" y="' + my.toFixed(0) + '" text-anchor="middle" fill="var(--accent,#d2991d)" font-size="13" font-family="sans-serif" font-weight="700">' + arr.label + '</text>';
      }
    }
    
    // ── Point dots and labels ───────────────────────────────────
    for (var pi2 = 0; pi2 < pointCoords.length; pi2++) {
      var pc = pointCoords[pi2];
      var isB = pi2 === 1; // highlight the second point
      var dotColor = isB ? 'var(--accent,#d2991d)' : 'var(--text-primary)';
      
      svg += '<circle cx="' + pc.sx.toFixed(0) + '" cy="' + pc.sy.toFixed(0) + '" r="6" fill="' + dotColor + '" stroke="var(--bg-primary)" stroke-width="2"/>';
      
      if (pc.label) {
        svg += '<text x="' + (pc.sx+10).toFixed(0) + '" y="' + (pc.sy-8).toFixed(0) + '" fill="' + dotColor + '" font-size="14" font-family="sans-serif" font-weight="800">' + pc.label + '</text>';
      }
      
      // Coordinate annotation
      var coordStr = '(' + pc.x.toFixed(0) + ', ' + pc.y.toFixed(0) + ', ' + pc.z.toFixed(0) + ')';
      svg += '<text x="' + (pc.sx+10).toFixed(0) + '" y="' + (pc.sy+10).toFixed(0) + '" fill="var(--text-muted)" font-size="11" font-family="monospace">' + coordStr + '</text>';
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
    endAndGoBack: endAndGoBack,
    _insertSymbol: function(symbol) {
      var ta = document.getElementById('ex-scratch');
      if (!ta) return;
      var start = ta.selectionStart;
      var end = ta.selectionEnd;
      var text = ta.value;
      ta.value = text.substring(0, start) + symbol + text.substring(end);
      ta.selectionStart = ta.selectionEnd = start + symbol.length;
      ta.focus();
    }
  };
})();

// Provide accessor for internal state
ExercisesEngine._getInternalTopic = function() { return 'vectors'; };
