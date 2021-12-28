import { nextPermutation } from "./next-permutation";

describe("next-permutation", () => {
    spec([1, 2, 3], [1, 3, 2]);
    spec([3, 2, 1], [1, 2, 3]);
    spec([1, 1, 5], [1, 5, 1]);
    spec([1, 9, 1, 9], [1, 9, 9, 1]);
    spec([1, 9, 3, 2], [2, 1, 3, 9]);
    spec([1, 9, 3, 2, 1], [2, 1, 1, 3, 9]);
    spec([9, 1, 9, 3, 2], [9, 2, 1, 3, 9]);

    function spec(nums: number[], expected: number[]) {
        it(`${JSON.stringify({ nums })}`, () => {
            nextPermutation(nums);
            expect(nums).toEqual(expected);
        });
    }
});
