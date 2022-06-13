/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * By induction; if the subproblem (max ending at i) is solved
 * then the max ending at i + 1 is either the sum of n[i] + n[i + 1] or n[i + 1] , whichever is greater
 */
export function maxSubArray(nums: number[]): number {
    let maxEndingHere = Number.NEGATIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (const n of nums) {
        maxEndingHere = Math.max(n, n + maxEndingHere);
        max = Math.max(max, maxEndingHere);
    }
    return max;
}
