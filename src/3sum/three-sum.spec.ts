import { threeSum } from "./three-sum";

xdescribe("three-sum", () => {
    it("1", () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toContainEqual([
            [-1, 0, 1],
            [-1, -1, 2],
        ]);
    });

    it(`2`, () => {
        expect(
            threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]),
        ).toContainEqual([
            [-4, -2, 6],
            [-4, 0, 4],
            [-4, 1, 3],
            [-4, 2, 2],
            [-2, -2, 4],
            [-2, 0, 2],
        ]);
    });
});
