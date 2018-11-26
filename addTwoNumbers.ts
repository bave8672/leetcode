interface ListNode<T = number> {
  val: T;
  next: ListNode | null;
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let rNode: ListNode = { val: -1, next: null };
  const headRef: ListNode = rNode;
  let carry: number = 0;

  while (l1 || l2 || carry) {
    rNode.next = { val: -1, next: null };
    rNode = rNode.next;
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    rNode.val = sum % 10;
    carry = Math.floor(sum / 10);

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return headRef.next;
}
