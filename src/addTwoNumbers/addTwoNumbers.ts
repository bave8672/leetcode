interface IListNode<T = number> {
    val: T;
    next: IListNode | null;
}

function addTwoNumbers(
    l1: IListNode | null,
    l2: IListNode | null
): IListNode | null {
    let rNode: IListNode = { val: -1, next: null };
    const headRef: IListNode = rNode;
    let carry: number = 0;

    // tslint:disable-next-line: no-gratuitous-expressions
    while (l1 || l2 || carry) {
        rNode.next = { val: -1, next: null };
        rNode = rNode.next;
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        rNode.val = sum % 10;
        carry = Math.floor(sum / 10);

        (l1 as any) = l1 && l1.next;
        (l2 as any) = l2 && l2.next;
    }

    return headRef.next;
}
