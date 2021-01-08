import { ListNode, reverseKGroup } from "./reverse-nodes-in-k-group";

describe("reverse-nodes-in-k-group", () => {
    spec([1], 1, [1]);

    spec([1, 2], 2, [2, 1]);

    spec([1, 2, 3, 4, 5], 1, [1, 2, 3, 4, 5]);
    spec([1, 2, 3, 4, 5], 2, [2, 1, 4, 3, 5]);
    spec([1, 2, 3, 4, 5], 3, [3, 2, 1, 4, 5]);
    spec([1, 2, 3, 4, 5], 4, [4, 3, 2, 1, 5]);

    spec([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]);

    function spec(list: number[], k: number, expected: number[]) {
        it(`${JSON.stringify({ list, k, expected })}`, () => {
            expect(toArray(reverseKGroup(toLinkedList(list), k))).toEqual(
                expected,
            );
        });
    }

    function toLinkedList(list: number[]) {
        const sentinel = new ListNode();
        let node = sentinel;
        for (const n of list) {
            node.next = new ListNode(n);
            node = node.next;
        }
        return sentinel.next;
    }

    function toArray(head: ListNode | null | undefined): number[] {
        return head ? [head.val, ...toArray(head.next)] : [];
    }
});
