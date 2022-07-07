import { removeInvalidParentheses } from "./remove-invalid-parentheses";

describe("remove-invalid-parentheses", () => {
    spec();

    function spec(input: any, expected: any) {
        it(`${JSON.stringify({ input, expected })}`, () => {
            expect(removeInvalidParentheses(input)).toEqual(expected);
        });
    }
});
