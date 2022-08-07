import { divide } from "./divide-two-integers";

describe("divide-two-integers", () => {
    [divide].forEach((d) => {
        spec(1, 1, 1);
        spec(-1, -1, 1);
        spec(2, 2, 1);
        spec(10, 5, 2);
        spec(10, -5, -2);
        spec(5, 10, 0);
        spec(100, 3, 33);
        spec(425, 25, 17);
        spec(425, 25, 17);
        spec(425, 18, 23);
        spec(425, 1, 425);
        spec(-425, -1, 425);
        spec(-2147483648, -1, 2147483647);
        spec(-2147483648, 1, -2147483648);

        function spec(dividend: number, divisor: number, expected: number) {
            it(`${JSON.stringify({ dividend, divisor, expected })}`, () => {
                expect(d(dividend, divisor)).toEqual(expected);
            });
        }
    });
});
