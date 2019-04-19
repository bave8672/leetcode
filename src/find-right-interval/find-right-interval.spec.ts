import { findRightInterval } from "./find-right-interval";

describe("find right interval", () => {
    it(`2`, () =>
        expect(findRightInterval([[3, 4], [2, 3], [1, 2]])).toEqual([
            -1,
            0,
            1,
        ]));

    it(`3`, () =>
        expect(
            findRightInterval([
                [1, 12],
                [2, 9],
                [3, 10],
                [13, 14],
                [15, 16],
                [16, 17],
            ]),
        ).toEqual([3, 3, 3, 4, 5, -1]));
});
