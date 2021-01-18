import { maximalRectangle } from "./maximal-rectangle";

describe("maximal-rectangle", () => {
    spec(
        [
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"],
        ],
        6,
    );
    spec([], 0);
    spec([["0"]], 0);
    spec([["1"]], 1);
    spec([["0", "0"]], 0);
    spec([["1", "1"]], 2);
    spec([["1"], ["1"]], 2);
    spec(
        [
            ["1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "0"],
        ],
        9,
    );

    function spec(matrix: string[][], expected: number) {
        it(`${JSON.stringify({ matrix, expect })}`, () => {
            expect(maximalRectangle(matrix)).toEqual(expected);
        });
    }
});
