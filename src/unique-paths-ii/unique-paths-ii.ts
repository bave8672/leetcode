/**
 * https://leetcode.com/problems/unique-paths-ii/
 *
 * <problem description>
 */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            let ways = 0;
            if (obstacleGrid[i][j] === 0) {
                if (i === 0 && j === 0) {
                    ways = 1;
                } else {
                    if (i > 0) {
                        ways += obstacleGrid[i - 1][j];
                    }
                    if (j > 0) {
                        ways += obstacleGrid[i][j - 1];
                    }
                }
            }
            obstacleGrid[i][j] = ways;
        }
    }
    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}
