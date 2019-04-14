import { threeSum } from "./three-sum";

describe("three-sum", () => {
    it("1", () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, 0, 1],
            [-1, -1, 2]
        ]);
    });
});
