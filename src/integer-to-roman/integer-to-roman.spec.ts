import { intToRoman } from "./integer-to-roman";

describe("integer-to-roman", () => {
    spec(1, "I");
    spec(2, "II");
    spec(3, "III");
    spec(4, "IV");
    spec(5, "V");
    spec(6, "VI");
    spec(7, "VII");
    spec(8, "VIII");
    spec(9, "IX");
    spec(10, "X");
    spec(20, "XX");
    spec(25, "XXV");
    spec(50, "L");
    spec(100, "C");
    spec(500, "D");
    spec(1000, "M");
    spec(2000, "MM");
    spec(1999, "MCMXCIX");
    spec(3999, "MMMCMXCIX");

    function spec(int: number, expected: string) {
        it(`${JSON.stringify({ int, expected })}`, () => {
            expect(intToRoman(int)).toEqual(expected);
        });
    }
});
