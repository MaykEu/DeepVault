/**
 * code-highlight.js — C++ Syntax Highlighter for DeepVault
 * 
 * Provides {html,esc}ough token-by-token C++ lexing and produces
 * HTML with themed syntax classes. Also provides HTML entity escaping.
 * 
 * Dependencies: none (pure JavaScript, no external modules)
 * 
 * Token types:
 *   pp    — preprocessor directives (#include, #define, etc.)
 *   cm    — comments (// line and slash-star block star-slash)
 *   st    — string literals ("..." and '...')
 *   nu    — numeric literals (decimal, hex 0x, binary 0b)
 *   kw    — C++ keywords (if, for, class, etc.)
 *   ty    — type names (int, float, FVector, UObject, etc.)
 *   fn    — function names (FMath::*, std::*)
 *   pl    — plain text (operators, punctuation, identifiers)
 */

var CodeHighlight = (function() {
  'use strict';

  /** C++ keywords — mapped to syn-kw class */
  var KEYWORDS = [
    'int', 'float', 'double', 'char', 'bool', 'void', 'auto', 'const',
    'static', 'unsigned', 'signed', 'short', 'long', 'enum', 'class',
    'struct', 'union', 'namespace', 'template', 'typename', 'using',
    'typedef', 'virtual', 'override', 'final', 'explicit', 'noexcept',
    'constexpr', 'if', 'else', 'for', 'while', 'do', 'switch', 'case',
    'break', 'continue', 'return', 'goto', 'try', 'catch', 'throw',
    'new', 'delete', 'sizeof', 'alignof', 'decltype', 'static_cast',
    'dynamic_cast', 'const_cast', 'reinterpret_cast', 'public',
    'private', 'protected', 'friend', 'operator', 'true', 'false',
    'nullptr', 'this'
  ];

  /** UE and C++ type names — mapped to syn-type class */
  var TYPES = [
    'uint8_t', 'int8_t', 'uint16_t', 'int16_t', 'uint32_t', 'int32_t',
    'uint64_t', 'int64_t', 'size_t', 'ptrdiff_t',
    'FVector', 'FQuat', 'FRotator', 'FTransform', 'FMatrix',
    'FString', 'FName', 'FText',
    'TArray', 'TMap', 'TSet', 'TObjectPtr', 'TSharedPtr',
    'TUniquePtr', 'TWeakObjectPtr',
    'AActor', 'UObject', 'UClass'
  ];

  var KW_SET = {};
  var TY_SET = {};
  for (var i = 0; i < KEYWORDS.length; i++) KW_SET[KEYWORDS[i]] = true;
  for (var i = 0; i < TYPES.length; i++) TY_SET[TYPES[i]] = true;

  /**
   * Tokenize a C++ source string and return an array of {type, value} objects.
   * Minified tokenizer extracted from LearnView.hicpp().
   * 
   * @param {string} code - Raw C++ source code
   * @returns {Array<{t: string, v: string}>}
   */
  function tokenize(code) {
    var tokens = [];
    var i = 0;

    while (i < code.length) {
      // ── Preprocessor directive ──────────────────────────
      if (code[i] === '#' && (i === 0 || code[i - 1] === '\n')) {
        var end = i;
        while (end < code.length && code[end] !== '\n') end++;
        tokens.push({ t: 'pp', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Line comment // ─────────────────────────────────
      if (code[i] === '/' && code[i + 1] === '/') {
        var end = i;
        while (end < code.length && code[end] !== '\n') end++;
        tokens.push({ t: 'cm', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Block comment /* */ ─────────────────────────────
      if (code[i] === '/' && code[i + 1] === '*') {
        var end = code.indexOf('*/', i + 2);
        if (end === -1) end = code.length;
        else end += 2;
        tokens.push({ t: 'cm', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── String literal "..." ────────────────────────────
      if (code[i] === '"') {
        var end = i + 1;
        while (end < code.length && code[end] !== '"') {
          if (code[end] === '\\') end++; // skip escape
          end++;
        }
        end++; // closing quote
        tokens.push({ t: 'st', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Char literal '...' ──────────────────────────────
      if (code[i] === "'") {
        var end = i + 1;
        while (end < code.length && code[end] !== "'") {
          if (code[end] === '\\') end++;
          end++;
        }
        end++;
        tokens.push({ t: 'st', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Binary literal 0b... ────────────────────────────
      if (code[i] === '0' && code[i + 1] === 'b') {
        var end = i + 2;
        while (end < code.length && /[01]/.test(code[end])) end++;
        tokens.push({ t: 'nu', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Hex literal 0x... ───────────────────────────────
      if (code[i] === '0' && (code[i + 1] === 'x' || code[i + 1] === 'X')) {
        var end = i + 2;
        while (end < code.length && /[0-9a-fA-F]/.test(code[end])) end++;
        tokens.push({ t: 'nu', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Numeric literal ─────────────────────────────────
      if (/[0-9]/.test(code[i]) && (i === 0 || !/[a-zA-Z_]/.test(code[i - 1]))) {
        var end = i;
        while (end < code.length && /[0-9.]/.test(code[end])) end++;
        tokens.push({ t: 'nu', v: code.substring(i, end) });
        i = end;
        continue;
      }

      // ── Identifier or keyword ───────────────────────────
      if (/[a-zA-Z_]/.test(code[i])) {
        var end = i;
        while (end < code.length && /[a-zA-Z0-9_]/.test(code[end])) end++;
        var word = code.substring(i, end);
        var type = 'id';

        if (KW_SET[word]) type = 'kw';
        else if (TY_SET[word]) type = 'ty';
        else if (word.indexOf('std::') === 0) type = 'ty';
        else if (word.indexOf('FMath::') === 0) type = 'fn';

        tokens.push({ t: type, v: word });
        i = end;
        continue;
      }

      // ── Plain character (operator, punctuation, whitespace) ──
      tokens.push({ t: 'pl', v: code[i] });
      i++;
    }

    return tokens;
  }

  /**
   * Convert tokens to HTML with syntax-highlighting span classes.
   * 
   * @param {string} code - Raw C++ source code
   * @returns {string} HTML string with <span class="syn-*"> wrapping
   */
  function highlight(code) {
    var tokens = tokenize(code);
    var out = '';

    for (var t = 0; t < tokens.length; t++) {
      var tok = tokens[t];
      var cssClass = '';

      switch (tok.t) {
        case 'kw': cssClass = 'syn-kw';      break;
        case 'ty': cssClass = 'syn-type';    break;
        case 'fn': cssClass = 'syn-func';    break;
        case 'nu': cssClass = 'syn-num';     break;
        case 'st': cssClass = 'syn-string';  break;
        case 'cm': cssClass = 'syn-comment'; break;
        case 'pp': cssClass = 'syn-pp';      break;
      }

      if (cssClass) {
        out += '<span class="' + cssClass + '">' + htmlEscape(tok.v) + '</span>';
      } else {
        out += htmlEscape(tok.v);
      }
    }

    return out;
  }

  /**
   * Escape HTML entities: < → &lt;, > → &gt;
   * 
   * @param {string} s - Raw text
   * @returns {string} HTML-safe text
   */
  function htmlEscape(s) {
    return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ── Public API ──────────────────────────────────────────
  return {
    /** Tokenize C++ code (for testing/debugging) */
    tokenize: tokenize,
    /** Full C++ → HTML syntax highlighted output */
    highlight: highlight,
    /** Escape HTML entities */
    escape: htmlEscape
  };

})();

// Backward compatibility aliases for code that uses LearnView methods
if (typeof LearnView !== 'undefined') {
  LearnView.hicpp = CodeHighlight.highlight;
  LearnView.esc = CodeHighlight.escape;
}
