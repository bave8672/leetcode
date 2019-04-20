/**
 * https://leetcode.com/problems/three-sum/
 *
 * Given an array nums of n integers, a
 * re there elements a, b, c in nums
 * such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 */

// tslint:disable-next-line: cognitive-complexity
export function threeSum(nums: number[]): number[][] {
    const results: number[][] = [];

    // sort array (O(log(n)n)) to allow for O(n^2) method
    nums.sort((a, b) => a - b);

    // iterate over each number (O(n))
    for (let i = 0; i < nums.length - 2; i++) {
        while (i > 0 && nums[i] === nums[i - 1]) {
            i++;
        }

        let lo = i + 1;
        let hi = nums.length - 1;

        // search remaining array for matches
        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];

            if (sum === 0) {
                results.push([nums[i], nums[lo], nums[hi]]);
            }

            if (sum <= 0) {
                lo++;
                // skip over duplicates
                while (nums[lo] === nums[lo - 1]) {
                    lo++;
                }
            } else {
                hi--;
                // skip over duplicates
                while (nums[hi] === nums[hi + 1]) {
                    hi--;
                }
            }
        }
    }

    return results;
}
