/**
 * https://leetcode.com/problems/repeated-dna-sequences/
 *
 * <problem description>
 */

/**
 * Rolling hash
 * O(n) time and space assuming constant width = 10
 */
export function findRepeatedDnaSequences(s: string): string[] {
    const map = new Map<string, number>();
    for (let i = 0; i <= s.length - 10; i++) {
        const sub = s.substring(i, i + 10);
        const count = map.get(sub) || 0;
        map.set(sub, count + 1);
    }
    return [...map.entries()]
        .filter(([_, count]) => count > 1)
        .map(([sub]) => sub);
}
