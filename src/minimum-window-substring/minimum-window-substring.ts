/**
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".
 *
 * Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 *
 * Example 2:
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 *
 *
 *
 * Constraints:
 *
 *     1 <= s.length, t.length <= 105
 *     s and t consist of English letters.
 *
 *
 * Follow up: Could you find an algorithm that runs in O(n) time?
 */

export function minWindow(s: string, t: string): string {
    // sliding window time O(n) space O(t)
    // relies on valid window [i ... j] implying [i - 1 ... j] is also valid
    const charset = new CharSet(t);
    let smallest = "";
    let start = 0;
    let end = 0;
    while (end < s.length) {
        // starting from the left, increment the end
        // until we get all the letters
        while (!charset.isComplete && end < s.length) {
            charset.add(s[end]);
            end++;
        }
        if (charset.isComplete) {
            // increment start until it is no longer a match
            while (charset.isComplete) {
                charset.evict(s[start]);
                start++;
            }
            if (!smallest || end - start + 1 < smallest.length) {
                smallest = s.substring(start - 1, end);
            }
        }
    }
    return smallest;
}

class CharSet {
    private readonly requiredChars = new Map<string, number>();
    private readonly charCount = new Map<string, number>();
    private satisfiedChars = 0;

    public isComplete = false;

    constructor(chars: string) {
        for (const char of chars) {
            this.requiredChars.set(
                char,
                (this.requiredChars.get(char) || 0) + 1,
            );
            this.charCount.set(char, 0);
        }
    }

    public add(char: string) {
        if (this.charCount.has(char)) {
            const initialCount = this.charCount.get(char)!;
            this.charCount.set(char, initialCount + 1);
            if (initialCount === this.requiredChars.get(char)! - 1) {
                this.satisfiedChars++;
                this.isComplete =
                    this.satisfiedChars === this.requiredChars.size;
            }
        }
    }

    public evict(char: string) {
        if (this.charCount.has(char)) {
            const initialCount = this.charCount.get(char)!;
            this.charCount.set(char, Math.max(0, initialCount - 1));
            if (initialCount === this.requiredChars.get(char)!) {
                this.satisfiedChars--;
                this.isComplete = false;
            }
        }
    }
}
