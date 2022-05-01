/**
 * https://leetcode.com/problems/implement-strstr/
 *
 * Implement strStr().
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 *
 *
 * Example 1:
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 *
 *
 * Constraints:
 *
 *     1 <= haystack.length, needle.length <= 104
 *     haystack and needle consist of only lowercase English characters.
 */

/**
 * Trivial solution O(n*m)
 */
export function strStr(haystack: string, needle: string): number {
    if (!needle) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        // optimisation: search term can't be longer than remaining text
        if (haystack.length - i >= needle.length) {
            let match = true;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i;
            }
        }
    }
    return -1;
}

/**
 * Cheaty solution using builtin, actualy performs worse than the trivial sln above
 */
export function strStr2(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}

/**
 * Using a z array O(n) time & space
 */
export function strStr3(haystack: string, needle: string): number {
    return Math.max(
        computeZFunction(`${needle}$${haystack}`).indexOf(
            needle.length,
            needle.length + 1,
        ) -
            needle.length -
            1,
        -1,
    );
}

/**
 * https://cp-algorithms.com/string/z-function.html
 * O(n^2)
 */
export function computeZFunctionTrivial(s: string) {
    const z: number[] = [0];
    for (let i = 1; i < s.length; i++) {
        let l = 0;
        while (s[l] === s[i + l] && i + l < s.length) {
            l++;
        }
        z[i] = l;
    }
    return z;
}

/**
 * https://cp-algorithms.com/string/z-function.html
 * O(n) time & space
 */
export function computeZFunction(s: string) {
    const z: number[] = [0];
    let l = 0;
    let r = 0;
    for (let i = 1; i < s.length; i++) {
        if (i <= r) {
            z[i] = Math.min(z[i - l], 1 + r - i);
        } else {
            z[i] = 0;
        }
        while (s[z[i]] === s[i + z[i]] && i + z[i] < s.length) {
            z[i]++;
        }
        if (i + z[i] > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }
    return z;
}
