/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 *
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
 *
 *
 *
 *
 * Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 *
 *
 *
 *
 * The largest rectangle is shown in the shaded area, which has area = 10 unit.
 *
 *
 *
 * Example:
 *
 * Input: [2,1,5,6,2,3]
 * Output: 10
 *
 *
 *
 * Example 1:
 *
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The above is a histogram where width of each bar is 1.
 * The largest rectangle is shown in the red area, which has an area = 10 units.
 *
 * Example 2:
 *
 * Input: heights = [2,4]
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *     1 <= heights.length <= 105
 *     0 <= heights[i] <= 104
 *
 *
 */

export function largestRectangleArea(heights: number[]): number {
    /**
     * Stack based solution; keeps track of monotonically increasing heights
     * Time O(n) space O(n)
     */

    // add sentinels to avoid bounds checks
    heights.unshift(0);
    heights.push(0);

    let largest = 0;
    const stack: [number, number][] = []; // [height, i]

    for (let i = 0; i < heights.length; i++) {
        if (!stack.length || stack[stack.length - 1][0] < heights[i]) {
            // append the new increased height to the stack
            stack.push([heights[i], i]);
        } else {
            // calculate heights for prev
            let prev: [number, number] | undefined;
            while (stack[stack.length - 1][0] > heights[i]) {
                prev = stack.pop()!;
                largest = Math.max(largest, prev[0] * (i - prev[1]));
            }
            if (prev) {
                stack.push([heights[i], prev[1]]);
            }
        }
    }

    return largest;
}
