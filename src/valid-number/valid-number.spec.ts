import { isNumber } from "./valid-number";

describe("valid number", () => {
    ([
        ["0", true],
        ["99999999999999", true],
        ["1.1", true],
        ["1.1.1", false],
        ["abc", false],
        ["1 a", false],
        ["90e3", true],
        ["-90e3", true],
        ["+90e3", true],
        ["6e-3", true],
        ["6e-3", true],
        [" 99e2.5", false],
        ["    44 ", true],
        ["95a54e53", false],
        ["", false],
        [" ", false],
        ["90.43563245354e35", true],
        ["1e3e3", false],
        ["+-1", false],
        ["++2", false],
        ["--3", false],
        ["-0", true],
        [".1", true],
        [".1e-1", true],
        ["-.1e-1", true],
        [".1e-1.5", false],
        ["3.", true],
        ["3.e-1", true],
        ["-3.e-1", true],
        ["3.e-1.5", false],
        ["+51.e-15", true],
        [".0e+15", true],
    ] as Array<[string, boolean]>).forEach(([input, expected]) =>
        test(input, expected),
    );
    function test(input: string, expected: boolean) {
        it(JSON.stringify({ input, expected }), () =>
            expect(isNumber(input)).toBe(expected),
        );
    }
});
