const { fourSum } = require("./4sum");

describe("4sum", () => {
    // spec([1, 0, -1, 0, -2, 2], 0, [
    //     [-2, -1, 1, 2],
    //     [-2, 0, 0, 2],
    //     [-1, 0, 0, 1],
    // ]);
    spec([-2, -1, -1, 1, 1, 2, 2], 0, [
        [-2, -1, 1, 2],
        [-1, -1, 1, 1],
    ]);

    function spec(nums, target, expected) {
        it(`${JSON.stringify({ nums, target, expected })}`, () => {
            expect(fourSum(nums, target)).toEqual(expected);
        });
    }
});
