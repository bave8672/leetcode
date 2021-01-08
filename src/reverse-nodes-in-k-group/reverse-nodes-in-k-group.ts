/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * <problem description>
 */

export function reverseKGroup(
    head: ListNode | null,
    k: number,
): ListNode | null {
    // rolling window
    // Time O(n), space O(1)
    const sentinel: ListNode = new ListNode(undefined, head); // sentinel to store ref to head of list
    let start = sentinel;
    let end = sentinel;
    let startIndex = -1;
    let endIndex = -1;

    // loop until end of list is reached
    while (end?.next || endIndex % k !== 0) {
        // roll end to next break between sets of k
        for (let i = 0; i < k; i++) {
            end = end?.next!;
            endIndex++;
        }
        // roll start to end index - k
        while (endIndex - startIndex > k) {
            start = start?.next!;
            startIndex++;
        }
        if (!end || !start) {
            break;
        }
        // reverse k items
        const endOfPrevSegment = start;
        const newEndOfCurrentSegment = start.next!;
        const startOfNextSegment = end.next;
        start = newEndOfCurrentSegment;
        let revHead = end.next;
        while (start && start !== startOfNextSegment) {
            const next = start.next;
            start.next = revHead;
            revHead = start;
            start = next!;
            startIndex++;
        }
        endOfPrevSegment.next = revHead;
        start = newEndOfCurrentSegment;
        end = newEndOfCurrentSegment;
    }

    return sentinel.next;
}

export class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
