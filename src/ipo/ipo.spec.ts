import { findMaximizedCapital } from "./ipo";

describe(`findMaximizedCapital`, () => {
    it(`0`, () =>
        expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])).toEqual(4));
    it(`1`, () =>
        expect(findMaximizedCapital(2, 0, [1, 2, 3], [1, 1, 1])).toEqual(0));
    it(`2`, () =>
        expect(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 1])).toEqual(6));
    it(`3`, () =>
        expect(findMaximizedCapital(0, 0, [1, 2, 3], [0, 1, 1])).toEqual(0));
    it(`4`, () =>
        expect(findMaximizedCapital(1, 100, [1, 2, 3], [0, 1, 1])).toEqual(
            103,
        ));
    it(`5`, () => expect(findMaximizedCapital(100, 100, [], [])).toEqual(100));
    it(`6`, () =>
        expect(
            findMaximizedCapital(
                10,
                0,
                [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 30],
                [0, 1, 1, 1, 3, 5, 6, 2, 3, 99, 33],
            ),
        ).toEqual(66));
    it(`7`, () =>
        expect(
            findMaximizedCapital(
                10,
                0,
                [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 30, 2, 2, 2],
                [0, 1, 1, 1, 3, 5, 6, 2, 3, 99, 33, 5, 2, 1],
            ),
        ).toEqual(68));
    it(`8`, () =>
        expect(
            findMaximizedCapital(
                100,
                100,
                [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 30, 2, 2, 2, 234, 2, 6, 3],
                [0, 1, 1, 1, 3, 5, 6, 2, 3, 99, 33, 5, 2, 1, 7, 33, 66, 99],
            ),
        ).toEqual(426));
});
