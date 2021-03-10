/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * <problem description>
 */

export function removeDuplicates(nums: number[]): number {
    let i = 0;
    while (i < nums.length) {
        while (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
        i++;
    }
    return nums.length;
}
