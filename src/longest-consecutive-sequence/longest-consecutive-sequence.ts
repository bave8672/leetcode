/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * Example 2:
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 *
 *
 *
 * Constraints:
 *
 *     0 <= nums.length <= 104
 *     -109 <= nums[i] <= 109
 *
 *
 * Follow up: Could you implement the O(n) solution?
 */

// sort then curse - time O(n*log(n)) space O(n)
export function _longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let prev: number | undefined;
    let max = 1;
    let consecutive = 1;
    nums.sort((a, b) => a - b);
    for (const n of nums) {
        if (prev !== undefined && n !== prev) {
            consecutive = n === prev + 1 ? consecutive + 1 : 1;
            max = Math.max(max, consecutive);
        }
        prev = n;
    }
    return max;
}

// store seen numbers in a linked list
// with a map over the list to record seen nums
// culling intermediate sections of the list where possible
// time O(n) space O(n)
export function longestConsecutive(nums: number[]): number {
    const seen = new Map<number, Node>();
    let max = 0;
    for (const n of nums) {
        if (!seen.has(n)) {
            let prev = seen.get(n - 1);
            let next = seen.get(n + 1);
            const node = { n, prev, next };
            prev = node;
            while (prev && prev.prev) {
                prev = prev.prev;
            }
            next = node;
            while (next && next.next) {
                next = next.next;
            }
            if (prev !== next) {
                prev.next = next;
                next.prev = prev;
                max = Math.max(max, next.n - prev.n + 1);
            } else {
                max = Math.max(max, 1);
            }
            seen.set(n, node);
        }
    }
    return max;
}

interface Node {
    n: number;
    prev?: Node;
    next?: Node;
}
