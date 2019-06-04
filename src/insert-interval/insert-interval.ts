import { indexOfBinary } from "../common/index-of-binary";

/**
 * This gets 100% for speed and memory at time of submission :)
 */

/**
 * Given a set of non-overlapping intervals,
 * insert a new interval into the intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their start times.
 */
// tslint:disable-next-line: cognitive-complexity
export function insert(
    intervals: Array<[number, number]>,
    newInterval: [number, number]
): Array<[number, number]> {
    // Handle special case where intervals are empty
    if (intervals.length === 0) {
        return [newInterval];
    }
    // Get the index of the interval to the left of the inserted interval
    // that does not intersect with it
    const precedingIndex = indexOfBinary(
        intervals,
        (interval, i) =>
            interval[1] < newInterval[0] &&
            (!intervals[i + 1] || intervals[i + 1][1] >= newInterval[0]),
        interval => interval[1] < newInterval[0]
    );
    // Get the index of the interval to the right of the inserted interval
    // that does not intersect with it
    const proceedingIndex = indexOfBinary(
        intervals,
        (interval, i) =>
            interval[0] > newInterval[1] &&
            (!intervals[i - 1] || intervals[i - 1][0] <= newInterval[1]),
        interval => interval[0] <= newInterval[1],
        precedingIndex
    );
    // All the in between the two indices therefore intersect with the inserted array
    // we are going to remove them
    // and replace them with a new interval that combines the intersections
    // taking care to handle edge cases such as where the inserted interval
    // lies to the left or right of all existing intervals
    const spliceFrom = precedingIndex !== undefined ? precedingIndex + 1 : 0;
    const spliceCount = Math.max(
        (proceedingIndex !== undefined ? proceedingIndex : intervals.length) -
            (precedingIndex !== undefined ? precedingIndex : -1) -
            1,
        0
    );
    const minIncludedIndex =
        precedingIndex !== undefined
            ? precedingIndex + 1 !== intervals.length
                ? precedingIndex + 1
                : undefined
            : 0;
    const maxIncludedIndex =
        proceedingIndex !== undefined
            ? proceedingIndex - 1 !== -1
                ? proceedingIndex - 1
                : undefined
            : intervals.length - 1;
    const newMin = Math.min(
        minIncludedIndex !== undefined
            ? intervals[minIncludedIndex][0]
            : Number.MAX_SAFE_INTEGER,
        newInterval[0]
    );
    const newMax = Math.max(
        maxIncludedIndex !== undefined
            ? intervals[maxIncludedIndex][1]
            : Number.MIN_SAFE_INTEGER,
        newInterval[1]
    );
    intervals.splice(spliceFrom, spliceCount, [newMin, newMax]);
    return intervals;
}
