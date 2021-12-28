/**
 * https://leetcode.com/problems/next-permutation/
 *
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 *
 * If such an arrangement is impossible, it must rearrange it to the lowest possible order (i.e., sorted in ascending order).
 *
 * The replacement must be in place and use only constant extra memory.
 */

const N_MAX = 100;

/**
 * O(n) time & O(1) additional memory
 */
export function nextPermutation(nums: number[]): void {
    const seen: number[] = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        // O(n)
        // keep track of the seen numbers for easy lookup later
        seen[nums[i]] = (seen[nums[i]] || 0) + 1;
        // find the rightmost number n that can be replaced by a larger number to the right
        if (nums[i] < nums[i + 1]) {
            // replace n with the smallest number larger than itself
            for (let j = nums[i] + 1; j <= N_MAX; j++) {
                // O(N_MAX)
                if (seen[j]) {
                    nums[i++] = j;
                    seen[j]--;
                    break;
                }
            }
            // place numbers to the right back in order
            seen.forEach((count, n) => {
                // O(N_MAX)
                for (let j = 0; j < count; j++) {
                    nums[i++] = n;
                }
            });
            return;
        }
    }
    // If we get here, the nubers are in reverse sorted order - reverse to get the initial sorted order
    nums.reverse(); // O(N)
}
