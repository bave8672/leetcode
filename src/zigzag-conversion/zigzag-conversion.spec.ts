import { convert } from "./zigzag-conversion";

describe("zigzag-conversion", () => {
    spec("PAYPALISHIRING", 3, "PAHNAPLSIIGYIR");
    spec("PAYPALISHIRING", 4, "PINALSIGYAHRPI");
    spec("A", 1, "A");

    function spec(s: string, n: number, expected: string) {
        it(`${JSON.stringify({ s, expected })}`, () => {
            expect(convert(s, n)).toEqual(expected);
        });
    }
});
