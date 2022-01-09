import { shortestPalindrome2 } from "./shortest-palindrome";

describe("shortest-palindrome", () => {
    spec("aacecaaa", "aaacecaaa");
    spec("abcd", "dcbabcd");
    spec("abca", "acbabca");
    spec("aab", "baab");
    spec("", "");

    function spec(s: string, expected: string) {
        it(`${JSON.stringify({ s, expected })}`, () => {
            expect(shortestPalindrome2(s)).toEqual(expected);
        });
    }
});
