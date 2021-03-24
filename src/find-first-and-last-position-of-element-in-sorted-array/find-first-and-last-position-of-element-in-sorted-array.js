/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * <problem description>
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const i = nums.indexOf(target);
    return i === -1 ? [-1, -1] : [i, nums.lastIndexOf(target)];
};
