var SearchIndex = [];
var SearchBuilt = false;

function buildSearchIndex() {
  if (SearchBuilt) return;
  SearchBuilt = true;
  // Index note titles and content
  for (var fid in NOTES_CONTENT) {
    if (!NOTES_CONTENT.hasOwnProperty(fid)) continue;
    var note = NOTES_CONTENT[fid];
    if (!note || !note.content) continue;
    // Index the note title
    SearchIndex.push({ note: fid, text: fid.toLowerCase(), type: 'title' });
    // Index headings from content
    var headings = note.content.match(/^#{1,3} .+$/gm) || [];
    for (var h = 0; h < headings.length; h++) {
      var text = headings[h].replace(/^#+\s*/, '');
      SearchIndex.push({ note: fid, text: text.toLowerCase(), type: 'heading' });
    }
    // Index full content (first 2000 chars for performance)
    var plain = note.content.replace(/```[\s\S]*?```/g, '').replace(/[#*`\[\]()>|_~]/g, ' ').substring(0, 2000);
    SearchIndex.push({ note: fid, text: plain.toLowerCase(), type: 'content' });
  }
}

function searchNotes(query) {
  buildSearchIndex();
  if (!query || query.length < 2) return [];
  var q = query.toLowerCase();
  var results = [];
  var seen = {};
  for (var i = 0; i < SearchIndex.length; i++) {
    var item = SearchIndex[i];
    if (item.text.indexOf(q) === -1) continue;
    if (seen[item.note]) continue;
    seen[item.note] = true;
    // Find the matching snippet
    var idx = item.text.indexOf(q);
    var start = Math.max(0, idx - 30);
    var end = Math.min(item.text.length, idx + q.length + 50);
    var snippet = item.text.substring(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < item.text.length) snippet += '...';
    results.push({
      note: item.note,
      type: item.type,
      snippet: snippet,
      folder: (NOTES_CONTENT[item.note] && NOTES_CONTENT[item.note].folder) || 'computer-systems',
    });
  }
  return results.slice(0, 15);
}

function renderSearchResults(results) {
  var container = document.getElementById('search-results');
  if (!results.length) {
    container.innerHTML = '<div class="search-result-empty">No results</div>';
    container.classList.add('active');
    return;
  }
  var html = '';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    html += '<a class="search-result-item" href="javascript:void(0)" onclick="router.navigate(\'#/folder/' +
      encodeURIComponent(r.folder) + '/note/' + encodeURIComponent(r.note) + '/learn\');document.getElementById(\'search-results\').classList.remove(\'active\')">' +
      '<strong>' + r.note + '</strong>' +
      '<div class="search-result-note">' + r.snippet + '</div></a>';
  }
  container.innerHTML = html;
  container.classList.add('active');
}

document.addEventListener('click', function(e) {
  var sr = document.getElementById('search-results');
  var si = document.getElementById('search-input');
  if (sr && si && !sr.contains(e.target) && e.target !== si) {
    sr.classList.remove('active');
  }
});
