import { longestConsecutive } from "./longest-consecutive-sequence";

describe("longest-consecutive-sequence", () => {
    spec([], 0);
    spec([0], 1);
    spec([1, 2, 0, 1], 3);
    spec([100, 4, 200, 1, 3, 2], 4);
    spec([0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9);

    function spec(nums: number[], expected: number) {
        it(`${JSON.stringify({ nums })}`, () => {
            expect(longestConsecutive(nums)).toEqual(expected);
        });
    }
});
