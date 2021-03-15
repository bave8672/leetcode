/**
 * https://leetcode.com/problems/max-points-on-a-line/
 *
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane,
 * return the maximum number of points that lie on the same straight line.
 */

// for each point, check slope between other points
// points with same slope must be on same line
// Time O(n^2) space O(n)
function maxPoints(points) {
    return points.reduce((max, point, i) => {
        const map = {};
        for (let j = i + 1; j < points.length; j++) {
            let m = (points[j][1] - point[1]) / (points[j][0] - point[0]);
            if (m === Number.NEGATIVE_INFINITY) {
                m = Number.POSITIVE_INFINITY;
            }
            map[m] = map[m] + 1 || 2;
        }
        return Math.max(max, ...Object.values(map));
    }, 1);
}
