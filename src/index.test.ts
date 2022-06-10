import replacements from "./index";

describe("errors", () => {
  it("should throw on bad args:", () => {
    expect(() => {
      // @ts-ignore
      replacements();
    }).toThrow("Cannot read properties");
  });
});

describe("object of replacement patterns", () => {
  it("should reduce the string to the final result", () => {
    var fixture = "aaaaaaaaaaaaaaaaaaaaaaaa";
    var patterns = { pattern: /a/g, replacement: "bbb" };
    var result =
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

    expect(replacements(fixture, patterns)).toBe(result);
  });
});

describe("when a function is used as the replacement", () => {
  it("should use the function on the given string", () => {
    var fixture = "aaa";
    var patterns = {
      pattern: /a+/g,
      replacement: function (match) {
        return match
          .split("")
          .map(function (str, i) {
            if (i === 0) {
              return "b";
            }
            if (i === 1) {
              return str.toUpperCase();
            }
            return str;
          })
          .join("");
      },
    };
    var result = "bAa";

    expect(replacements(fixture, patterns)).toBe(result);
  });
});

describe("array of replacement patterns", () => {
  it("should reduce the string to the final result", () => {
    var fixture = "aaaaaaaaaaaaaaaaaaaaaaaa";
    var patterns = [
      { pattern: /a/g, replacement: "bbb" },
      { pattern: /b/g, replacement: "ccc" },
      { pattern: /c/g, replacement: "ddd" },
      { pattern: /d/g, replacement: "eee" },
      { pattern: /[e]+/g, replacement: "_DONE_" },
    ];

    expect(replacements(fixture, patterns)).toBe("_DONE_");
  });
});
