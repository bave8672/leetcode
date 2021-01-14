import { minWindow } from "./minimum-window-substring";

describe("minimum-window-substring", () => {
    spec("ADOBECODEBANC", "ABC", "BANC");
    spec("a", "a", "a");
    spec("b", "a", "");
    spec("aa", "aa", "aa");

    function spec(s: string, t: string, expected: string) {
        it(`${JSON.stringify({ s, t, expected })}`, () => {
            expect(minWindow(s, t)).toEqual(expected);
        });
    }
});
