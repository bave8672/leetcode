/**
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * <problem description>
 */

export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let prefix = "";
    let charIndex = 0;
    let testChar = strs[0][0];
    let i = 1;
    // horizontal scan O(n * l) where n = strs.length & l = length of shortest word
    while (
        i < strs.length &&
        testChar !== undefined &&
        testChar === strs[i][charIndex]
    ) {
        if (i === strs.length - 1) {
            prefix += testChar;
            charIndex++;
            i = 1;
            testChar = strs[0][charIndex];
        } else {
            i++;
        }
    }
    return prefix;
}
