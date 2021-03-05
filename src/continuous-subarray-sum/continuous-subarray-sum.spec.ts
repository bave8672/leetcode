import { checkSubarraySum } from "./continuous-subarray-sum";

describe("continuous-subarray-sum", () => {
    spec([4, 2], 6, true);
    spec([23, 2, 4, 6, 7], 6, true);
    spec([23, 2, 6, 4, 7], 6, true);
    spec([23, 2, 4, 6, 7], -6, true);
    spec([0, 0], 0, true);
    spec([0], 0, false);
    spec([0, 0], -1, true);
    spec([23, 2, 4, 0, 0], 0, true);
    spec([23, 2, 6, 4, 7], 0, false);
    spec([0, 1, 0], 0, false);

    function spec(nums: number[], k: number, expected: boolean) {
        it(`${JSON.stringify({ nums, k, expected })}`, () => {
            expect(checkSubarraySum(nums, k)).toEqual(expected);
        });
    }
});
