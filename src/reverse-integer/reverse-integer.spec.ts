import { reverse } from "./reverse-integer";

describe("reverse-integer", () => {
    spec(123, 321);
    spec(-123, -321);
    spec(120, 21);
    spec(0, 0);

    function spec(x: number, expected: number) {
        it(`should transform ${x} into ${expected}`, () => {
            expect(reverse(x)).toEqual(expected);
        });
    }
});
