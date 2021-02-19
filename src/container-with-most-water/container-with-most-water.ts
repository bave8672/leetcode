/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 *
 * Notice that you may not slant the container.
 *
 *
 *
 * Example 1:
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 *
 * Input: height = [1,1]
 * Output: 1
 *
 * Example 3:
 *
 * Input: height = [4,3,2,1,4]
 * Output: 16
 *
 * Example 4:
 *
 * Input: height = [1,2,1]
 * Output: 2
 *
 */

// store indexes of monotonically increasing heights and check suubsequent heights
// make sure to ignore checking prev heights once the prev max height is higher than the current
// time O(n^2) space O(n)
export function _maxArea(height: number[]): number {
    const monotonicIncreasing: number[] = [];
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (const j of monotonicIncreasing) {
            max = Math.max(max, Math.min(height[j], height[i]) * (i - j));
            if (height[j] >= height[i]) {
                break;
            }
        }
        if (
            monotonicIncreasing.length === 0 ||
            height[i] >
                height[monotonicIncreasing[monotonicIncreasing.length - 1]]
        ) {
            monotonicIncreasing.push(i);
        }
    }
    return max;
}
/**
 * two pointer soln
 * starting at beginning & end
 * move inwards guaranteeing that we choose the larger of te next options at each step
 * time O(n) space O(1)
 */
export function maxArea(height: number[]): number {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
}
