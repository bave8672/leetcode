/**
 * https://leetcode.com/problems/word-ladder-ii/
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
 *
 *     Only one letter can be changed at a time
 *     Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Note:
 *
 *     Return an empty list if there is no such transformation sequence.
 *     All words have the same length.
 *     All words contain only lowercase alphabetic characters.
 *     You may assume no duplicates in the word list.
 *     You may assume beginWord and endWord are non-empty and are not the same.
 *
 * Example 1:
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output:
 * [
 *   ["hit","hot","dot","dog","cog"],
 *   ["hit","hot","lot","log","cog"]
 * ]
 *
 * Example 2:
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: []
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
 *
 */

export function findLadders(
    beginWord: string,
    endWord: string,
    wordList: string[],
): string[][] {
    const edges = buildEdges([beginWord, ...wordList]);
    const distances = buildDistances(edges, endWord);
    return buildLadders(beginWord, endWord, edges, distances);
}

// time O(n^2 * n.length) space O(n^2); n := dictionary size
function buildEdges(wordList: string[]): Map<string, Set<string>> {
    const edges: Map<string, Set<string>> = new Map();
    for (let i = 0; i < wordList.length; i++) {
        for (let j = i + 1; j < wordList.length; j++) {
            if (isPair(wordList[i], wordList[j])) {
                let edgesI = edges.get(wordList[i]);
                if (!edgesI) {
                    edgesI = new Set();
                    edges.set(wordList[i], edgesI);
                }
                edgesI.add(wordList[j]);
                let edgesJ = edges.get(wordList[j]);
                if (!edgesJ) {
                    edgesJ = new Set();
                    edges.set(wordList[j], edgesJ);
                }
                edgesJ.add(wordList[i]);
            }
        }
    }
    return edges;
}

// time O(n^2) space O(n^2); n := dictionary size
function buildDistances(
    edges: Map<string, Set<string>>,
    endWord: string,
): Map<string, number> {
    const distances: Map<string, number> = new Map([[endWord, 0]]);
    const words: string[] = [endWord];
    while (words.length) {
        const word = words.pop()!;
        for (const neighbour of edges.get(word) || []) {
            if (!distances.has(neighbour)) {
                distances.set(neighbour, distances.get(word)! + 1);
                words.unshift(neighbour);
            }
        }
    }
    return distances;
}

// time O(n^2) space O(n^2); n := dictionary size
function buildLadders(
    beginWord: string,
    endWord: string,
    edges: Map<string, Set<string>>,
    distances: Map<string, number>,
): string[][] {
    if (beginWord === endWord) {
        return [[endWord]];
    }
    const ladders: string[][] = [];
    const nextDistance = distances.get(beginWord)! - 1;
    for (const neighbour of [...(edges.get(beginWord) || [])].filter(
        (w) => distances.get(w) === nextDistance,
    )) {
        const nextLadders = buildLadders(neighbour, endWord, edges, distances);
        for (const ladder of nextLadders) {
            ladders.push([beginWord, ...ladder]);
        }
    }
    return ladders;
}

// time O(a.length) space O(1)
function isPair(a: string, b: string): boolean {
    return (
        a
            .split("")
            .reduce((prev, char, i) => (char === b[i] ? prev : prev + 1), 0) ===
        1
    );
}
