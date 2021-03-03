/**
 * https://leetcode.com/problems/integer-to-roman/
 *
 * <problem description>
 */

// tslint:disable: no-duplicated-branches

// Time O(log(n)) space O(log(n))
export function intToRoman(num: number): string {
    const numerals: string[] = [];
    while (num > 0) {
        if (num >= 1000) {
            numerals.push("M");
            num -= 1000;
        } else if (num % 1000 >= 900) {
            numerals.push("C");
            num += 100;
        } else if (num >= 500) {
            numerals.push("D");
            num -= 500;
        } else if (num % 500 >= 400) {
            numerals.push("C");
            num += 100;
        } else if (num >= 100) {
            numerals.push("C");
            num -= 100;
        } else if (num % 100 >= 90) {
            numerals.push("X");
            num += 10;
        } else if (num >= 50) {
            numerals.push("L");
            num -= 50;
        } else if (num % 50 >= 40) {
            numerals.push("X");
            num += 10;
        } else if (num >= 10) {
            numerals.push("X");
            num -= 10;
        } else if (num % 10 === 9) {
            numerals.push("I");
            num += 1;
        } else if (num >= 5) {
            numerals.push("V");
            num -= 5;
        } else if (num % 5 === 4) {
            numerals.push("I");
            num += 1;
        } else {
            numerals.push("I");
            num -= 1;
        }
    }
    return numerals.join("");
}
