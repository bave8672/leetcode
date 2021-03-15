/**
 * https://leetcode.com/problems/word-break-ii/
 *
 * Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * Output: ["cats and dog","cat sand dog"]
 *
 * Example 2:
 *
 * Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
 * Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 *
 * Example 3:
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *     1 <= s.length <= 20
 *     1 <= wordDict.length <= 1000
 *     1 <= wordDict[i].length <= 10
 *     s and wordDict[i] consist of only lowercase English letters.
 *     All the strings of wordDict are unique.
 */

function wordBreak(s, wordDict) {
    return _wordBreak(s, 0, new Set(wordDict));
}

function _wordBreak(s, offset, dict) {
    const sentences = [];
    let word = "";
    while (offset < s.length) {
        word += s[offset];
        offset++;
        if (dict.has(word)) {
            if (offset === s.length) {
                sentences.push(word);
            } else {
                sentences.push(
                    ..._wordBreak(s, offset, dict).map(
                        (sentence) => `${word} ${sentence}`,
                    ),
                );
            }
        }
    }
    return sentences;
}

exports.wordBreak = wordBreak;
