/**
 * https://leetcode.com/problems/shortest-palindrome/
 *
 * You are given a string s. You can convert s to a palindrome by adding characters in front of it.
 *
 * Return the shortest palindrome you can find by performing this transformation.
 *
 * Example 1:
 *
 * Input: s = "aacecaaa"
 * Output: "aaacecaaa"
 *
 * Example 2:
 *
 * Input: s = "abcd"
 * Output: "dcbabcd"
 *
 *
 *
 * Constraints:
 *
 *     0 <= s.length <= 5 * 104
 *     s consists of lowercase English letters only.
 *
 */

/**
 * Naiive O(n^2) solution
 */
export function shortestPalindrome(s: string): string {
    for (let m = (s.length - 1) / 2; m >= 0; m -= 0.5) {
        let isPalindromeMidpoint = true;
        for (let i = 1; i <= Math.ceil(m); i++) {
            if (s[Math.ceil(m - i)] !== s[Math.floor(m + i)]) {
                isPalindromeMidpoint = false;
                break;
            }
        }
        if (isPalindromeMidpoint) {
            return (
                s
                    .substring(2 * m + 1)
                    .split("")
                    .reverse()
                    .join("") + s
            );
        }
    }
    return "";
}

/**
 * Slightly cleaner naiive solution
 */
export function shortestPalindrome2(s: string): string {
    let l = s.lastIndexOf(s[0]);
    while (!isPalindrome(l)) {
        l = s.lastIndexOf(s[0], l - 1);
    }
    function isPalindrome(j: number): boolean {
        for (let i = 1; i <= j / 2; i++) {
            if (s[i] !== s[j - i]) {
                return false;
            }
        }
        return true;
    }
    return (
        s
            .substring(l + 1)
            .split("")
            .reverse()
            .join("") + s
    );
}
