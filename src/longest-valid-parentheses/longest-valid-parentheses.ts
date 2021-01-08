/**
 * https://leetcode.com/problems/longest-valid-parentheses/
 *
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 *
 * Example 2:
 *
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 *
 * Example 3:
 *
 * Input: s = ""
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *     0 <= s.length <= 3 * 104
 *     s[i] is '(', or ')'.
 *
 *
 */

// scrolling window with a stack to store count indices
// and a map to store previous valid lengths
// time O(n) space O(n)
export function longestValidParentheses(s: string): number {
    // scrolling
    let longest = 0;
    const stack: number[] = [];
    let i = 0;
    const lengthEndingAt = new Map<number, number>();
    while (i < s.length) {
        if (s[i] === "(") {
            stack.push(i);
        } else if (stack.length) {
            const prevI = stack.pop()!;
            const prevLength = lengthEndingAt.get(prevI - 1) || 0;
            const length = prevLength + i - prevI + 1;
            lengthEndingAt.set(i, length);
            longest = Math.max(longest, length);
        } else {
            lengthEndingAt.delete(i);
        }
        i++;
    }
    return longest;
}

// sliding window one way
// requires checking both directions
// time O(n) space O(1)
// tslint:disable-next-line: cognitive-complexity
export function longestValidParentheses2(s: string): number {
    let longest = 0;

    // LR
    let start = 0;
    let end = 0;
    let count = 0;
    while (end < s.length) {
        if (s[end] === "(") {
            count++;
        } else {
            count--;
        }
        while (count < 0 && start <= end && end < s.length) {
            if (s[start] === "(") {
                count--;
            } else {
                count++;
            }
            start++;
        }
        if (count === 0 && start !== end) {
            longest = Math.max(longest, end - start + 1);
        }
        end++;
    }

    // RL
    start = s.length - 1;
    end = start;
    count = 0;
    while (end >= 0) {
        if (s[end] === ")") {
            count++;
        } else {
            count--;
        }
        while (count < 0 && start >= end && end >= 0) {
            if (s[start] === ")") {
                count--;
            } else {
                count++;
            }
            start--;
        }
        if (count === 0 && start !== end) {
            longest = Math.max(longest, start - end + 1);
        }
        end--;
    }
    return longest;
}
