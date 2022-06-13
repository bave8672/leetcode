/**
 * https://leetcode.com/problems/jump-game/
 *
 * <problem description>
 */

/**
 * O(n) time and space recursive DP
 */
export function canJump(
    nums: number[],
    i: number = 0,
    memo: (boolean | undefined)[] = new Array(nums.length),
): boolean {
    if (i === nums.length - 1) {
        return true;
    }
    if (memo[i] !== undefined) {
        return memo[i]!;
    }
    for (let n = 1; n <= nums[i]; n++) {
        if (canJump(nums, i + n, memo)) {
            memo[i] = true;
            return true;
        }
    }
    memo[i] = false;
    return false;
}

/** Starting from the back, keep track of the smallest index that can jump into the smallest index that can jump to the last */
export function canJump2(nums: number[]): boolean {
    let smallestIndexCanJump = nums.length - 1;
    for (let i = smallestIndexCanJump; i >= 0; i--) {
        if (i + nums[i] >= smallestIndexCanJump) {
            smallestIndexCanJump = i;
        }
    }
    return smallestIndexCanJump === 0;
}
