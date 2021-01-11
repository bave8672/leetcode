import { getPermutation } from "./permutation-sequence";

describe("permutation-sequence", () => {
    spec(3, 3, "213");
    spec(4, 9, "2314");
    spec(3, 1, "123");

    function spec(n: number, k: number, expected: string) {
        it(`${JSON.stringify({ n, k, expected })}`, () => {
            expect(getPermutation(n, k)).toEqual(expected);
        });
    }
});
