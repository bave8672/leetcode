/**
 * https://leetcode.com/problems/group-anagrams/
 *
 * <problem description>
 */

/**
 * O(n) hashing
 */

export function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const word of strs) {
        const arr = new Array(26).fill(0);
        for (const char of word) {
            const code = char.charCodeAt(0) - 97;
            arr[code]++;
        }
        const hash = arr.join();
        let set = map.get(hash);
        if (!set) {
            set = [];
            map.set(hash, set);
        }
        set.push(word);
    }
    return [...map.values()];
}
