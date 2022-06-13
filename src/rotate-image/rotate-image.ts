/**
 * https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

/**
 * O(n) time O(0) space
 */
export function rotate(matrix: number[][]): void {
    for (let i = 0; i <= matrix.length / 2; i++) {
        for (let j = i; j < matrix.length - 1 - i; j++) {
            let x = i;
            let y = j;
            let oldVal: number;
            let newVal = matrix[x][y];

            x = j;
            y = matrix.length - 1 - i;
            oldVal = matrix[x][y];
            matrix[x][y] = newVal;
            newVal = oldVal;

            x = matrix.length - 1 - i;
            y = matrix.length - 1 - j;
            oldVal = matrix[x][y];
            matrix[x][y] = newVal;
            newVal = oldVal;

            x = matrix.length - 1 - j;
            y = i;
            oldVal = matrix[x][y];
            matrix[x][y] = newVal;

            matrix[i][j] = oldVal;
        }
    }
}
