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
