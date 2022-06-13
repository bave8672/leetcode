import { maxSubArray } from "./maximum-subarray";

describe("maximum-subarray", () => {
    spec([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);

    function spec(nums: number[], expected: number) {
        it(`${JSON.stringify({ nums, expected })}`, () => {
            expect(maxSubArray(nums)).toEqual(expected);
        });
    }
});
