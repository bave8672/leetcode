/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 */

function swapPairs<T>(head: ListNode<T> | null): ListNode<T> | null {
    let n = null;
    let m = head;
    const res = head?.next || head;
    while (m?.next) {
        const o = m.next;
        if (n) {
            n.next = o;
        }
        m.next = o.next;
        o.next = m;
        n = m;
        m = m.next;
    }
    return res;
}
