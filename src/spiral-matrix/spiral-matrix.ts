/**
 * https://leetcode.com/problems/spiral-matrix/
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */

export function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    let boundL = 0;
    let boundR = matrix[0].length - 1;
    let boundU = 0;
    let boundD = matrix.length - 1;
    let i = 0;
    let j = 0;
    let direction: "u" | "d" | "l" | "r" = "r";
    for (let _ = 0; _ < matrix.length * matrix[0].length; _++) {
        result.push(matrix[i][j]);
        switch (direction) {
            case "r":
                if (j === boundR) {
                    direction = "d";
                    i++;
                    boundU++;
                } else {
                    j++;
                }
                break;
            case "d":
                if (i === boundD) {
                    direction = "l";
                    j--;
                    boundR--;
                } else {
                    i++;
                }
                break;
            case "l":
                if (j === boundL) {
                    direction = "u";
                    i--;
                    boundD--;
                } else {
                    j--;
                }
                break;
            case "u":
                if (i === boundU) {
                    direction = "r";
                    j++;
                    boundL++;
                } else {
                    i--;
                }
                break;
        }
    }
    return result;
}
