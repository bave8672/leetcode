// tslint:disable

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
    // map chars to their position on the board
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

/**
 * Using a trie - interestingly this is slower
 */
export function findWordsTrie(board: string[][], words: string[]) {
    const root = new Trie(words);
    const used: ((true | undefined)[] | undefined)[] = [];
    const res: string[] = [];
    function* findLetters(letter: string) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === letter && !(used[i] && used[i]![j])) {
                    yield [i, j];
                }
            }
        }
    }
    function* findLettersFrom(letter: string, [i, j]: [number, number]) {
        for (const [k, l] of [
            [i - 1, j],
            [i, j - 1],
            [i, j + 1],
            [i + 1, j],
        ] as [number, number][]) {
            if ((board[k] || [])[l] === letter && !(used[k] && used[k]![l])) {
                yield [k, l];
            }
        }
    }
    function dp(
        trie: Trie,
        word: string,
        prev: [number, number] | undefined,
    ): boolean {
        // keep running permutations until all words in the tree are found
        const nexts = prev
            ? findLettersFrom(word[word.length - 1], prev)
            : findLetters(word[word.length - 1]);
        for (const next of nexts) {
            if (trie.isWord) {
                // if this node represents a word, making it here means there is a path;
                // add it to the result list and don't search for it again
                res.push(word);
                if (trie.children.size === 0) {
                    return true;
                }
                trie.isWord = false;
            }
            // record use of this next value
            if (!used[next[0]]) {
                used[next[0]] = [];
            }
            used[next[0]]![next[1]] = true;
            for (const [letter, child] of trie.children.entries()) {
                if (dp(child, word + letter, next as [number, number])) {
                    // trim the tree if complete
                    trie.children.delete(letter);
                    if (trie.children.size === 0) {
                        used[next[0]]![next[1]] = undefined;
                        return true;
                    }
                }
            }
            used[next[0]]![next[1]] = undefined;
        }
        return false;
    }
    for (const [letter, child] of root.children.entries()) {
        dp(child, letter, undefined);
    }
    return res;
}

export class Trie {
    readonly children = new Map<string, Trie>();
    isWord: boolean = false;

    constructor(words: string[] = []) {
        for (const word of words) {
            this.addWord(word);
        }
    }

    addWord(word: string, i = 0) {
        if (i >= word.length) {
            return;
        }
        let child = this.children.get(word[i]);
        if (!child) {
            child = new Trie();
            this.children.set(word[i], child);
        }
        if (i === word.length - 1) {
            child.isWord = true;
        } else {
            child.addWord(word, i + 1);
        }
    }
}
