/**
 * https://leetcode.com/problems/scramble-string/
 *
 * We can scramble a string s to get a string t using the following algorithm:
 *
 *     If the length of the string is 1, stop.
 *     If the length of the string is > 1, do the following:
 *         Split the string into two non-empty substrings at a random index, i.e., if the string is s, divide it to x and y where s = x + y.
 *         Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become s = x + y or s = y + x.
 *         Apply step 1 recursively on each of the two substrings x and y.
 *
 * Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 * Input: s1 = "great", s2 = "rgeat"
 * Output: true
 * Explanation: One possible scenario applied on s1 is:
 * "great" --> "gr/eat" // divide at random index.
 * "gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
 * "gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at ranom index each of them.
 * "g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
 * "r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
 * "r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
 * The algorithm stops now and the result string is "rgeat" which is s2.
 * As there is one possible scenario that led s1 to be scrambled to s2, we return true.
 *
 * Example 2:
 *
 * Input: s1 = "abcde", s2 = "caebd"
 * Output: false
 *
 * Example 3:
 *
 * Input: s1 = "a", s2 = "a"
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *     s1.length == s2.length
 *     1 <= s1.length <= 30
 *     s1 and s2 consist of lower-case English letters.
 *
 *
 */

const BASE = 32;

export function isScramble(
    s1: string,
    s2: string,
    s1startIndex = 0,
    s1endIndex = s1.length - 1,
    s2startIndex = 0,
    s2endIndex = s2.length - 1,
): boolean {
    // Using a scrolling divider,
    // Hash chars in left & right sections of s2 and check if they match lef of s1
    // if they do, check hashes recursively
    // Time O(n * log(n)) space O(log(n)) (inclusive of stack)
    if (s1startIndex === s1endIndex) {
        return s1[s1startIndex] === s2[s2startIndex];
    }
    let s1Left = BigInt(0);
    let s2Left = BigInt(0);
    let s2Right = BigInt(0);
    for (let i = 0; i < s1endIndex - s1startIndex; i++) {
        s1Left += BigInt(
            Math.pow(BASE, s1.charCodeAt(s1startIndex + i) % BASE),
        );
        s2Left += BigInt(
            Math.pow(BASE, s2.charCodeAt(s2startIndex + i) % BASE),
        );
        if (
            s1Left === s2Left &&
            isScramble(
                s1,
                s2,
                s1startIndex,
                s1startIndex + i,
                s2startIndex,
                s2startIndex + i,
            ) &&
            isScramble(
                s1,
                s2,
                s1startIndex + i + 1,
                s1endIndex,
                s2startIndex + i + 1,
                s2endIndex,
            )
        ) {
            return true;
        }
        s2Right += BigInt(Math.pow(BASE, s2.charCodeAt(s2endIndex - i) % BASE));
        if (
            s1Left === s2Right &&
            isScramble(
                s1,
                s2,
                s1startIndex,
                s1startIndex + i,
                s2endIndex - i,
                s2endIndex,
            ) &&
            isScramble(
                s1,
                s2,
                s1startIndex + i + 1,
                s1endIndex,
                s2startIndex,
                s2endIndex - i - 1,
            )
        ) {
            return true;
        }
    }
    return false;
}
