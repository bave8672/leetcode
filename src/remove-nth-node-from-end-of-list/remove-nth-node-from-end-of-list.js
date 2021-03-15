/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

// One pass, time O(n), space O(1)
const removeNthFromEnd = function (head, n) {
    const ogHead = head;
    let i = 1;
    let nPlus1Behind;
    while (head.next) {
        head = head.next;
        if (nPlus1Behind) {
            nPlus1Behind = nPlus1Behind.next;
        } else {
            i++;
            if (i === n + 1) {
                nPlus1Behind = ogHead;
            }
        }
    }
    if (nPlus1Behind) {
        nPlus1Behind.next = nPlus1Behind.next.next;
        return ogHead;
    } else {
        return ogHead.next;
    }
};
