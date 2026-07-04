const HistoryView = {
  render(container, folderId, noteName) {
    const attempts = Storage.getAttempts(folderId, noteName);
    const folder = FOLDERS.find(f => f.id === folderId);

    var html = '<a href="javascript:void(0)" class="back-link" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '/note/' + encodeURIComponent(noteName) + '/quiz\')">\u2190 Back</a>';
    html += '<h2 class="page-title">\u{1F4CA} Score History</h2>';
    html += '<p style="color:var(--text-secondary);margin-bottom:1.5rem;">' + noteName + '</p>';

    if (attempts.length === 0) {
      html += '<p>No attempts yet. <a href="javascript:void(0)" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '/note/' + encodeURIComponent(noteName) + '/quiz\')">Take the quiz</a></p>';
    } else {
      html += '<div class="history-list">';
      var reversed = attempts.slice().reverse();
      for (var i = 0; i < reversed.length; i++) {
        var a = reversed[i];
        var d = new Date(a.date);
        var color = a.percentage >= 80 ? 'var(--success)' : a.percentage >= 50 ? 'var(--warning)' : 'var(--danger)';
        var uid = 'hdet_' + folderId.replace(/[^a-z0-9]/g,'') + '_' + i;

        // Answer detail HTML — built now, shown on click
        var detailHtml = '';
        if (a.answers && a.answers.length > 0) {
          detailHtml = '<div id="' + uid + '" class="history-detail" style="display:none;">';
          for (var ai = 0; ai < a.answers.length; ai++) {
            var ans = a.answers[ai];
            var qNum = (typeof ans.questionIdx === 'number' ? ans.questionIdx + 1 : ai + 1);
            var qText = ans.questionText || ('Question ' + qNum);
            if (ans.correct) {
              detailHtml += '<div class="history-detail-row correct"><strong>Q' + qNum + ':</strong> ' + qText + '<br><span class="detail-answer">\u2705 ' + (ans.userAnswer || '') + '</span></div>';
            } else {
              detailHtml += '<div class="history-detail-row wrong"><strong>Q' + qNum + ':</strong> ' + qText + '<br><span class="detail-answer">\u274c Your answer: ' + (ans.userAnswer || '(blank)') + '</span><br><span class="detail-correct">Correct: ' + (ans.correctAnswer || '?') + '</span></div>';
            }
          }
          detailHtml += '</div>';
        }

        html +=
          '<div class="history-entry" onclick="var d=document.getElementById(\'' + uid + '\');d.style.display=d.style.display===\'none\'?\'\':\'none\'" style="cursor:pointer;">' +
            '<span style="flex:1;">\u25B6 ' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) + '</span>' +
            '<span class="history-time">' + Storage.formatTime(a.elapsed) + '</span>' +
            '<span style="color:' + color + ';font-weight:600;">' + a.score + '/' + a.total + '</span>' +
            '<span style="color:' + color + ';">' + a.percentage + '%</span>' +
          '</div>' +
          detailHtml;
      }
      html += '</div>';
      html += '<p style="margin-top:1rem;color:var(--text-secondary);font-size:0.85rem;">' + attempts.length + ' total attempt' + (attempts.length !== 1 ? 's' : '') + '</p>';
    }

    html +=
      '<div style="margin-top:1.5rem;">' +
        '<button class="btn btn-primary" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '/note/' + encodeURIComponent(noteName) + '/quiz\')">Take Quiz</button>' +
        '<button class="btn btn-outline btn-sm" style="margin-left:0.5rem;" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '\')">\u2190 Back to ' + (folder ? folder.name : 'Folder') + '</button>' +
      '</div>';

    container.innerHTML = html;
  },
};
