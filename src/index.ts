/*!
 * replacements <https://github.com/jonschlinkert/replacements>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

export interface ObjectOfReplacementPattern {
  pattern: RegExp | string;
  replacement: string | ((substring: string, ...args: any[]) => string);
}

export type ArrayOfReplacementPatterns = ObjectOfReplacementPattern[];

export default function replacements(
  str: string,
  val: ArrayOfReplacementPatterns | ObjectOfReplacementPattern
): string {
  let arr = !Array.isArray(val) ? [val] : val;

  arr.forEach((obj) => {
    // ts overload for replace with function replacer not working
    str = str.replace(obj.pattern, obj.replacement as any);
  });

  return str;
}
