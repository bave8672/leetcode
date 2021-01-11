import { fullJustify } from "./text-justification";

describe("text-justification", () => {
    spec(["What", "must", "be", "acknowledgment", "shall", "be"], 16, [
        "What   must   be",
        "acknowledgment  ",
        "shall be        ",
    ]);

    spec(
        [
            "Science",
            "is",
            "what",
            "we",
            "understand",
            "well",
            "enough",
            "to",
            "explain",
            "to",
            "a",
            "computer.",
            "Art",
            "is",
            "everything",
            "else",
            "we",
            "do",
        ],
        20,
        [
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  ",
        ],
    );

    spec(["Listen", "to", "many,", "speak", "to", "a", "few."], 6, [
        "Listen",
        "to    ",
        "many, ",
        "speak ",
        "to   a",
        "few.  ",
    ]);

    function spec(words: string[], maxWidth: number, expected: unknown) {
        it(`${JSON.stringify({ words, maxWidth, expected })}`, () => {
            expect(fullJustify(words, maxWidth)).toEqual(expected);
        });
    }
});
