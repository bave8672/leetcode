import { findSubstring } from "./substring-with-concatenation-of-all-words";

fdescribe(`substring-with-concatenation-of-all-words`, () => {
    it(`1`, () => {
        expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual([
            0,
            9,
        ]);
    });
    it(`2`, () => {
        expect(
            findSubstring("wordgoodgoodgoodbestword", [
                "word",
                "good",
                "best",
                "word",
            ]),
        ).toEqual([]);
    });
    it(`3`, () => {
        expect(
            findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]),
        ).toEqual([6, 9, 12]);
    });
    it(`4`, () => {
        expect(findSubstring("a", ["a"])).toEqual([0]);
    });
    it(`5`, () => {
        expect(findSubstring("aaaaaa", ["aaa", "aaa"])).toEqual([0]);
    });
});
