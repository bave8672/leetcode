import {
    strStr,
    strStr2,
    computeZFunctionTrivial,
    computeZFunction,
    strStr3,
} from "./implement-strstr";

describe("implement-strstr", () => {
    for (const impl of [strStr, strStr2, strStr3]) {
        spec(impl, "hello", "ll", 2);
        spec(impl, "hello", "he", 0);
        spec(impl, "hello", "oo", -1);
        spec(impl, "abracadabra", "cadabra", 4);
        spec(impl, "abracadabra", "c", 4);
    }

    function spec(
        impl: typeof strStr,
        haystack: string,
        needle: string,
        expected: number,
    ) {
        it(`${JSON.stringify({ impl, haystack, needle, expected })}`, () => {
            expect(impl(haystack, needle)).toEqual(expected);
        });
    }
});

describe("compute z array", () => {
    for (const impl of [computeZFunctionTrivial, computeZFunction]) {
        spec(impl, "aaaaa", [0, 4, 3, 2, 1]);
        spec(impl, "aaabaab", [0, 2, 1, 0, 2, 1, 0]);
        spec(impl, "abacaba", [0, 0, 1, 0, 3, 0, 1]);
        spec(impl, "abcabcxabcabc", [0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 3, 0, 0]);
        spec(impl, "ll$hello", [0, 1, 0, 0, 0, 2, 1, 0]);
    }

    function spec(
        impl: (s: string) => number[],
        s: string,
        expected: number[],
    ) {
        it(`${JSON.stringify({ impl, s, expected })}`, () => {
            expect(impl(s)).toEqual(expected);
        });
    }
});
