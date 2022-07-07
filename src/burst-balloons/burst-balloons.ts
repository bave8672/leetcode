/**
 * https://leetcode.com/problems/burst-balloons/
 *
 * <problem description>
 */

/**
 * Using a memo - correct but runs out of memory
 */
const memo = new Map<string, number>();
export function maxCoins(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    const hash = nums.join("");
    if (memo.has(hash)) {
        return memo.get(hash)!;
    }
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(
            max,
            nums[i] *
                (nums[i - 1] != null ? nums[i - 1] : 1) *
                (nums[i + 1] != null ? nums[i + 1] : 1) +
                maxCoins([...nums.slice(0, i), ...nums.slice(i + 1)]),
        );
    }
    memo.set(hash, max);
    return max;
}
