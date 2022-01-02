/**
 * https://leetcode.com/problems/word-search-ii/
 *
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 *
 * Each word must be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once in a word.
 */

export function findWords(board: string[][], words: string[]): string[] {
    // map chars t their position on the board
    // to allow O(1) lookup of char existence
    // And worst case O(n * m) if board letters are identical, best case O(1) if board letters are unique
    // Create time = O(m * n), space O(m * n)
    const map = new Map<string, [number, number][]>();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const ids = map.get(board[i][j]);
            if (!ids) {
                map.set(board[i][j], [[i, j]]);
            } else {
                ids.push([i, j]);
            }
        }
    }
    const res: string[] = [];
    // for each word, iteratively check each letter exists in the board with a neighbour using map
    // O(words.length * words[i].length * m * n) ish
    for (const word of words) {
        // check existence of chars to avoid potentially expensive dfs below
        if (word.split("").every((char) => map.has(char))) {
            findWord(word, 0);
        }
    }
    return res;
    function findWord(
        word: string,
        charId: number,
        prevId?: [number, number],
    ): boolean {
        const ids = map.get(word[charId]);
        if (!ids || ids.length === 0) {
            return false;
        }
        let found = false;
        const triedIds = new Set<number>();
        while (!found) {
            const nextIdId = ids.findIndex(
                ([i, j], idId) =>
                    !triedIds.has(idId) &&
                    (!prevId ||
                        (i === prevId[0] && Math.abs(j - prevId[1]) === 1) ||
                        (j === prevId[1] && Math.abs(i - prevId[0]) === 1)),
            );
            if (nextIdId === -1) {
                return false;
            }
            if (charId === word.length - 1) {
                res.push(word);
                return true;
            }
            triedIds.add(nextIdId);
            const [nextId] = ids.splice(nextIdId, 1);
            found = findWord(word, charId + 1, nextId);
            ids.splice(nextIdId, 0, nextId);
        }
        return found;
    }
}
