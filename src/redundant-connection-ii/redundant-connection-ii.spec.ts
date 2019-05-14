import { findRedundantDirectedConnection } from "./redundant-connection-ii";

describe("redundant-connection-ii", () => {
    it(`0`, () =>
        expect(
            findRedundantDirectedConnection([[1, 2], [1, 3], [2, 3]]),
        ).toEqual([2, 3]));
    it(`1`, () =>
        expect(
            findRedundantDirectedConnection([
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 1],
                [1, 5],
            ]),
        ).toEqual([4, 1]));
    it(`2`, () =>
        expect(findRedundantDirectedConnection([[1, 2], [2, 1]])).toEqual([
            2,
            1,
        ]));
    it(`3`, () =>
        expect(findRedundantDirectedConnection([[2, 1], [1, 2]])).toEqual([
            1,
            2,
        ]));
    it(`4`, () =>
        expect(
            findRedundantDirectedConnection([
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [1, 5],
            ]),
        ).toEqual([1, 5]));
    it(`5`, () =>
        expect(
            findRedundantDirectedConnection([
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [5, 3],
            ]),
        ).toEqual([5, 3]));
    /**
     * ```
     *      1 <- 4
     *     /  ^
     *    v    \
     *    2 -> 3
     * ```
     */
    it(`6`, () =>
        expect(
            findRedundantDirectedConnection([[1, 2], [2, 3], [3, 1], [4, 1]]),
        ).toEqual([3, 1]));
    it(`7`, () => {
        const result = findRedundantDirectedConnection([
            [1, 2],
            [2, 1],
            [3, 1],
        ]);
        expect(result).toEqual([2, 1]);
    });
});
