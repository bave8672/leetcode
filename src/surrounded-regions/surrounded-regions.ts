/**
 * https://leetcode.com/problems/surrounded-regions/
 *
 * Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 */

/**
 * 1. Find 'O' Tiles on the edge - these  form the unbounded sets
 * 2. From those seed tiles, search all tiles in unbounded sets and store them - time O(n*m) spoace O(n*m)
 * 3. All other tiles can then be labelled 'X' - time O(n*m)
 */
export function solve(board: string[][]): void {
    const isUnbounded: boolean[][] = [];
    for (let i = 0; i < board.length; i++) {
        isUnbounded[i] = [];
    }
    for (let i = 1; i < board.length - 1; i++) {
        maybeMarkUnbounded(i, 0);
        maybeMarkUnbounded(i, board[0].length - 1);
    }
    for (let j = 1; j < board[0].length - 1; j++) {
        maybeMarkUnbounded(0, j);
        maybeMarkUnbounded(board.length - 1, j);
    }
    for (let i = 1; i < board.length - 1; i++) {
        for (let j = 1; j < board[0].length - 1; j++) {
            if (board[i][j] === "O" && !isUnbounded[i][j]) {
                board[i][j] = "X";
            }
        }
    }
    function maybeMarkUnbounded(i: number, j: number) {
        if (!board[i] || isUnbounded[i][j] || board[i][j] !== "O") {
            return;
        }
        isUnbounded[i][j] = true;
        for (const [x, y] of [
            [i - 1, j],
            [i, j - 1],
            [i, j + 1],
            [i + 1, j],
        ]) {
            maybeMarkUnbounded(x, y);
        }
    }
}
