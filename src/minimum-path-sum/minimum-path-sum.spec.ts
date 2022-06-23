import { minPathSum2 } from "./minimum-path-sum";

describe("minimum-path-sum", () => {
    spec(
        [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ],
        7,
    );

    function spec(grid: number[][], expected: number) {
        for (const impl of [minPathSum2]) {
            it(`${JSON.stringify({ impl: impl.name, grid, expected })}`, () => {
                expect(minPathSum2(grid)).toEqual(expected);
            });
        }
    }
});
