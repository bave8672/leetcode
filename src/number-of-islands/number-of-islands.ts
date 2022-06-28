/**
 * https://leetcode.com/problems/number-of-islands/
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * Using a queue to avoid a potential stack overflow
 */
export function numIslands(grid: string[][]): number {
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                islands++;
                const queue: [number, number][] = [[i, j]];
                while (queue.length) {
                    const [k, l] = queue.pop()!;
                    if (grid[k][l] === "1") {
                        grid[k][l] = "0";
                        for (const [x, y] of [
                            [k, l - 1],
                            [k, l + 1],
                            [k - 1, l],
                            [k + 1, l],
                        ]) {
                            if (grid[x] && grid[x][y] === "1") {
                                queue.push([x, y]);
                            }
                        }
                    }
                }
            }
        }
    }
    return islands;
}

/**
 * Recursive DFS O(n*m) time and space
 */
function numIslands2(grid: string[][]): number {
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                islands++;
                visitIsland(i, j);
            }
        }
    }
    return islands;

    function visitIsland(i: number, j: number) {
        grid[i][j] = "0";
        for (const [x, y] of [
            [i, j - 1],
            [i, j + 1],
            [i - 1, j],
            [i + 1, j],
        ]) {
            if (grid[x] && grid[x][y] === "1") {
                visitIsland(x, y);
            }
        }
    }
}
