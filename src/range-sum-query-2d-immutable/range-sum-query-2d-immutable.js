/**
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 *
 * <problem description>
 */

class NumMatrix {
    constructor(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (i > 0) {
                    matrix[i][j] += matrix[i - 1][j];
                }
                if (j > 0) {
                    matrix[i][j] += matrix[i][j - 1];
                }
                if (i > 0 && j > 0) {
                    matrix[i][j] -= matrix[i - 1][j - 1];
                }
            }
        }
        this.matrix = matrix;
    }

    sumRegion(i, j, k, l) {
        let sum = this.matrix[k][l];
        if (i > 0) {
            sum -= this.matrix[i - 1][l];
        }
        if (j > 0) {
            sum -= this.matrix[k][j - 1];
        }
        if (i > 0 && j > 0) {
            sum += this.matrix[i - 1][j - 1];
        }
        return sum;
    }
}
