import { findLadders } from "./word-ladder-ii";

describe("word-ladder-ii", () => {
    spec(
        "hit",
        "cog",
        ["hot", "dot", "dog", "lot", "log", "cog"],
        [
            ["hit", "hot", "dot", "dog", "cog"],
            ["hit", "hot", "lot", "log", "cog"],
        ],
    );

    spec("hit", "cog", ["hot", "dot", "dog", "lot", "log"], []);

    function spec(
        beginWord: string,
        endWord: string,
        wordList: string[],
        expected: string[][],
    ) {
        it(`${JSON.stringify({
            beginWord,
            endWord,
            wordList,
            expected,
        })}`, () => {
            expect(findLadders(beginWord, endWord, wordList)).toEqual(expected);
        });
    }
});
