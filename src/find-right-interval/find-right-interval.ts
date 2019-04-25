/**
 * Given a set of intervals,
 * for each of the interval i,
 * check if there exists an interval j
 * whose start point is bigger than or equal to the end point of the interval i,
 * which can be called that j is on the "right" of i.
 *
 * For any interval i,
 * you need to store the minimum interval j's index,
 * \which means that the interval j
 * has the minimum start point to
 * build the "right" relationship for interval i.
 *
 * If the interval j doesn't exist,
 * store -1 for the interval i.
 *
 * Finally, you need output the stored value of each interval as an array.
 *
 * Note:
 *
 *     You may assume the interval's end point is always bigger than its start point.
 *     You may assume none of these intervals have the same start point.
 *
 */
export const findRightInterval = (intervals: Array<[number, number]>) => {
    const result: number[] = [];
    const map = new Map();
    intervals.forEach((interval, index) => map.set(interval, index));
    const sortedLeft = intervals.slice().sort((a, b) => a[0] - b[0]);
    // find smallest left
    sortedLeft.forEach((interval, index) => {
        let j = sortedLeft.length - 1;
        let i = Math.min(index + 1, j);
        while (i < j) {
            if (sortedLeft[i][0] === interval[1]) {
                result[map.get(interval)] = map.get(sortedLeft[i]);
                return;
            }
            const p = Math.floor((i + j) / 2);
            if (sortedLeft[p][0] === interval[1]) {
                result[map.get(interval)] = map.get(sortedLeft[p]);
                return;
            } else if (sortedLeft[p][0] < interval[1]) {
                i = Math.max(p, i + 1);
            } else if (sortedLeft[p][0] > interval[1]) {
                j = Math.min(p, j - 1);
            }
        }
        if (sortedLeft[i][0] >= interval[1]) {
            result[map.get(interval)] = map.get(sortedLeft[i]);
            return;
        }

        result[map.get(interval)] = -1;
    });

    return result;
};
