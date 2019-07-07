import { minDistance } from "./edit-distance";

describe(`edit-distance`, () => {
    it(`1`, () => expect(minDistance("horse", "ros")).toBe(3));
    it(`2`, () => expect(minDistance("intention", "execution")).toBe(5));
    it(`3`, () => expect(minDistance("", "")).toBe(0));
    it(`4`, () => expect(minDistance("a", "")).toBe(1));
    it(`5`, () => expect(minDistance("abcde", "xyx")).toBe(5));
    it(`6`, () => expect(minDistance("feet", "fleets")).toBe(2));
    it(`7`, () =>
        expect(
            minDistance(
                "asdvasdvasdasdbwrtnyrumjnsdfbtrmjrefbvaefv",
                "rsadcasdvsrgbsgntjmdfgbsgnmryumgbsgnfyhnrsgbos",
            ),
        ).toBe(35));
    it(`8`, () => expect(minDistance("zzzzzzzz", "fleets")).toBe(8));
    it(`10`, () => expect(minDistance("a", "b")).toBe(1));
    it(`11`, () => expect(minDistance("abc", "bca")).toBe(2));
    it(`12`, () => expect(minDistance("bca", "abc")).toBe(2));
    it(`12`, () => expect(minDistance("abcdefg", "gfedcba")).toBe(6));
    it(`13`, () => expect(minDistance("", "a")).toBe(1));
});
