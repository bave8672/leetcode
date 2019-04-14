import assert from "assert";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

describe("longest-substring-without-repeating-characters.spec", () => {
    it(`test case`, () => assert.equal(lengthOfLongestSubstring(""), 0));
    it(`test case`, () => assert.equal(lengthOfLongestSubstring("asx"), 3));
    it(`test case`, () =>
        assert.equal(lengthOfLongestSubstring("abcabcbb"), 3));
    it(`test case`, () => assert.equal(lengthOfLongestSubstring("bbbbb"), 1));
    it(`test case`, () =>
        assert.equal(lengthOfLongestSubstring("qrsvbspk"), 5));
});
