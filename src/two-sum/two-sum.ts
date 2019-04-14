/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
export function twoSum(nums: number[], target: number): number[] {
    const complementIndex: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (complementIndex.has(nums[i])) {
            return [complementIndex.get(nums[i])!, i];
        }
        complementIndex.set(target - nums[i], i);
    }
    throw new Error(`no solution`);
}
