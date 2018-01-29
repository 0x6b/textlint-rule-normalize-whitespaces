"use strict";

import { SPACE_CHARACTERS } from "./SPACE_CHARACTERS";

const execall = require("execall");
const spaceCharacterPattern = new RegExp(
    require("regenerate")(SPACE_CHARACTERS.map(SPACE_CHARACTER => SPACE_CHARACTER.code)),
    "g"
);
const escapeUnicode = str => str.replace(/./g, c => `\\u${`000${c.charCodeAt(0).toString(16)}`.substr(-4)}`);
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
                    new RuleError(`Found exotic space character(${getName(match)} ${escapeUnicode(match)})`, {
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
