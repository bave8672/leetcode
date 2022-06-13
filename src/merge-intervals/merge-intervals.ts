/**
 * https://leetcode.com/problems/merge-intervals/
 *
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

/**
 * Sorting O(nlog(n)) time
 */
export function merge(intervals: number[][]): number[][] {
    return intervals
        .sort((a, b) => a[0] - b[0])
        .reduce<number[][]>((acc, curr) => {
            const prev = acc[acc.length - 1];
            if (prev && curr[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], curr[1]);
            } else {
                acc.push(curr);
            }
            return acc;
        }, []);
}
