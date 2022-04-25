import { strStr, strStr2, computeZFunctionTrivial } from "./implement-strstr";

describe("implement-strstr", () => {
    for (const impl of [strStr, strStr2]) {
        spec(impl, "hello", "ll", 2);
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

describe("z array", () => {
    for (const impl of [computeZFunctionTrivial]) {
        spec(impl, "aaaaa", [0, 4, 3, 2, 1]);
        spec(impl, "aaabaab", [0, 2, 1, 0, 2, 1, 0]);
        spec(impl, "abacaba", [0, 0, 1, 0, 3, 0, 1]);
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
