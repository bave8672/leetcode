/**
 * https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 *
 * A string s is called good if there are no two different characters in s that have the same frequency.
 *
 * Given a string s, return the minimum number of characters you need to delete to make s good.
 *
 * The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aab"
 * Output: 0
 * Explanation: s is already good.
 *
 * Example 2:
 *
 * Input: s = "aaabbbcc"
 * Output: 2
 * Explanation: You can delete two 'b's resulting in the good string "aaabcc".
 * Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
 *
 * Example 3:
 *
 * Input: s = "ceabaacb"
 * Output: 2
 * Explanation: You can delete both 'c's resulting in the good string "eabaab".
 * Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
 *
 *
 *
 * Constraints:
 *
 *     1 <= s.length <= 105
 *     s contains only lowercase English letters.
 */

function minDeletions(s) {
    const map = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    const charCounts = Array.from(map.values()).sort((x, y) => x - y);
    let deleteCount = 0;
    const unusedCounts = [[0, 0]];
    for (let i = 0; i < charCounts.length; i++) {
        // calculate the spans of counts that are unused and hence available for others to be deleted down to
        let prevUnusedCountsStart = (charCounts[i - 1] || 0) + 1;
        if (charCounts[i] > prevUnusedCountsStart) {
            unusedCounts.push([prevUnusedCountsStart, charCounts[i] - 1]);
        }
        // calculate deletions necessary to move a letter into an unused slot
        if (charCounts[i] === charCounts[i + 1]) {
            const prevUnusedCountsEnd =
                unusedCounts[unusedCounts.length - 1][1];
            deleteCount += charCounts[i] - prevUnusedCountsEnd;
            if (prevUnusedCountsEnd !== 0) {
                // remove the unused spot
                unusedCounts[unusedCounts.length - 1][1]--;
                // remove the unused range if all are used
                if (
                    unusedCounts[unusedCounts.length - 1][0] >
                    unusedCounts[unusedCounts.length - 1][1]
                ) {
                    unusedCounts.pop();
                }
            }
        }
    }
    return deleteCount;
}

exports.minDeletions = minDeletions;
