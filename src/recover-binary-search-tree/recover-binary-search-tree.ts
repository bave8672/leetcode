import { BinaryTree } from "../common/binary-tree";

export function recoverTree(root: BinaryTree<number>) {
    let swappedNodeA: BinaryTree<number> | undefined;
    let swappedNodeB: BinaryTree<number> | undefined;
    let prev: BinaryTree<number> | undefined;
    for (const node of traverseInOrder(root)) {
        if (!swappedNodeA) {
            if (prev && prev.val > node.val) {
                swappedNodeA = prev;
                swappedNodeB = node;
            } else {
                prev = node;
            }
        } else if (node.val < swappedNodeB!.val) {
            swappedNodeB = node;
        }
    }
    swapNodeValues(swappedNodeA!, swappedNodeB!);
}

function* traverseInOrder(
    node: BinaryTree<number> | null,
): Iterable<BinaryTree<number>> {
    if (node !== null) {
        yield* traverseInOrder(node.left);
        yield node;
        yield* traverseInOrder(node.right);
    }
}

function swapNodeValues<T>(a: BinaryTree<T>, b: BinaryTree<T>) {
    const aVal = a.val;
    a.val = b.val;
    b.val = aVal;
}
