import { findRepeatedDnaSequences } from "./repeated-dna-sequences";

describe("repeated-dna-sequences", () => {
    spec("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC", "CCCCCAAAAA"]);
    spec("AAAAAAAAAAAAA", ["AAAAAAAAAA"]);
    spec("AAAAAAAAAAA", ["AAAAAAAAAA"]);

    function spec(input: any, expected: any) {
        it(`${JSON.stringify({ input, expected })}`, () => {
            const res = findRepeatedDnaSequences(input);
            expect(res).toEqual(expect.arrayContaining(expected));
            expect(res.length).toEqual(expected.length);
        });
    }
});
