export class ListNode<T> {
    public next: ListNode<T> | null;

    constructor(public val: T) {
        this.val = val;
        this.next = null;
    }
}
