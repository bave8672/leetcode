import { numDistinct } from "./distinct-subsequences";

describe("distinct-subsequences", () => {
    spec("ABCDE", "AEC", 0);
    spec("ABCDE", "ACE", 1);
    spec("rabbbit", "rabbit", 3);
    spec("babgbag", "bag", 5);
    spec("1", "1", 1);
    spec("aabbcc", "abc", 8);

    function spec(s: string, t: string, expected: number) {
        it(`${JSON.stringify({ s, t, expected })}`, () => {
            expect(numDistinct(s, t)).toEqual(expected);
        });
    }
});
