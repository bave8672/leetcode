// Longest Substring Without Repeating Characters
export function lengthOfLongestSubstring(s: string): number {
    let maxSubstrLength = 0;
    let wStart: number = 0;
    let wEnd: number = -1;
    const uniques: Set<string> = new Set<string>();

    while (wEnd < s.length - 1) {
        wEnd++;
        const rightLetter = s[wEnd];

        while (uniques.has(rightLetter)) {
            uniques.delete(s[wStart++]);
        }

        uniques.add(rightLetter);
        maxSubstrLength = Math.max(maxSubstrLength, uniques.size);
    }

    return maxSubstrLength;
}
