import { permuteUnique } from "./permutations-ii";

describe("permutations-ii", () => {
    spec(
        [1, 2, 3],
        [
            [1, 2, 3],
            [2, 1, 3],
            [2, 3, 1],
            [1, 3, 2],
            [3, 1, 2],
            [3, 2, 1],
        ],
    );

    function spec(nums: number[], expected: number[][]) {
        it(`${JSON.stringify({ nums, expected })}`, () => {
            expect(permuteUnique(nums)).toEqual(expected);
        });
    }
});
