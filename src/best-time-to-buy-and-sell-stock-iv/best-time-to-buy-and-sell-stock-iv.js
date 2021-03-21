/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
 *
 * Find the maximum profit you can achieve. You may complete at most k transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 */

function maxProfit(k, prices) {
    if (prices.length === 0) {
        return 0;
    }
    return _maxProfit(k * 2, prices, 0, []);
}

// helper function with a memo, where k represents remaining buys AND sells
// space O(n*k), same time due to memo
function _maxProfit(k, prices, i, dp) {
    if (!dp[k]) {
        dp[k] = [];
    } else if (dp[k][i] !== undefined) {
        return dp[k][i];
    }
    if (k <= 0) {
        return 0;
    }
    if (i === prices.length - 1) {
        return k % 2 ? prices[i] : 0;
    }
    dp[k][i] = Math.max(
        _maxProfit(k, prices, i + 1, dp), // do nothing
        k % 2
            ? _maxProfit(k - 1, prices, i + 1, dp) + prices[i] // sell
            : _maxProfit(k - 1, prices, i + 1, dp) - prices[i], // buy
    );
    return dp[k][i];
}

const p1 = maxProfit(2, [2, 4, 1]); // 2
const q2 = maxProfit(2, [3, 2, 6, 5, 0, 3]); // 7

debugger;
