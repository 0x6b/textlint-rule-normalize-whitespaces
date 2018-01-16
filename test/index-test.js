"use strict";

const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
const rule = require("../src/index");
import { SPACE_CHARACTERS } from "../src/SPACE_CHARACTERS";

const invalidCases = SPACE_CHARACTERS.map(SPACE_CHARACTER => {
    return {
        text: `'${SPACE_CHARACTER.code}': ${SPACE_CHARACTER.name}`,
        output: `' ': ${SPACE_CHARACTER.name}`,
        errors: [
            {
                index: 1
            }
        ]
    };
});

tester.run("textlint-rule-normalize-whitespaces", rule, {
    valid: ["Normal whitespaces are here"],
    invalid: [
        {
            text: "Exotic white　spaces are here",
            output: "Exotic white spaces are here",
            errors: [
                {
                    index: 6,
                    message: "Found exotic space character(OGHAM SPACE MARK \\u1680)"
                },
                {
                    index: 12,
                    message: "Found exotic space character(IDEOGRAPHIC SPACE \\u3000)"
                }
            ]
        },
        ...invalidCases
    ]
});
