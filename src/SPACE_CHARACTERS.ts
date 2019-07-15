const SPACE_CHARACTERS = [
    { code: "\u00a0", name: "NO-BREAK SPACE" },
    { code: "\u1680", name: "OGHAM SPACE MARK" },
    { code: "\u180e", name: "MONGOLIAN VOWEL SEPARATOR" },
    { code: "\u2000", name: "EN QUAD" },
    { code: "\u2001", name: "EM QUAD" },
    { code: "\u2002", name: "EN SPACE" },
    { code: "\u2003", name: "EM SPACE" },
    { code: "\u2004", name: "THREE-PER-EM SPACE" },
    { code: "\u2005", name: "FOUR-PER-EM SPACE" },
    { code: "\u2006", name: "SIX-PER-EM SPACE" },
    { code: "\u2007", name: "FIGURE SPACE" },
    { code: "\u2008", name: "PUNCTUATION SPACE" },
    { code: "\u2009", name: "THIN SPACE" },
    { code: "\u200a", name: "HAIR SPACE" },
    { code: "\u202f", name: "NARROW NON-BREAKING SPACE" },
    { code: "\u205f", name: "MEDIUM MATHEMATICAL SPACE" },
    { code: "\u3000", name: "IDEOGRAPHIC SPACE" }
];

const ZERO_WIDTH_SPACE_CHARACTERS = [
    { code: "\u200b", name: "ZERO WIDTH SPACE" },
    { code: "\ufeff", name: "ZERO WIDTH NO-BREAK SPACE" }
];

export { SPACE_CHARACTERS, ZERO_WIDTH_SPACE_CHARACTERS };
