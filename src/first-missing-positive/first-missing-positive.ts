// initial submission O(n) time and space
export function firstMissingPositive(nums: number[]) {
    const accounted: any = [true];
    nums.forEach((n, i) => {
        accounted[i + 1] = accounted[i + 1] ? true : undefined;
        if (n > 0) {
            accounted[n] = true;
        }
    });
    accounted.push(undefined);
    return accounted.indexOf(undefined);
}
