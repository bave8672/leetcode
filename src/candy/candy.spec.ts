import { candy } from "./candy";

describe("candy", () => {
    spec([1], 1);
    spec([1, 1], 2);
    spec([1, 0, 2], 5);
    spec([1, 2, 2], 4);
    spec([1, 2, 2], 4);
    spec([5, 3, 6, 9, 4], 9);
    spec([1, 3, 2, 2, 1], 7);
    spec([2, 0, 1, 2], 8);

    function spec(ratings: number[], expected: number) {
        it(`${JSON.stringify({ ratings, expected })}`, () => {
            expect(candy(ratings)).toEqual(expected);
        });
    }
});
