/**
 * https://leetcode.com/problems/jump-game-ii/
 *
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * You can assume that you can always reach the last index.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 *
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *     1 <= nums.length <= 3 * 104
 *     0 <= nums[i] <= 105
 *
 *
 */

// greedy - time O(n) space O(1)
function jump(nums: number[]): number {
    let maxIndexAtCurrentStep = 0;
    let maxIndexAtNextStep = 0;
    let steps = 0;
    let i = 0;
    while (maxIndexAtCurrentStep < nums.length - 1) {
        maxIndexAtNextStep = Math.max(i + nums[i], maxIndexAtNextStep);
        if (i >= maxIndexAtCurrentStep) {
            steps++;
            maxIndexAtCurrentStep = maxIndexAtNextStep;
        }
        i++;
    }
    return steps;
}

// dynamic programming - time O(n^2) space O(1)
function jumpDP(
    nums: number[],
    fromIndex = 0,
    memo = new Map<number, number>(),
): number {
    if (fromIndex === nums.length - 1) {
        return 0;
    } else if (fromIndex >= nums.length || nums[fromIndex] <= 0) {
        return Number.MAX_SAFE_INTEGER;
    } else {
        let result = memo.get(fromIndex);
        if (result === undefined) {
            result = Number.MAX_SAFE_INTEGER;
            for (let i = 1; i <= nums[fromIndex]; i++) {
                result = Math.min(
                    result,
                    1 + jumpDP(nums, fromIndex + i, memo),
                );
            }
            memo.set(fromIndex, result);
        }
        return result;
    }
}
