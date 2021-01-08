import {
    longestValidParentheses,
    longestValidParentheses2,
} from "./longest-valid-parentheses";

describe("longest-valid-parentheses", () => {
    spec(")(", 0);
    spec("()", 2);
    spec("(()", 2);
    spec("()()", 4);
    spec("((()))", 6);
    spec("((((()))", 6);
    spec("((()))))", 6);
    spec(")()())", 4);
    spec("(()()(", 4);
    spec("(()())", 6);

    function spec(s: string, expected: number) {
        it(`${JSON.stringify({ s, expected })}`, () => {
            expect(longestValidParentheses(s)).toEqual(expected);
            expect(longestValidParentheses2(s)).toEqual(expected);
        });
    }
});
