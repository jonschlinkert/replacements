/*!
 * replacements <https://github.com/jonschlinkert/replacements>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function replacements(str, arr) {
  // normalize to an array
  arr = !Array.isArray(arr) ? [arr] : arr;

  return arr.reduce(function(acc, obj) {
    return acc.replace(obj.pattern, obj.replacement);
  }, str);
};