import { isMatch } from "./wildcard-matching";

describe("wildcard-matching", () => {
    spec("aa", "a", false);
    spec("aa", "*", true);
    spec("aa", "??", true);
    spec("cb", "?a", false);
    spec("cb", "*a", false);
    spec("", "*", true);
    spec("acdcb", "*a*b", true);
    spec("acdcb", "a*c?b", false);
    spec(
        "babaaababaabababbbbbbaabaabbabababbaababbaaabbbaaab",
        "***bba**a*bbba**aab**b",
        false,
    );
    spec(
        "babbbaabbaaaaabbababaaaabbbbbbbbbbabbaaaabbababbabaa",
        "**a****a**b***ab***a*bab",
        false,
    );

    function spec(s: string, p: string, expected: boolean) {
        it(`${JSON.stringify({ s, p, expected })}`, () => {
            expect(isMatch(s, p)).toEqual(expected);
        });
    }
});
