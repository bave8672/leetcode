import { checkWays } from "./number-of-ways-to-reconstruct-a-tree";

describe("number-of-ways-to-reconstruct-a-tree", () => {
    spec(
        [
            [1, 2],
            [2, 3],
        ],
        1,
    );
    spec(
        [
            [1, 2],
            [2, 3],
            [1, 3],
        ],
        2,
    );
    spec(
        [
            [1, 2],
            [2, 3],
            [2, 4],
            [1, 5],
        ],
        0,
    );
    spec(
        [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [1, 7],
            [2, 3],
            [2, 4],
            [2, 6],
            [2, 7],
            [3, 4],
            [3, 7],
        ],
        1,
    );
    spec(
        [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [1, 7],
            [1, 8],
            [2, 3],
            [2, 4],
            [2, 6],
            [2, 7],
            [2, 8],
            [3, 4],
            [3, 7],
            [3, 8],
            [4, 8],
        ],
        2,
    );
    spec(
        [
            [3, 4],
            [2, 3],
            [4, 5],
            [2, 4],
            [2, 5],
            [1, 5],
            [1, 4],
        ],
        0,
    );
    spec(
        [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [2, 3],
            [2, 4],
            [4, 5],
        ],
        0,
    );
    spec([], 0);

    function spec(pairs: number[][], expected: number) {
        it(`${JSON.stringify({ pairs, expected })}`, () => {
            expect(checkWays(pairs)).toEqual(expected);
        });
    }
});
