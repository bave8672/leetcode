/**
 * https://leetcode.com/problems/text-justification/
 *
 * Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
 * Output:
 * [
 *   "What   must   be",
 *   "acknowledgment  ",
 *   "shall be        "
 * ]
 * Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
 * Note that the second line is also left-justified becase it contains only one word.
 *
 * Example 3:
 *
 * Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
 * Output:
 * [
 *   "Science  is  what we",
 *   "understand      well",
 *   "enough to explain to",
 *   "a  computer.  Art is",
 *   "everything  else  we",
 *   "do                  "
 * ]
 *
 *
 *
 * Constraints:
 *
 *     1 <= words.length <= 300
 *     1 <= words[i].length <= 20
 *     words[i] consists of only English letters and symbols.
 *     1 <= maxWidth <= 100
 *     words[i].length <= maxWidth
 *
 */

// Sliding window O(n) time O(1) space + whitespace memo
// tslint:disable-next-line: cognitive-complexity
export function fullJustify(words: string[], maxWidth: number): string[] {
    const output: string[] = [];
    let i = 0;
    while (i < words.length) {
        let wordCount = 0;
        let minChars = 0;
        while (
            i < words.length &&
            minChars + (wordCount > 0 ? 1 : 0) + words[i].length <= maxWidth
        ) {
            minChars += (wordCount > 0 ? 1 : 0) + words[i].length;
            wordCount++;
            i++;
        }
        let text = "";
        let spacesToBeAllocated = maxWidth - minChars + wordCount - 1;
        for (let j = 0; j < wordCount; j++) {
            if (j > 0) {
                if (i < words.length) {
                    const spaces = Math.ceil(
                        spacesToBeAllocated / (wordCount - j),
                    );
                    text += Whitespace.whitespace(spaces);
                    spacesToBeAllocated -= spaces;
                } else {
                    text += " ";
                }
            }
            text += words[i - wordCount + j];
        }
        text = text.padEnd(maxWidth, " ");
        output.push(text);
    }
    return output;
}

class Whitespace {
    static memo = new Map<number, string>();
    static whitespace(charlength: number): string {
        let whitespace = this.memo.get(charlength);
        if (!whitespace) {
            whitespace = " ".repeat(charlength);
            this.memo.set(charlength, whitespace);
        }
        return whitespace;
    }
}
