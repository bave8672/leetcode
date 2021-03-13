/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, start, end) {
    start = start || 0;
    if (end === undefined) {
        end = nums.length;
    }
    if (start >= nums.length) {
        return nums.length;
    } else if (end <= 0) {
        return 0;
    }
    // binary search
    const midpoint = Math.floor((end + start) / 2);
    if (
        nums[midpoint] === target ||
        (nums[midpoint] > target && nums[midpoint - 1] < target)
    ) {
        return midpoint;
    } else if (nums[midpoint] > target) {
        return searchInsert(nums, target, start, midpoint - 1);
    } else {
        return searchInsert(nums, target, midpoint + 1, end);
    }
};
