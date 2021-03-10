/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 * <problem description>
 */

// Iterate over chars
// time O(log(n)), extra space O(1)
// tslint:disable-next-line: cognitive-complexity
export function romanToInt(s: string): number {
    let int = 0;
    let i = 0;
    while (i < s.length) {
        if (s[i] === "M") {
            int += 1000;
            i++;
        } else if (s[i] === "D") {
            int += 500;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            int += 900;
            i += 2;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            int += 400;
            i += 2;
        } else if (s[i] === "C") {
            int += 100;
            i++;
        } else if (s[i] === "L") {
            int += 50;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            int += 90;
            i += 2;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            int += 40;
            i += 2;
        } else if (s[i] === "X") {
            int += 10;
            i++;
        } else if (s[i] === "V") {
            int += 5;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            int += 9;
            i += 2;
        } else if (s[i] === "I" && s[i + 1] === "V") {
            int += 4;
            i += 2;
        } else {
            int += 1;
            i++;
        }
    }
    return int;
}
