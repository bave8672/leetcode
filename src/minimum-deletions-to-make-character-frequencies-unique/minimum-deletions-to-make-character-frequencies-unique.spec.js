const {
    minDeletions,
} = require("./minimum-deletions-to-make-character-frequencies-unique");

describe("minimum-deletions-to-make-character-frequencies-unique", () => {
    spec("aab", 0);
    spec("aaabbbcc", 2);
    spec("ceabaacb", 2);
    spec("abcabc", 3);

    function spec(s, expected) {
        it(`${JSON.stringify({ s, expected })}`, () => {
            expect(minDeletions(s)).toEqual(expected);
        });
    }
});
