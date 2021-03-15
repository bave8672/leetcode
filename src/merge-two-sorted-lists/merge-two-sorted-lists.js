/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * <problem description>
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    // sort into new list by comparing next vals of each
    // time and space O(n)
    let head = null;
    let currNode;
    while (l1 || l2) {
        let nextNode;
        if (l1 && (!l2 || l1.val <= l2.val)) {
            nextNode = l1;
            l1 = l1.next;
        } else if (l2 && (!l1 || l2.val < l1.val)) {
            nextNode = l2;
            l2 = l2.next;
        }
        if (!currNode) {
            head = nextNode;
            currNode = nextNode;
        } else {
            currNode.next = nextNode;
            currNode = currNode.next;
        }
    }
    return head;
};
