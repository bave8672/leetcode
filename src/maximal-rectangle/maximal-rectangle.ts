/**
 * https://leetcode.com/problems/maximal-rectangle/
 *
 *  Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 *
 *
 *
 * Example 1:
 *
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * Output: 6
 * Explanation: The maximal rectangle is shown in the above picture.
 *
 * Example 2:
 *
 * Input: matrix = []
 * Output: 0
 *
 * Example 3:
 *
 * Input: matrix = [["0"]]
 * Output: 0
 *
 * Example 4:
 *
 * Input: matrix = [["1"]]
 * Output: 1
 *
 * Example 5:
 *
 * Input: matrix = [["0","0"]]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *     rows == matrix.length
 *     cols == matrix.length
 *     0 <= row, cols <= 200
 *     matrix[i][j] is '0' or '1'.
 *
 *
 */

// Sliding histogram solution with cached heights, lengths at each point
// Time O(rows * rows * cols) space O(rows * cols)
// tslint:disable-next-line: cognitive-complexity
export function maximalRectangle(matrix: string[][]): number {
    if (!matrix.length) {
        return 0;
    }
    const memo: [number, number][][] = [];
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "1") {
                memo[i] = memo[i] || [];
                memo[i][j] = memo[i][j] || [];
                // look up
                if (i > 0 && memo[i - 1] && memo[i - 1][j]) {
                    memo[i][j][0] = 1 + memo[i - 1][j][0];
                } else {
                    memo[i][j][0] = 1;
                }
                // look left
                if (j > 0 && memo[i][j - 1]) {
                    memo[i][j][1] = 1 + (memo[i][j - 1][1] || 0);
                } else {
                    memo[i][j][1] = 1;
                }
                // look diagonally
                let maxLength = memo[i][j][1];
                for (let height = 1; height <= memo[i][j][0]; height++) {
                    maxLength = Math.min(maxLength, memo[i + 1 - height][j][1]);
                    max = Math.max(max, height * maxLength);
                }
            }
        }
    }
    return max;
}
