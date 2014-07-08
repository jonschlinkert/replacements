/*!
 * replacements <https://github.com/jonschlinkert/replacements>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function replacements(str, arr) {
  var transformers = [];

  // normalize to an array
  arr = !Array.isArray(arr) ? [arr] : arr;
  arr.forEach(function(pair) {
    if (!pair.hasOwnProperty('pattern')
      && !pair.hasOwnProperty('replacement')) {
      var keys = Object.keys(pair);
      keys.forEach(function (key) {
        var value = pair[key];
        transformers.push({
          pattern: key,
          replacement: value
        });
      });
    } else {
      transformers.push(pair);
    }
  });

  return transformers.reduce(function(acc, obj) {
    return acc.replace(obj.pattern, obj.replacement);
  }, str);
};