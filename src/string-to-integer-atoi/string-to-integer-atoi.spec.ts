import { myAtoi } from "./string-to-integer-atoi";

describe("string-to-integer-atoi", () => {
    spec("42", 42);
    spec("-42", -42);
    spec("4193 with words", 4193);
    spec("words and 4193", 0);
    spec("-91283472332", -2147483648);
    spec("+-12", 0);
    spec("00000-42a1234", 0);
    spec("   -04f", -4);
    spec("-5-", -5);
    spec("-", 0);

    function spec(s: string, expected: number) {
        it(`${JSON.stringify({ s, expected })}`, () => {
            expect(myAtoi(s)).toEqual(expected);
        });
    }
});
