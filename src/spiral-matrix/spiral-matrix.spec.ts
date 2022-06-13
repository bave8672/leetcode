import { spiralOrder } from "./spiral-matrix";

describe("spiral-matrix", () => {
    spec(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        [1, 2, 3, 6, 9, 8, 7, 4, 5],
    );
    spec(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ],
        [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    );
    spec(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    );

    function spec(matrix: number[][], expected: number[]) {
        it(`${JSON.stringify({ matrix, expected })}`, () => {
            expect(spiralOrder(matrix)).toEqual(expected);
        });
    }
});
