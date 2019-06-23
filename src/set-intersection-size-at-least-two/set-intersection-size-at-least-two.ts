/**
 * # 757. Set Intersection Size At Least Two
 * An integer interval [a, b] (for integers a < b) is a set of all consecutive integers from a to b, including a and b.
 *
 * Find the minimum size of a set S such that for every integer interval A in intervals,
 * the intersection of S with A has size at least 2.
 *
 * Example 1:
 *
 * ```
 * Input: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
 * Output: 3
 * Explanation:
 * Consider the set S = {2, 3, 4}.  For each interval, there are at least 2 elements from S in the interval.
 * Also, there isn't a smaller size set that fulfills the above condition.
 * Thus, we output the size of this set, which is 3.
 * ```
 * Example 2:
 * ```
 * Input: intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
 * Output: 5
 * Explanation:
 * An example of a minimum sized set is {1, 2, 3, 4, 5}.
 * ```
 * Note:
 * ```
 *     intervals will have length in range [1, 3000].
 *     intervals[i] will have length 2, representing some integer interval.
 *     intervals[i][j] will be an integer in [0, 10^8].
 * ```
 */
export function intersectionSizeTwo(
    intervals: Array<[number, number]>,
): number {
    let highest = Number.NEGATIVE_INFINITY;
    let secondHighest = Number.NEGATIVE_INFINITY;
    /**
     * Sort the intervals by ending index
     * Then keep track of the highest two numbers in our set
     * iterate through the sorted intervals as follows:
     *
     * O(nlogn), bottleneck is the sorting
     */
    return intervals
        .sort((a, b) => a[1] - b[1])
        .reduce((sum, interval) => {
            if (interval[0] > secondHighest) {
                // Our set does not contain any numbers high enough to hit this interval
                // Therefore add the two highest numbers of the interval to our set
                // these become the new highest numbers
                secondHighest = interval[1];
                highest = interval[1] - 1;
                return sum + 2;
            } else if (interval[0] > highest) {
                // Only the highest number in our set falls inside this interval
                // We will add the highest number of the interval to our set
                highest = secondHighest;
                secondHighest = interval[1];
                return sum + 1;
            }
            // Else the interval is already intersected twice by our set
            // as it's lower bound falls below the two highest elements of our set
            // and its highest bound must be above them due to the list sorting
            return sum;
        }, 0);
}
