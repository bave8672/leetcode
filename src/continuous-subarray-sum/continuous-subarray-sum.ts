/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 *
 * <problem description>
 */

// At each index i, record the modulo of the sum uo to that point
// And store modulo and index in a map
// For subsequent sums, if the modulo of the sum is already encountered
// then we can "subtract" the original portion of the array
// and what's left up to i will be a contiguous region which sums to k
// Time O(n) space O(n)
export function checkSubarraySum(nums: number[], k: number): boolean {
    if (nums.length < 2) {
        return false;
    }
    const map = new Map<number, number>([[0, -1]]);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const mod = k === 0 ? sum : sum % k;
        const j = map.get(mod);
        if (j !== undefined && i - j > 1) {
            return true;
        }
        if (!map.has(mod)) {
            map.set(mod, i);
        }
    }
    return false;
}
