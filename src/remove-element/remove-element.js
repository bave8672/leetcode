/**
 * https://leetcode.com/problems/remove-element/
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        while (nums[j] === val) {
            j++;
        }
        if (j < nums.length) {
            nums[i++] = nums[j++];
        }
    }
    return i;
};
