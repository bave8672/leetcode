import { maxCoins } from "./burst-balloons";

describe("burst-balloons", () => {
    spec([1, 6, 8, 3, 4, 6, 4, 7, 9, 8, 0, 6, 2, 8], 3376);

    function spec(input: number[], expected: number) {
        it(`${JSON.stringify({ input, expected })}`, () => {
            expect(maxCoins(input)).toEqual(expected);
        });
    }
});
