/**
 * wiki-link.js — Wiki-Link Resolution for DeepVault
 * 
 * Processes [[...]] wiki links in markdown and resolves them to HTML.
 * Handles three link formats:
 *   1. [[Note Name]]           — bare link to a note in the same vault
 *   2. [[Note Name|Display]]   — link with custom display text
 *   3. [[path/Note Name]]      — relative path to note in another folder
 * 
 * Resolution order:
 *   1. Check NOTES_CONTENT (regular learning notes)
 *   2. Check REFERENCE (glossary, guide, learning paths)
 *   3. Fall back to "coming soon" placeholder
 * 
 * Dependencies: NOTES_CONTENT, REFERENCE (from data.js), router (global)
 */

var WikiLink = (function() {
  'use strict';

  /**
   * Extract the canonical note name from a wiki link target.
   * Strips path prefixes, aliases, and heading fragments.
   * 
   * Examples:
   *   "Note Name"                     -> "Note Name"
   *   "path/Note Name|Display"        -> "Note Name"  
   *   "../folder/04 — Topic#section"  -> "04 — Topic"
   * 
   * @param {string} raw - Raw wiki link content (between [[ and ]])
   * @returns {{ noteName: string, displayName: string }}
   */
  function parse(raw) {
    var parts = raw.split('|');
    var target = parts[0].trim();
    var displayName = parts.length > 1 ? parts.slice(1).join('|') : raw;

    // Strip path: everything before the last /
    var noteName = target.replace(/^.*\//, '');
    // Strip relative path prefix like ../../folder/
    noteName = noteName.replace(/^\.\.\/[^/]+\//, '');
    // Strip heading fragment
    noteName = noteName.split('#')[0].trim();

    return {
      noteName: noteName,
      displayName: displayName
    };
  }

  /**
   * Resolve a wiki link to its HTML representation.
   * 
   * @param {string} raw - Raw wiki link content (between [[ and ]])
   * @returns {string} HTML anchor tag or "coming soon" placeholder span
   */
  function resolve(raw) {
    var parsed = parse(raw);
    var cn = parsed.noteName;
    var displayName = parsed.displayName;

    if (typeof NOTES_CONTENT !== 'undefined' && NOTES_CONTENT[cn]) {
      var fld = NOTES_CONTENT[cn].folder || 'computer-systems';
      return '<a href="javascript:void(0)" class="wiki-link" onclick="event.preventDefault();router.navigate(\'#/folder/' +
        encodeURIComponent(fld) + '/note/' + encodeURIComponent(cn) + '/learn\')">' + displayName + '</a>';
    }

    if (typeof REFERENCE !== 'undefined' && REFERENCE && REFERENCE[cn]) {
      return '<a href="javascript:void(0)" class="wiki-link" onclick="event.preventDefault();router.navigate(\'#/reference/' +
        encodeURIComponent(cn) + '\')">' + displayName + '</a>';
    }

    return '<span class="wiki-link-missing">' + displayName + ' <small>(coming soon)</small></span>';
  }

  /**
   * Process ALL wiki links in a markdown string.
   * Replaces every [[...]] with resolved HTML.
   * 
   * @param {string} md - Markdown text containing wiki links
   * @returns {string} Markdown with wiki links replaced by HTML
   */
  function resolveAll(md) {
    return md.replace(/\[\[([^\]]+)\]\]/g, function(match, inner) {
      return resolve(inner);
    });
  }

  // ── Public API ──────────────────────────────────────────
  return {
    /** Parse a wiki link target into {noteName, displayName} */
    parse: parse,
    /** Resolve a single wiki link target to HTML */
    resolve: resolve,
    /** Process all [[...]] links in a markdown string */
    resolveAll: resolveAll
  };

})();
