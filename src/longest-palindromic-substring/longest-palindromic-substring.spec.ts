import {
    getPalindromeWithRootAt,
    longestPalindrome,
} from "./longest-palindromic-substring";

describe("longestPalindrome", () => {
    spec("a", "a");
    spec("abab", "aba");
    spec("aabbaa", "aabbaa");
    spec("aa", "aa");
    spec("aaa", "aaa");
    spec(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    );
    spec("dogma i amgod", "dogma i amgod");

    function spec(s: string, expected: string) {
        it(`should return the palindrome ${expected} for string ${s}`, () => {
            expect(longestPalindrome(s)).toEqual(expected);
        });
    }
});

describe("getPalindromeWithRootAt", () => {
    spec(0, "a", "a");

    spec(0, "abab", "a");
    spec(0.5, "abab", "");
    spec(1, "abab", "aba");
    spec(1.5, "abab", "");
    spec(2, "abab", "bab");
    spec(2.5, "abab", "");
    spec(3, "abab", "b");

    spec(0.5, "aabbaa", "aa");
    spec(2, "aabbaa", "b");
    spec(2.5, "aabbaa", "aabbaa");

    function spec(i: number, s: string, expected: string) {
        it(`should return the palindrome ${expected} rooted at index ${i} in string ${s}`, () => {
            expect(getPalindromeWithRootAt(i, s)).toEqual(expected);
        });
    }
});
