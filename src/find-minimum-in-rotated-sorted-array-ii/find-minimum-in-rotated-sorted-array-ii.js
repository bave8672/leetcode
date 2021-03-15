/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(n) space O(1)
var findMin = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[(nums.length + i - 1) % nums.length]) {
            return nums[i];
        }
    }
    return nums[0];
};
