/**
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string s, int numRows);
 *
 *
 *
 * Example 1:
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 * Example 3:
 *
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 *
 *
 * Constraints:
 *
 *     1 <= s.length <= 1000
 *     s consists of English letters (lower-case and upper-case), ',' and '.'.
 *     1 <= numRows <= 1000
 *
 *
 */

// Time O(n) Space O(n)
export function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }
    const twoNMinus2 = 2 * numRows - 2;
    const res: string[] = [];
    for (let r = 0; r < numRows; r++) {
        for (let i = r; i < s.length; i = next(i, r, numRows, twoNMinus2)) {
            res.push(s[i]);
        }
    }
    return res.join("");
}

function next(
    i: number,
    r: number,
    numRows: number,
    twoNMinus2: number,
): number {
    if (r === 0 || r === numRows - 1) {
        return i + twoNMinus2;
    } else {
        const mod = i % twoNMinus2;
        if (mod < numRows) {
            return i + twoNMinus2 - 2 * mod;
        } else {
            return i + 2 * (twoNMinus2 - mod);
        }
    }
}
