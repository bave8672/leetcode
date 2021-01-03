import { uniquePaths } from "./unique-paths";

describe("unique-paths", () => {
    spec(7, 3, 28);
    spec(3, 7, 28);
    spec(3, 2, 3);
    spec(3, 3, 6);

    function spec(m: number, n: number, expected: number) {
        it(`m: ${m}, n: ${n}, expected: ${expected}`, () => {
            expect(uniquePaths(m, n)).toBe(expected);
        });
    }
});
