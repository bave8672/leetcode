import { isMatch } from "./regular-expression-matching";

fdescribe(`regular experssion matching`, () => {
    it(`should match an empty string`, () =>
        expect(isMatch("", "")).toBe(true));
    it(`should match a basic char pattern`, () =>
        expect(isMatch("abcd", "abcd")).toBe(true));
    it(`should reject a basic char pattern`, () =>
        expect(isMatch("abcd", "abd")).toBe(false));
    it(`should match a pattern containing wildcards`, () =>
        expect(isMatch("abcd", "ab.d")).toBe(true));
    it(`should reject an invalid pattern containing wildcards`, () =>
        expect(isMatch("abd", "ab.d")).toBe(false));
    it(`should match a pattern containing stars with 0 counts of the starred char`, () =>
        expect(isMatch("", "a*")).toBe(true));
    it(`should match a pattern containing stars with multiple counts of the starred char`, () =>
        expect(isMatch("aaaa", "a*")).toBe(true));
    it(`should match a pattern containing nested stars`, () =>
        expect(isMatch("a", "a*a")).toBe(true));
    it(`should reject an invalid pattern containing stars 1`, () =>
        expect(isMatch("b", "a*")).toBe(false));
    it(`should reject an invalid pattern containing stars 2`, () =>
        expect(isMatch("mississippi", "mis*is*p*.")).toBe(false));
    it(`should match a wildcard star`, () =>
        expect(isMatch("ab", ".*")).toBe(true));
    it(`should match a nested wildcard star`, () =>
        expect(isMatch("aab", "a.*ab")).toBe(true));
    it(`should reject an invalid nested wildcard star`, () =>
        expect(isMatch("a", ".*aa")).toBe(false));
});
