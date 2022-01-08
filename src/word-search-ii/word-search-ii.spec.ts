// tslint:disable

import { findWords, findWordsTrie, Trie } from "./word-search-ii";

describe("word-search-ii", () => {
    [findWords, findWordsTrie].forEach((fn) => {
        describe(fn.name, () => {
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
                    ["a", "b"],
                    ["c", "d"],
                ],
                ["abcd"],
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
            spec(
                [
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                    [
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                        "a",
                    ],
                ],
                [
                    "a",
                    "aa",
                    "aaa",
                    "aaaa",
                    "aaaaa",
                    "aaaaaa",
                    "aaaaaaa",
                    "aaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaaa",
                ],
                [
                    "a",
                    "aa",
                    "aaa",
                    "aaaa",
                    "aaaaa",
                    "aaaaaa",
                    "aaaaaaa",
                    "aaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaaa",
                ],
            );

            function spec(
                board: string[][],
                words: string[],
                expected: string[],
            ) {
                it(`${JSON.stringify({ board, words })}`, () => {
                    expect(fn(board, words)).toEqual(
                        expect.arrayContaining(expected),
                    );
                });
            }
        });
    });
});

describe("Trie", () => {
    it("can be constructed with words", () => {
        const root = new Trie(["ab", "abc", "abd", "bab"]);
        expect(root.isWord).toEqual(false);
        expect(root.children.size).toEqual(2);
        const a = root.children.get("a")!;
        expect(a.isWord).toEqual(false);
        expect(a.children.size).toEqual(1);
        const ab = a.children.get("b")!;
        expect(ab.isWord).toEqual(true);
        expect(ab.children.size).toEqual(2);
        const abc = ab.children.get("c")!;
        expect(abc.isWord).toEqual(true);
        expect(abc.children.size).toEqual(0);
        const abd = ab.children.get("d")!;
        expect(abd.isWord).toEqual(true);
        expect(abd.children.size).toEqual(0);
        const b = root.children.get("b")!;
        expect(b.isWord).toEqual(false);
        expect(b.children.size).toEqual(1);
        const ba = b.children.get("a")!;
        expect(ba.isWord).toEqual(false);
        expect(ba.children.size).toEqual(1);
        const bab = ba.children.get("b")!;
        expect(bab.isWord).toEqual(true);
        expect(bab.children.size).toEqual(0);
    });
});
