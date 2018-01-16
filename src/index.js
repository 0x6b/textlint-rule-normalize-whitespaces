"use strict";

const execall = require("execall");
import { SPACE_CHARACTERS } from "./SPACE_CHARACTERS";

const spaceCharacterPattern = /[\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]/g;
const unicodeEscape = str => str.replace(/./g, c => `\\u${`000${c.charCodeAt(0).toString(16)}`.substr(-4)}`);
const getName = char => {
    const matchChar = SPACE_CHARACTERS.find(SPACE_CHARACTER => SPACE_CHARACTER.code === char);
    return !matchChar ? "" : matchChar.name;
};
const reporter = ({ Syntax, RuleError, getSource, fixer, report }) => {
    return {
        [Syntax.Str](node) {
            execall(spaceCharacterPattern, getSource(node)).forEach(({ index, match }) => {
                report(
                    node,
                    new RuleError(`Found exotic space character(${getName(match)} ${unicodeEscape(match)})`, {
                        index,
                        fix: fixer.replaceTextRange([index, index + 1], " ")
                    })
                );
            });
        }
    };
};

module.exports = {
    linter: reporter,
    fixer: reporter
};
