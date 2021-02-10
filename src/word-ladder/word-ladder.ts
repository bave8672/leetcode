/**
 * https://leetcode.com/problems/word-ladder/
 *
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words such that:
 *
 *     The first word in the sequence is beginWord.
 *     The last word in the sequence is endWord.
 *     Only one letter is different between each adjacent pair of words in the sequence.
 *     Every word in the sequence is in wordList.
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
 *
 *
 *
 * Example 1:
 *
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * Output: 5
 * Explanation: One shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with 5 words.
 *
 * Example 2:
 *
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
 * Output: 0
 * Explanation: The endWord "cog" is not in wordList, therefore there is no possible transformation.
 *
 *
 *
 * Constraints:
 *
 *     1 <= beginWord.length <= 10
 *     endWord.length == beginWord.length
 *     1 <= wordList.length <= 5000
 *     wordList[i].length == beginWord.length
 *     beginWord, endWord, and wordList[i] consist of lowercase English letters.
 *     beginWord != endWord
 *     All the strings in wordList are unique.
 *
 *
 */

export function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[],
): number {
    const edges = buildEdges([beginWord, ...wordList]);
    const distances: Map<string, number> = new Map([[endWord, 0]]);
    const words: string[] = [endWord];
    while (words.length) {
        const word = words.pop()!;
        for (const neighbour of edges.get(word) || []) {
            if (!distances.has(neighbour)) {
                if (neighbour === endWord) {
                    return distances.get(word)! + 1;
                }
                distances.set(neighbour, distances.get(word)! + 1);
                words.unshift(neighbour);
            }
        }
    }
    return distances.has(beginWord) ? 1 + distances.get(beginWord)! : 0;
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

// time O(a.length) space O(1)
function isPair(a: string, b: string): boolean {
    return (
        a
            .split("")
            .reduce((prev, char, i) => (char === b[i] ? prev : prev + 1), 0) ===
        1
    );
}
