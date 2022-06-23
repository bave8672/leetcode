import { solve } from "./surrounded-regions";

describe("surrounded-regions", () => {
    spec([["X"]], [["X"]]);
    spec(
        [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"],
        ],
        [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"],
        ],
    );
    spec(
        [
            ["O", "X", "O"],
            ["X", "O", "X"],
            ["O", "X", "O"],
        ],
        [
            ["O", "X", "O"],
            ["X", "X", "X"],
            ["O", "X", "O"],
        ],
    );
    spec(
        [
            ["O", "X", "X", "O", "X"],
            ["X", "O", "O", "X", "O"],
            ["X", "O", "X", "O", "X"],
            ["O", "X", "O", "O", "O"],
            ["X", "X", "O", "X", "O"],
        ],
        [
            ["O", "X", "X", "O", "X"],
            ["X", "X", "X", "X", "O"],
            ["X", "X", "X", "O", "X"],
            ["O", "X", "O", "O", "O"],
            ["X", "X", "O", "X", "O"],
        ],
    );

    function spec(board: string[][], expected: string[][]) {
        it(`${JSON.stringify({ board, expected })}`, () => {
            solve(board);
            expect(board).toEqual(expected);
        });
    }
});
