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