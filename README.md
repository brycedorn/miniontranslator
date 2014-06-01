Minion Translator, demo of:

jQuery.miniTranslate
====================

A lightweight way to change words into other words.

bryce.io/minitranslate

## Features
 * WYSIWYG word-replacement translator
 * RegExp matching and jQuery replacement
 * Simple library in `mt-lib.js`:
  ```java
  var mt_lib = [
    {w : "Hello", r : "Goodbye"},
    {w : "World", r : "Mars"}
  ];
  ```

 * Dynamic input translation:
  ```html
  <input id="mt-input"/>
  <input id="mt-output"/>
  ```
 * Static content translation:

  ```html
  <div id="mt-translate"/>
  ```

 * Case insensitive up to input word length:
   * hElLo => wOrLd
   * bYe => gOodbye


 * Dumb punctuation, currently appends to translation

## Installation

#### npm
  `npm install minitranslate`

#### cdnjs
  http://cdnjs.com/libraries/minitranslate
