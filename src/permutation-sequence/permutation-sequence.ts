/**
 * https://leetcode.com/problems/permutation-sequence/
 *
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 *
 *     "123"
 *     "132"
 *     "213"
 *     "231"
 *     "312"
 *     "321"
 *
 * Given n and k, return the kth permutation sequence.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 3, k = 3
 * Output: "213"
 *
 * Example 2:
 *
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 * Example 3:
 *
 * Input: n = 3, k = 1
 * Output: "123"
 *
 *
 *
 * Constraints:
 *
 *     1 <= n <= 9
 *     1 <= k <= n!
 */
export function getPermutation(n: number, k: number): string {
    return _getPermutation(buildArr(n), k).join("");
}

/**
 * Recursive solution time O(n) space O(n)
 *
 * Uses the fact that the first digit is repeated (n - 1)! times before changing
 * thr second digit
 *
 * @param n Array of the unused digits, in original order
 * @param k the 0-indexed position of the permutation of the given digits
 */
function _getPermutation(arr: number[], k: number): number[] {
    if (!arr.length) {
        return [];
    }
    const nMinusFact = Factorial.factorial(arr.length - 1);
    const firstDigitIndex = Math.floor((k - 1) / nMinusFact);
    return [
        ...arr.splice(firstDigitIndex, 1),
        ..._getPermutation(arr, k % nMinusFact),
    ];
}

function buildArr(n: number): number[] {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

class Factorial {
    public static factorial(x: number): number {
        if (x <= 1) {
            return 1;
        }
        let memoised = this.memo.get(x);
        if (!memoised) {
            memoised = x * this.factorial(x - 1);
            this.memo.set(x, memoised);
        }
        return memoised;
    }
    private static memo = new Map<number, number>();
}
