import { largestRectangleArea } from "./largest-rectangle-in-histogram";

describe("largest-rectangle-in-histogram", () => {
    spec([2, 1, 5, 6, 2, 3], 10);
    spec([], 0);
    spec([1], 1);
    spec([1, 1], 2);
    spec([1, 2, 1], 3);
    spec([1, 2, 1, 0, 4], 4);
    spec([2, 1, 2], 3);

    function spec(heights: number[], expected: number) {
        it(`${JSON.stringify({ heights })}`, () => {
            expect(largestRectangleArea(heights)).toEqual(expected);
        });
    }
});
