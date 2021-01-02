export function longestPalindrome(s: string): string {
    // starting at the middle, check for palindromes
    let i = Math.ceil(s.length / 2) - 1;
    let n = 1;
    let longest = "";

    // check form bounds of index
    // and that it's possible to form a larger palindrome
    while (
        i >= 0 &&
        i < s.length &&
        Math.max(i - s.length + 1, s.length - i) * 2 > longest.length
    ) {
        const palindrome = getPalindromeWithRootAt(i, s);
        longest = longest.length >= palindrome.length ? longest : palindrome;

        // zig zag up/down
        i = i + n * (n % 2 ? 1 : -1) * 0.5;
        n++;
    }

    return longest;
}

export function getPalindromeWithRootAt(i: number, s: string): string {
    let start: number = Math.ceil(i);
    let end: number = Math.floor(i);
    while (s[start] && s[end] && s[start] === s[end]) {
        start--;
        end++;
    }
    if (start > end) {
        return "";
    }
    return s.substring(start + 1, end);
}
