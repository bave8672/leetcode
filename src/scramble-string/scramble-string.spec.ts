import { isScramble } from "./scramble-string";

describe("scramble-string", () => {
    spec("great", "rgeat", true);
    spec("abcde", "caebd", false);
    spec("a", "a", true);
    spec("perfection", "perfection", true);
    spec("aaab", "baaa", true);
    spec("aaaaaaab", "baaaaaaa", true);
    spec("abc", "acb", true);
    spec("abcd", "adbc", true);
    spec("123456789", "519234568", false);
    spec("abcdbdacbdac", "bdacabcdbdac", true);

    function spec(s1: string, s2: string, expected: boolean) {
        it(`${JSON.stringify({ s1, s2, expected })}`, () => {
            expect(isScramble(s1, s2)).toEqual(expected);
        });
    }
});
