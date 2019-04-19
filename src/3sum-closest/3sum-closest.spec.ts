import { threeSumClosest } from "./3sum-closest";

describe("3sum-closest", () => {
    it(`1`, () => expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2));
    it(`2`, () => expect(threeSumClosest([0, 2, 1, -3], 1)).toBe(0));
});
