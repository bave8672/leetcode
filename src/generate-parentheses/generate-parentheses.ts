/**
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

const memo = new Map<number, string[]>([
    [0, [""]],
    [1, ["()"]],
]);

/**
 * Construct sequences recursively as S = (A)B
 * Where A and B must also be valid (possibly empty) subsequences
 * Iterate over the possible bracket positons and subsequences to build the new sequence
 * Memoize as a simple optimization
 */
export function generateParenthesis(n: number): string[] {
    if (memo.has(n)) {
        return memo.get(n)!;
    }
    const strs: string[] = [];
    for (let c = 0; c < n; c++) {
        for (const left of generateParenthesis(c)) {
            for (const right of generateParenthesis(n - 1 - c)) {
                strs.push(`(${left})${right}`);
            }
        }
    }
    memo.set(n, strs);
    return strs;
}
