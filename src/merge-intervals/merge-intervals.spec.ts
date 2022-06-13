import { mergeIntervals } from "./merge-intervals";

describe("merge-intervals", () => {
    spec();

    function spec(in: unknown, expected: unknown) {
        it(`${JSON.stringify({ args })}`, () => {
            expect(mergeIntervals(in)).toEqual(expected);
        });
    }
})