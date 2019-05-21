import { sumOfDistancesInTree } from "./sum-of-distances-in-tree";

describe("sum-of-distances-in-tree", () => {
    it(`0`, () =>
        expect(
            sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]),
        ).toEqual([8, 12, 6, 10, 10, 10]));
    it(`1`, () => expect(sumOfDistancesInTree(1, [])).toEqual([0]));
    it(`2`, () => expect(sumOfDistancesInTree(2, [[0, 1]])).toEqual([1, 1]));
    it(`3`, () =>
        expect(sumOfDistancesInTree(3, [[0, 1], [1, 2]])).toEqual([3, 2, 3]));
    it(`4`, () =>
        expect(sumOfDistancesInTree(4, [[0, 1], [0, 2], [0, 3]])).toEqual([
            3,
            5,
            5,
            5,
        ]));
});
