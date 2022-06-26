/**
 * https://leetcode.com/problems/expression-add-operators/
 *
 * Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.
 *
 * Note that operands in the returned expressions should not contain leading zeros.
 */

/**
 * Backtracking - trick is to keep track of the multiplier from previous calculations
 */
export function addOperators(
    num: string,
    target: number,
    i = 0,
    j = i,
    mult = 1,
): string[] {
    const ns = num.substring(i, j + 1);
    const n = Number.parseInt(ns);
    if (j === num.length - 1) {
        return n * mult === target ? [ns] : [];
    }
    return [
        ...(i === j && n === 0
            ? [] // Disallow leading 0s
            : addOperators(num, target, i, j + 1, mult)), // incude next digit in number
        ...addOperators(num, target - n * mult, j + 1, j + 1, 1).map(
            (s) => `${ns}+${s}`,
        ), // Ad next number
        ...addOperators(num, target - n * mult, j + 1, j + 1, -1).map(
            (s) => `${ns}-${s}`,
        ), // Subtract next number
        ...addOperators(num, target, j + 1, j + 1, mult * n).map(
            (s) => `${ns}*${s}`,
        ),
    ];
}
