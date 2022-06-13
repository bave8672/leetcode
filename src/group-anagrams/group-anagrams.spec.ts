import { groupAnagrams } from "./group-anagrams";

describe("group-anagrams", () => {
    spec(["too", "tot"], [["too"], ["tot"]]);
    spec(
        [
            "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
            "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
        ],
        [
            ["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"],
            ["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"],
        ],
    );

    function spec(words: string[], expected: string[][]) {
        it(`${JSON.stringify({ words, expected })}`, () => {
            expect(groupAnagrams(words)).toEqual(expected);
        });
    }
});
