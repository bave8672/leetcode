/**
 * https://leetcode.com/problems/palindrome-number/
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 *
 *
 *
 * Example 1:
 *
 * Input: x = 121
 * Output: true
 *
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Example 4:
 *
 * Input: x = -101
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *     -231 <= x <= 231 - 1
 *
 */

// One-liner using reversed string equality
// time O(n) space O(n)
export const _isPalindrome = (x: number): boolean =>
    x >= 0 && x === Number(x.toString().split("").reverse().join(""));

// Slightly faster, looping through individual digits
// time O(n) space O(n)
export function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    const s = x.toString();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
