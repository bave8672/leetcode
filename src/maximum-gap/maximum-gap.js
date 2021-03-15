/**
 * https://leetcode.com/problems/maximum-gap/
 *
 * Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    // native sort, time O(nlog(n))
    // could be improved by using radix sort in linear time, assuming a fixed limit to the size of the numbers
    nums.sort((a, b) => a - b);
    return nums.reduce(
        (max, n, i) => (i > 0 ? Math.max(max, n - nums[i - 1]) : max),
        0,
    );
};
