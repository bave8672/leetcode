/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

const letters = [
    undefined,
    undefined,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
];

// time and space O(n^4) where n = digits.length
function letterCombinations(digits) {
    if (!digits.length) {
        return [];
    }
    let combinations = [""];
    let newCombinations = [];
    for (const digit of digits) {
        for (const letter of letters[Number.parseInt(digit)]) {
            newCombinations.push(...combinations.map((com) => com + letter));
        }
        combinations = newCombinations;
        newCombinations = [];
    }
    return combinations;
}
