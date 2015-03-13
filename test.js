/* deps:mocha */
require('should');
var replacements = require('./');


describe('errors', function () {
  it('should throw on bad args:', function () {
    (function () {
      replacements();
    }).should.throw('replacements expects a string.');
  });
});

describe('object of replacement patterns', function () {
  it('should reduce the string to the final result', function () {
    var fixture = 'aaaaaaaaaaaaaaaaaaaaaaaa';
    var patterns = {pattern: /a/g, replacement: 'bbb'};
    var result = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
    replacements(fixture, patterns).should.eql(result);
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
    replacements(fixture, patterns).should.eql(result);
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
    replacements(fixture, patterns).should.eql('_DONE_');
  });
});
