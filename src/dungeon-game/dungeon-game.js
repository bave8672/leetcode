/**
 * https://leetcode.com/problems/dungeon-game/
 *
 * <problem description>
 */

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    // time and space O(n * m) where n and m are dims of dungeon
    const mins = [];
    for (let i = dungeon.length - 1; i >= 0; i--) {
        mins[i] = [];
        for (let j = dungeon[0].length - 1; j >= 0; j--) {
            const nextMins = [];
            if (i < dungeon.length - 1) {
                nextMins.push(mins[i + 1][j]);
            }
            if (j < dungeon[0].length - 1) {
                nextMins.push(mins[i][j + 1]);
            }
            if (!nextMins.length) {
                nextMins.push(1);
            }
            mins[i][j] = Math.max(1, Math.min(...nextMins) - dungeon[i][j]);
        }
    }
    return mins[0][0];
};
