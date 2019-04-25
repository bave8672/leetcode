import { trap } from "./trapping-rain-water";

describe(`trapping rain water`, () => {
    it(`1`, () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });
    it(`2`, () => {
        expect(trap([])).toBe(0);
    });
    it(`3`, () => {
        expect(trap([100])).toBe(0);
    });
    it(`4`, () => {
        expect(trap([100, 0])).toBe(0);
    });
    it(`5`, () => {
        expect(trap([100, 1, 2, 3])).toBe(3);
    });
    it(`5`, () => {
        expect(trap([100, 3, 2, 1])).toBe(0);
    });
});
