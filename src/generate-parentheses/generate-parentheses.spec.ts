import { generateParenthesis } from "./generate-parentheses";

describe("generate-parentheses", () => {
    spec(1, ["()"]);
    spec(2, ["(())", "()()"]);
    spec(3, ["((()))", "(()())", "(())()", "()(())", "()()()"]);
    spec(4, [
        "(((())))",
        "((()()))",
        "((())())",
        "((()))()",
        "(()(()))",
        "(()()())",
        "(()())()",
        "(())(())",
        "(())()()",
        "()((()))",
        "()(()())",
        "()(())()",
        "()()(())",
        "()()()()",
    ]);

    function spec(n: number, expected: string[]) {
        it(`${JSON.stringify({ n })}`, () => {
            expect(generateParenthesis(n)).toEqual(
                expect.arrayContaining(expected),
            );
        });
    }
});
