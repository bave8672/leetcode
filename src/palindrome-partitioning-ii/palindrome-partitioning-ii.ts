/**
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 *
 * Return the minimum cuts needed for a palindrome partitioning of s.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
 *
 * Example 2:
 *
 * Input: s = "a"
 * Output: 0
 *
 * Example 3:
 *
 * Input: s = "ab"
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *     1 <= s.length <= 2000
 *     s consists of lower-case English letters only.
 *
 */

// DP with memoization
// Time O(n^2), space O(n)
// tslint:disable-next-line: cognitive-complexity
export function minCut(
    s: string,
    offset: number = 0,
    memo: Map<number, number> = new Map(),
): number {
    if (memo.has(offset)) {
        return memo.get(offset)!;
    }
    let min = s.length - offset - 1;
    let evens: number[] = [];
    let odds: number[] = [];
    for (let i = offset; i < s.length; i++) {
        const newEvens: number[] = [i];
        for (const even of evens) {
            if (even >= offset && s[i] === s[even]) {
                const newEven = even - 1;
                if (newEven === offset - 1) {
                    min = Math.min(min, 1 + minCut(s, i + 1, memo));
                } else {
                    newEvens.push(newEven);
                }
            }
        }
        evens = newEvens;
        if (i === offset) {
            min = Math.min(min, 1 + minCut(s, i + 1, memo));
        }
        const newOdds: number[] = [i];
        for (const odd of odds) {
            if (odd > offset && s[i] === s[odd - 1]) {
                const newOdd = odd - 1;
                if (newOdd === offset) {
                    min = Math.min(min, 1 + minCut(s, i + 1, memo));
                } else {
                    newOdds.push(newOdd);
                }
            }
        }
        odds = newOdds;
    }
    memo.set(offset, min);
    return min;
}
