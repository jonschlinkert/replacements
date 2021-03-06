# replacements [![NPM version](https://img.shields.io/npm/v/replacements.svg)](https://www.npmjs.com/package/replacements) [![Build Status](https://img.shields.io/travis/jonschlinkert/replacements.svg)](https://travis-ci.org/jonschlinkert/replacements)

> Transform a string with an array of replacement patterns.

- [Install](#install)
- [Usage](#usage)
  * [object of replacement patterns](#object-of-replacement-patterns)
  * [key-value replacement patterns](#key-value-replacement-patterns)
  * [array of replacement patterns](#array-of-replacement-patterns)
  * [functions as replacements](#functions-as-replacements)
- [Related projects](#related-projects)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb))_

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i replacements --save
```

## Usage

```js
var replace = require('replacements');
```

### object of replacement patterns

```js
var transformers = {
  pattern: /a/g,
  replacement: 'bbb'
};
console.log(replace('aaa', transformers));
//=> 'bbbbbbbbb'
```

### key-value replacement patterns

For basic string transformations, you can pass the string to replace as the key, and the replacement as a value:

```js
var transformers = {
  'a': 'b'
  'c': 'd'
};
console.log(replace('aaabbbccc', transformers));
//=> 'bbbbbbddd'
```

_Note that only the first matching string will only be replaced using this format. If you need more flexibility, use the pattern-replacement regex syntax._.

### array of replacement patterns

```js
var transformers = [
  {pattern: /a/g, replacement: 'bbb'},
  {pattern: /b/g, replacement: 'ccc'},
  {pattern: /c/g, replacement: 'ddd'},
  {pattern: /d/g, replacement: 'eee'},
  {pattern: /[e]+/g, replacement: '_DONE_'}
];
console.log(replace('aaa', transformers));
//=> '__DONE__'
```

### functions as replacements

```js
var transformers = {
  pattern: /a+/g,
  replacement: function(match) {
    return match.split('').map(function(str, i) {
      if (i === 0) {return 'b'; }
      if (i === 1) {return str.toUpperCase();}
      return str;
    }).join('');
  }
};
console.log(replace('aaa', transformers));
//=> 'bAa'
```

## Related projects

[easy-renamer](https://www.npmjs.com/package/easy-renamer): Easily rename files using custom rename functions that are automatically used against any filepaths that… [more](https://www.npmjs.com/package/easy-renamer) | [homepage](https://github.com/jonschlinkert/easy-renamer)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/replacements/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on December 20, 2015._