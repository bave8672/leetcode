// tslint:disable: prefer-for-of
// tslint:disable: cognitive-complexity

/**
 * https://leetcode.com/problems/distinct-subsequences/
 *
 * Given two strings s and t, return the number of distinct subsequences of s which equals t.
 *
 * A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 *
 * It's guaranteed the answer fits on a 32-bit signed integer.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "rabbbit", t = "rabbit"
 * Output: 3
 * Explanation:
 * As shown below, there are 3 ways you can generate "rabbit" from S.
 * rabbbit
 * rabbbit
 * rabbbit
 *
 * Example 2:
 *
 * Input: s = "babgbag", t = "bag"
 * Output: 5
 * Explanation:
 * As shown below, there are 5 ways you can generate "bag" from S.
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 *
 *
 *
 * Constraints:
 *
 *     0 <= s.length, t.length <= 1000
 *     s and t consist of English letters.
 *
 */

export function numDistinct(s: string, t: string): number {
    // Use a map to count opreviously seen subsequences
    // time O(s * t) space O(t)
    let res = 0;
    const counts = new Map<number, number>();
    const set = new Set(t);
    for (const char of s) {
        if (!set.has(char)) {
            continue;
        }
        const newCounts = new Map<number, number>();
        if (char === t[0]) {
            if (t.length === 1) {
                res++;
                continue;
            } else {
                newCounts.set(0, (newCounts.get(0) || 0) + 1);
            }
        }
        for (const [i, count] of counts) {
            if (char === t[i + 1]) {
                if (i === t.length - 2) {
                    res += count;
                } else {
                    newCounts.set(i + 1, (newCounts.get(i + 1) || 0) + count);
                }
            }
        }
        for (const [i, count] of newCounts) {
            counts.set(i, (counts.get(i) || 0) + count);
        }
    }
    return res;
}
