/**
 * https://leetcode.com/problems/minimum-path-sum/
 *
 * <problem description>
 */

/**
 * A*
 * Better average-case performance
 * O(n*m) time or O((n+m).log(n+m)) time depending on heap impl, O(n+m) average space
 */
export function minPathSum(grid: number[][]): number {
    throw new Error("todo");
}

/**
 * Store mins in a second grid
 * O(m*n) time and space
 */
export function minPathSum2(grid: number[][]): number {
    const memo: number[][] = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        memo[i] = new Array(grid[0].length);
        for (let j = 0; j < grid[0].length; j++) {
            const prevs: number[] = [];
            if (i) {
                prevs.push(memo[i - 1][j]);
            }
            if (j) {
                prevs.push(memo[i][j - 1]);
            }
            memo[i][j] = grid[i][j] + (prevs.length ? Math.min(...prevs) : 0);
        }
    }
    return memo[grid.length - 1][grid[0].length - 1];
}
