import { findWords } from "./word-search-ii";

describe("word-search-ii", () => {
    spec(
        [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"],
        ],
        ["oath", "pea", "eat", "rain"],
        ["eat", "oath"],
    );
    spec(
        [
            ["a", "b"],
            ["c", "d"],
        ],
        ["abcb"],
        [],
    );
    spec(
        [
            ["o", "a", "b", "n"],
            ["o", "t", "a", "e"],
            ["a", "h", "k", "r"],
            ["a", "f", "l", "v"],
        ],
        ["oa", "oaa"],
        ["oa", "oaa"],
    );
    spec(
        [
            ["a", "b", "c"],
            ["a", "e", "d"],
            ["a", "f", "g"],
        ],
        ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"],
        ["abcdefg", "befa", "eaabcdgfa", "gfedcbaaa"],
    );

    function spec(board: string[][], words: string[], expected: string[]) {
        it(`${JSON.stringify({ board, words })}`, () => {
            expect(findWords(board, words)).toEqual(
                expect.arrayContaining(expected),
            );
        });
    }
});
