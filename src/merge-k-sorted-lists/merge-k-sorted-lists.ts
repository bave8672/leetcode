/* Definition for singly-linked list.*/

class ListNode<T> {
    public next: ListNode<T> | null;

    constructor(public val: T) {
        this.val = val;
        this.next = null;
    }
}

function mergeKLists(lists: Array<ListNode<number>>): ListNode<number> | null {
    const sortedList = lists
        .reduce<number[]>((accum, node) => {
            while (node) {
                accum.push(node.val);
                node = node.next as any;
            }
            return accum;
        }, [])
        .sort((a, b) => a - b);
    if (sortedList.length === 0) {
        return null;
    }
    const result = new ListNode(sortedList[0]);
    let node = result;
    for (let i = 1; i < sortedList.length; i++) {
        node.next = new ListNode(sortedList[i]);
        node = node.next;
    }
    return result;
}
