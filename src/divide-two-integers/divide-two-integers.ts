/**
 * https://leetcode.com/problems/divide-two-integers/
 *
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 *
 * The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
 *
 *
 *
 * Example 1:
 *
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * Explanation: 10/3 = 3.33333.. which is truncated to 3.
 * Example 2:
 *
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 *
 *
 * Constraints:
 *
 * -231 <= dividend, divisor <= 231 - 1
 * divisor != 0
 */

/**
 * Long division implementation
 *
 * Time O(log^2(n))
 * Space O(log(n))
 */
export function divide(
    dividend: number,
    divisor: number,
    negative = false,
): number {
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        return -divide(Math.abs(dividend), Math.abs(divisor), true);
    } else if (dividend < 0 && divisor < 0) {
        return divide(Math.abs(dividend), Math.abs(divisor));
    }
    let dividendStr = dividend.toString();
    let quotient = 0;
    // O(log(n))
    for (let i = 0; i < dividendStr.length; i++) {
        // O(log(n))
        const currDividendStr = dividendStr.slice(0, i + 1);
        const currDividendStrNum = Number.parseInt(currDividendStr, 10);
        // O(1) as n < 100
        const partial = naiiveDivide(currDividendStrNum, divisor);
        const suffix = "".padStart(dividendStr.length - 1 - i, "0");
        dividend -= Number.parseInt(currDividendStr + suffix, 10);
        dividend += Number.parseInt(partial.remainder + suffix, 10);
        quotient += Number.parseInt(partial.quotient + suffix, 10);
        dividendStr = dividend.toString().padStart(dividendStr.length, "0");
    }
    return Math.min(quotient, negative ? 2147483648 : 2147483647);
}

/**
 * Subtracts the dividend from the divisor
 * O(dividend/divisor) = O(n)
 */
function naiiveDivide(
    dividend: number,
    divisor: number,
): { quotient: number; remainder: number } {
    let quotient = 0;
    while (divisor <= dividend) {
        dividend -= divisor;
        quotient++;
    }
    return { quotient, remainder: dividend };
}
