import { ListNode } from "../add-two-numbers/list-node";

/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 *
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 */

/**
 * Uses https://en.wikipedia.org/wiki/Cycle_detection#Tortoise_and_hare
 */
export function detectCycle(head: ListNode | null): ListNode | null {
    let hare = head;
    let turtle = head;
    while (turtle && hare) {
        turtle = turtle.next;
        hare = hare.next?.next || null;
        if (turtle === hare) {
            while (head !== turtle) {
                head = head?.next || null;
                turtle = turtle?.next || null;
            }
            return head;
        }
    }
    return null;
}
