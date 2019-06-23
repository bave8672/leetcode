import { intersectionSizeTwo } from "./set-intersection-size-at-least-two";

describe("intersectionSizeTwo", () => {
    it(`leetcode example`, () =>
        expect(intersectionSizeTwo([[1, 3], [1, 4], [2, 5], [3, 5]])).toBe(3));
    it(`leetcode example reordered`, () =>
        expect(intersectionSizeTwo([[2, 5], [1, 4], [3, 5], [1, 3]])).toBe(3));
    it(`empty list case`, () => expect(intersectionSizeTwo([])).toBe(0));
    it(`negative numbers`, () =>
        expect(intersectionSizeTwo([[-100, -1]])).toBe(2));
    it(`duplicate`, () =>
        expect(intersectionSizeTwo([[-1, 0], [-1, 0]])).toBe(2));
    it(`triplicate`, () =>
        expect(intersectionSizeTwo([[-1, 0], [-1, 0], [-1, 0]])).toBe(2));
    it(`single number overlaps`, () =>
        expect(intersectionSizeTwo([[0, 1], [1, 2], [2, 20], [20, 30]])).toBe(
            5,
        ));
    it(`random test`, () =>
        expect(
            intersectionSizeTwo([
                [1, 2],
                [100, 200],
                [3, 4],
                [4, 5],
                [4, 9],
                [4, 99],
                [-111, 44],
                [99, 100],
                [0, 26],
                [-99, 88],
            ]),
        ).toBe(8));
    it(`leetcode test case`, () =>
        expect(
            intersectionSizeTwo([[0, 3], [4, 5], [1, 3], [0, 2], [1, 5]]),
        ).toBe(4));
    it(`leetcode test case 2`, () =>
        expect(
            intersectionSizeTwo([
                [0, 10],
                [0, 2],
                [2, 10],
                [0, 6],
                [0, 5],
                [4, 8],
                [0, 3],
                [6, 8],
                [1, 10],
                [0, 1],
            ]),
        ).toBe(4));
});
