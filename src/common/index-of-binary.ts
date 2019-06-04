/**
 * Generic method to find the index of an element in a sorted list
 * which satisfies a predicate
 *
 * @param arr the arr being searched
 * @param predicate returns whether an element is a match or not
 * @param searchRight helper to decide whether to search left or right
 * @param startIndex optional minimum restraint on the index
 * @param endIndex optional maximum restraint on the index
 */
export function indexOfBinary<T>(
    arr: T[],
    predicate: (x: T, i: number) => boolean,
    searchRight: (x: T, i: number) => boolean,
    startIndex = 0,
    endIndex = arr.length - 1
): number | undefined {
    if (startIndex > endIndex) {
        return undefined;
    }
    const i = Math.floor((startIndex + endIndex) / 2);
    if (predicate(arr[i], i)) {
        return i;
    } else if (searchRight(arr[i], i)) {
        return indexOfBinary(arr, predicate, searchRight, i + 1, endIndex);
    } else {
        return indexOfBinary(arr, predicate, searchRight, startIndex, i - 1);
    }
}
