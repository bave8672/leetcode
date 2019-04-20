import { firstMissingPositive } from "./first-missing-positive";

describe("first-missing-positive", () => {
    it(`1`, () => {
        expect(firstMissingPositive([-1, 3, 4, 5, 99, 1, 2])).toBe(6);
    });
});
