/*!
 * replacements <https://github.com/jonschlinkert/replacements>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var multiReplace = require('../');


describe('replacements:', function () {
  describe('object of replacement patterns', function () {
    it('should reduce the string to the final result', function () {
      var fixture = 'aaaaaaaaaaaaaaaaaaaaaaaa';
      var patterns = {pattern: /a/g, replacement: 'bbb'};
      var result = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      expect(multiReplace(fixture, patterns)).to.eql(result);
    });
  });

  describe('when `pattern` and `replacement` keys are missing', function () {
    it('should use keys as the `replacement` and values as the `pattern`', function () {
      var fixture = 'aaa';
      var patterns = {
        'a': 'b'
      };
      var result = 'baa'
      expect(multiReplace(fixture, patterns)).to.eql(result);
    });

    it('should use keys as the `replacement` and values as the `pattern`', function () {
      var fixture = 'aaabbbccc';
      var patterns = {
        'bbb': 'foo',
        'ccc': 'bar'
      };
      var result = 'aaafoobar'
      expect(multiReplace(fixture, patterns)).to.eql(result);
    });

    it('should use keys as the `replacement` and values as the `pattern`', function () {
      var fixture = 'aaabbbccc';
      var patterns = [
        {'bbb': 'foo'},
        {'ccc': 'bar',}
      ];
      var result = 'aaafoobar'
      expect(multiReplace(fixture, patterns)).to.eql(result);
    });
  });

  describe('when a function is used as the replacement', function () {
    it('should use the function on the given string', function () {
      var fixture = 'aaa';
      var patterns = {
        pattern: /a+/g,
        replacement: function(match) {
          return match.split('').map(function(str, i) {
            if (i === 0) {return 'b'; }
            if (i === 1) {return str.toUpperCase();}
            return str;
          }).join('');
        }
      };
      var result = 'bAa'
      expect(multiReplace(fixture, patterns)).to.eql(result);
    });
  });

  describe('array of replacement patterns', function () {
    it('should reduce the string to the final result', function () {
      var fixture = 'aaaaaaaaaaaaaaaaaaaaaaaa';
      var patterns = [
        {pattern: /a/g, replacement: 'bbb'},
        {pattern: /b/g, replacement: 'ccc'},
        {pattern: /c/g, replacement: 'ddd'},
        {pattern: /d/g, replacement: 'eee'},
        {pattern: /[e]+/g, replacement: '_DONE_'}
      ];
      expect(multiReplace(fixture, patterns)).to.eql('_DONE_');
    });
  });
});