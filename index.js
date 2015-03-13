/*!
 * replacements <https://github.com/jonschlinkert/replacements>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function replacements(str, val) {
  if (typeof str !== 'string') {
    throw new TypeError('replacements expects a string.');
  }

  var arr = arrayify(val);
  var len = arr.length, i = 0;
  while (len--) {
    var obj = arr[i++];
    str = str.replace(obj.pattern, obj.replacement);
  }
  return str;
};

function arrayify (val) {
  return !Array.isArray(val) ? [val] : val;
}
