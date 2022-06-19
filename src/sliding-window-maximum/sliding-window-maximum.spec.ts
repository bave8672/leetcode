import { maxSlidingWindow } from "./sliding-window-maximum";

describe("sliding-window-maximum", () => {
    spec([1], 1, [1]);
    spec([1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]);

    function spec(nums: number[], k: number, expected: number[]) {
        it(`${JSON.stringify({ nums, k, expected })}`, () => {
            expect(maxSlidingWindow(nums, k)).toEqual(expected);
        });
    }
});
