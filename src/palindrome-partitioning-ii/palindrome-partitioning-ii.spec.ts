import { minCut } from "./palindrome-partitioning-ii";

describe("palindrome-partitioning-ii", () => {
    spec("aa", 0);
    spec("aab", 1);
    spec("abb", 1);
    spec("a", 0);
    spec("ab", 1);
    spec("ababbb", 1);
    spec("aabbba", 1);
    spec("abcbd", 2);
    spec("aba", 0);
    spec("abaaba", 0);
    spec("abcba", 0);
    spec("abcba", 0);
    spec("abacaba", 0);
    spec("aabbaa", 0);
    spec("aababaa", 0);
    spec("abababa", 0);
    spec("aab", 1);
    spec("abbc", 2);
    spec("abbb", 1);
    spec("bbbc", 1);
    spec("abbbc", 2);
    spec("abcabcccbacba", 0);
    spec("abcabcxcbacba", 0);
    spec("abcdcbaxyzzyx", 1);
    spec("aaba", 1);
    spec("aabaa", 0);
    spec("aaabaa", 1);
    spec("aabaaa", 1);
    spec("abcd", 3);
    spec("fifgbea", 4);
    spec("blahblah", 7);
    spec("bhbdbfbf", 3);
    spec("bhbdb", 2);
    spec("hbdb", 1);
    spec("hbdb", 1);
    spec("hbdbfbf", 2);
    spec("abaxyzyz", 3);
    spec("abaxacac", 3);
    spec(
        "fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi",
        75,
    );
    spec("xbab", 1);
    spec("xbaab", 1);
    spec("xbaaab", 1);
    spec("xbaaaab", 1);
    spec("xbaaaaab", 1);
    spec("xbaaaaaab", 1);
    spec("xbaaaaaaab", 1);
    spec("abab", 1);
    spec("abaab", 1);
    spec("abaaab", 1);
    spec("abaaaab", 1);
    spec("abaaaaab", 1);
    spec("abaaaaaab", 1);
    spec("abaaaaaaab", 1);
    spec(
        "adabdcaebdcebdcacaaaadbbcadabcbeabaadcbcaaddebdbddcbdacdbbaedbdaaecabdceddccbdeeddccdaabbabbdedaaabcdadbdabeacbeadbaddcbaacdbabcccbaceedbcccedbeecbccaecadccbdbdccbcbaacccbddcccbaedbacdbcaccdcaadcbaebebcceabbdcdeaabdbabadeaaaaedbdbcebcbddebccacacddebecabccbbdcbecbaeedcdacdcbdbebbacddddaabaedabbaaabaddcdaadcccdeebcabacdadbaacdccbeceddeebbbdbaaaaabaeecccaebdeabddacbedededebdebabdbcbdcbadbeeceecdcdbbdcbdbeeebcdcabdeeacabdeaedebbcaacdadaecbccbededceceabdcabdeabbcdecdedadcaebaababeedcaacdbdacbccdbcece",
        273,
    );

    function spec(s: string, expected: number) {
        it(`${JSON.stringify({ s, expected })}`, () => {
            expect(minCut(s)).toEqual(expected);
        });
    }
});
