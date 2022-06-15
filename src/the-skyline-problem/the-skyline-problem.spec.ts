import { findIdx, getSkyline } from "./the-skyline-problem";

describe("the-skyline-problem", () => {
    spec(
        [
            [2, 9, 10],
            [3, 7, 15],
            [5, 12, 12],
            [15, 20, 10],
            [19, 24, 8],
        ],
        [
            [2, 10],
            [3, 15],
            [7, 12],
            [12, 0],
            [15, 10],
            [20, 8],
            [24, 0],
        ],
    );
    spec(
        [
            [0, 2, 3],
            [2, 5, 3],
        ],
        [
            [0, 3],
            [5, 0],
        ],
    );
    spec(
        [
            [1, 2, 1],
            [1, 2, 2],
            [1, 2, 3],
        ],
        [
            [1, 3],
            [2, 0],
        ],
    );

    function spec(
        buildings: [number, number, number][],
        expected: [number, number][],
    ) {
        it(`${JSON.stringify({ buildings, expected })}`, () => {
            expect(getSkyline(buildings)).toEqual(expected);
        });
    }
});

xdescribe("findIdx", () => {
    spec(-1, [0, 11, 22], -1);
    spec(0, [0, 11, 22], 0);
    spec(10, [0, 11, 22], 0);
    spec(11, [0, 11, 22], 1);
    spec(12, [0, 11, 22], 1);
    spec(22, [0, 11, 22], 2);
    spec(23, [0, 11, 22], 2);
    spec(10, [0, 11, 22], 0);
    spec(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
    spec(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    spec(4, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
    spec(5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

    function spec(value: number, arr: number[], expected: number) {
        it(JSON.stringify({ value, arr, expected }), () => {
            expect(findIdx(value, arr)).toEqual(expected);
        });
    }
});
