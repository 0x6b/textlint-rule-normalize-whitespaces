# textlint-rule-normalize-whitespaces

[textlint](https://textlint.github.io/) rule which replaces following whitespaces to normal whitespace (`U+0020`) in your document.

| Code Point | Name                      |
| ---------- | ------------------------- |
| `U+00A0`   | NO-BREAK SPACE            |
| `U+1680`   | OGHAM SPACE MARK          |
| `U+180E`   | MONGOLIAN VOWEL SEPARATOR |
| `U+2000`   | EN QUAD                   |
| `U+2001`   | EM QUAD                   |
| `U+2002`   | EN SPACE                  |
| `U+2003`   | EM SPACE                  |
| `U+2004`   | THREE-PER-EM SPACE        |
| `U+2005`   | FOUR-PER-EM SPACE         |
| `U+2006`   | SIX-PER-EM SPACE          |
| `U+2007`   | FIGURE SPACE              |
| `U+2008`   | PUNCTUATION SPACE         |
| `U+2009`   | THIN SPACE                |
| `U+200A`   | HAIR SPACE                |
| `U+202F`   | NARROW NON-BREAKING SPACE |
| `U+205F`   | MEDIUM MATHEMATICAL SPACE |
| `U+3000`   | IDEOGRAPHIC SPACE         |

## Install

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

```sh
npm install @0x6b/textlint-rule-normalize-whitespaces # or
yarn add @0x6b/textlint-rule-normalize-whitespaces
```

This module requires Node.js >= 6.

## Usage

Via `.textlintrc`(recommended):

```json
{
    "rules": {
        "@0x6b/normalize-whitespaces": true
    }
}
```

Via CLI:

```
textlint --rule @0x6b/normalize-whitespaces README.md
```

### Build

Builds source codes for publish to the `lib/` folder.
You can write ES2015+ source codes in `src/` folder.

```sh
npm install && npm run build # or
yarn && yarn build
```

### Test

Run test code in `test` folder by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

```sh
npm test # or
yarn test
```

## References

* [The Unicode (r) Standard Version 10.0 Core Specification](https://www.unicode.org/versions/Unicode10.0.0/ch06.pdf), Chapter 6 Writing Systems and Punctuation, Table 6-2. Unicode Space Characters
* [Unicode spaces]()http://jkorpela.fi/chars/spaces.html)

## License

MIT © 0x6b
