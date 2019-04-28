import { isInterleave } from "./interleaving-string";

describe(`interleaving string`, () => {
    it("1", () =>
        expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true));
    it("2", () => expect(isInterleave("a", "b", "a")).toBe(false));
});
