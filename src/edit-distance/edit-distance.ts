/**
 * # 72. Edit Distance
 *
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 *
 * You have the following 3 operations permitted on a word:
 *
 *     1. Insert a character
 *     2. Delete a character
 *     3. Replace a character
 *
 * ### Example 1:
 * ```
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * ```
 * ### Example 2:
 * ```
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * ```
 */
export function minDistance(word1: string, word2: string): number {
    /**
     * This solution is mostly copied from https://leetcode.com/problems/edit-distance/discuss/25846/
     *
     * To apply DP, we define the state dp[i][j]
     * to be the minimum number of operations to convert word1[0..i) to word2[0..j).
     *
     * For the base case, that is, to convert a string to an empty string,
     * the mininum number of operations (deletions)
     * is just the length of the string. So we have dp[i][0] = i and dp[0][j] = j.
     *
     * For the general case to convert word1[0..i) to word2[0..j),
     * we break this problem down into sub-problems.
     * Suppose we have already known how to convert word1[0..i - 1) to word2[0..j - 1) (dp[i - 1][j - 1]),
     * f word1[i - 1] == word2[j - 1], then no more operation is needed and dp[i][j] = dp[i - 1][j - 1].
     *
     * If word1[i - 1] != word2[j - 1], we need to consider three cases.
     *
     *     1. Replace word1[i - 1] by word2[j - 1] (dp[i][j] = dp[i - 1][j - 1] + 1);
     *     2. If word1[0..i - 1) = word2[0..j)
     *        then delete word1[i - 1] (dp[i][j] = dp[i - 1][j] + 1);
     *     3. If word1[0..i) + word2[j - 1] = word2[0..j)
     *        then insert word2[j - 1] to word1[0..i) (dp[i][j] = dp[i][j - 1] + 1).
     *
     * So when word1[i - 1] != word2[j - 1], dp[i][j] will just be the minimum of the above three cases.
     */
    const memo: number[][] = [];
    for (let i = 0; i < word1.length + 1; i++) {
        memo[i] = [i];
    }
    for (let j = 0; j < word2.length + 1; j++) {
        memo[0][j] = j;
    }
    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length + 1; j++) {
            memo[i][j] =
                word1[i - 1] === word2[j - 1]
                    ? memo[i - 1][j - 1]
                    : Math.min(
                          1 + memo[i - 1][j - 1],
                          1 + memo[i][j - 1],
                          1 + memo[i - 1][j],
                      );
        }
    }
    return memo[word1.length][word2.length];
}
