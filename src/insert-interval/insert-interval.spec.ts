import { insert } from "./insert-interval";

describe("insert-interval", () => {
    it("0", () =>
        expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]));
    it("2", () =>
        expect(
            insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
        ).toEqual([[1, 2], [3, 10], [12, 16]]));
    it("3", () => expect(insert([], [-2, -1])).toEqual([[-2, -1]]));
    it("4", () =>
        expect(
            insert(
                [[Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]],
                [-2, -1]
            )
        ).toEqual([[Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]]));
    it("5", () => expect(insert([[1, 5]], [6, 8])).toEqual([[1, 5], [6, 8]]));
    it("6", () =>
        expect(insert([[2, 5], [6, 7], [8, 9]], [0, 1])).toEqual([
            [0, 1],
            [2, 5],
            [6, 7],
            [8, 9]
        ]));
    it("7", () =>
        expect(
            insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [1, 16])
        ).toEqual([[1, 16]]));
    it("8", () =>
        expect(
            insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [2, 12])
        ).toEqual([[1, 16]]));
    it("9", () =>
        expect(
            insert([[2, 3], [5, 5], [6, 6], [7, 7], [8, 11]], [6, 13])
        ).toEqual([[2, 3], [5, 5], [6, 13]]));
    it("10", () =>
        expect(insert([[1, 1], [3, 3]], [2, 2])).toEqual([
            [1, 1],
            [2, 2],
            [3, 3]
        ]));
    it("11", () => expect(insert([[1, 1], [2, 2]], [1, 2])).toEqual([[1, 2]]));
});
