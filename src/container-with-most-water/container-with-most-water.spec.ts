import { maxArea } from "./container-with-most-water";

describe("container-with-most-water", () => {
    spec([], 0);
    spec([1, 1], 1);
    spec([4, 3, 2, 1, 4], 16);
    spec([1, 2, 1], 2);

    function spec(height: number[], expected: unknown) {
        it(`${JSON.stringify({ height, expected })}`, () => {
            expect(maxArea(height)).toEqual(expected);
        });
    }
});
