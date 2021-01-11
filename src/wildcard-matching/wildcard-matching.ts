/**
 * https://leetcode.com/problems/wildcard-matching/
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
 *
 *     '?' Matches any single character.
 *     '*' Matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 * Example 2:
 *
 * Input: s = "aa", p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 *
 * Example 3:
 *
 * Input: s = "cb", p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 *
 * Example 4:
 *
 * Input: s = "adceb", p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
 *
 * Example 5:
 *
 * Input: s = "acdcb", p = "a*c?b"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *     0 <= s.length, p.length <= 2000
 *     s contains only lowercase English letters.
 *     p contains only lowercase English letters, '?' or '*'.
 *
 *
 */

export function isMatch(s: string, p: string): boolean {
    // consecutive "*" are redundant and can be replaces with a single star
    return _isMatch(s, p.replace(/\*+/g, "*"), 0, 0, []);
}

// memoise index positions
function _isMatch(
    s: string,
    p: string,
    is: number,
    ip: number,
    memo: boolean[][],
): boolean {
    if (memo[is] === undefined) {
        memo[is] = [];
    }
    if (memo[is][ip] === undefined) {
        memo[is][ip] = __isMatch(s, p, is, ip, memo);
    }
    return memo[is][ip];
}

// recursive dp - O(n^2) time
function __isMatch(
    s: string,
    p: string,
    is: number,
    ip: number,
    memo: boolean[][],
): boolean {
    switch (p[ip]) {
        case undefined:
            return is >= s.length;
        case "?":
            return (
                (is === s.length - 1 && ip === p.length - 1) ||
                (is < s.length && _isMatch(s, p, is + 1, ip + 1, memo))
            );
        case "*":
            return (
                ip === p.length - 1 ||
                _isMatch(s, p, is, ip + 1, memo) ||
                (is < s.length && _isMatch(s, p, is + 1, ip, memo))
            );
        default:
            return s[is] === p[ip] && _isMatch(s, p, is + 1, ip + 1, memo);
    }
}
