import { BinaryTree } from "../common/binary-tree";

/**
 * This gets 100% for speed and memory at time of submission :)
 */

/**
 * We run a preorder depth first search on the root of a binary tree.
 *
 * At each node in this traversal, we output D dashes (where D is the depth of this node),
 * then we output the value of this node.
 * (If the depth of a node is D, the depth of its immediate child is D+1.  The depth of the root node is 0.)
 *
 * If a node has only one child, that child is guaranteed to be the left child.
 *
 * Given the output S of this traversal, recover the tree and return its root.
 */
export function recoverFromPreorder(s: string): BinaryTree<number> {
    return recoverFromPreorderRecursive(s).node!;
}

function recoverFromPreorderRecursive(
    s: string,
    depth = 0,
    i = 0,
): {
    i: number;
    node: BinaryTree<number> | null;
} {
    // terminating case
    if (getDepth(s, i) !== depth || s === "") {
        return {
            i,
            node: null,
        };
    }
    // scroll to the next number
    i += depth;

    const numResult = getNumber(s, i);
    const node: BinaryTree<number> = {
        left: null,
        right: null,
        val: numResult.val,
    };

    // scroll over the number
    i = numResult.i;

    // recurse
    const leftResult = recoverFromPreorderRecursive(s, depth + 1, i);
    const rightResult = recoverFromPreorderRecursive(
        s,
        depth + 1,
        leftResult.i,
    );
    node.left = leftResult.node;
    node.right = rightResult.node;

    // scroll past

    return { i: rightResult.i, node };
}

/**
 * Get the depth at a point in the string
 *
 * e.g getDepth("1-2--3--4-5--6--7", 4) := 2;
 */
function getDepth(s: string, i: number): number {
    let depth = 0;
    while (s[i + depth] === "-") {
        depth++;
    }
    return depth;
}

function getNumber(s: string, i: number): { val: number; i: number } {
    let str = "";
    while (/\d/.test(s[i])) {
        str += s[i];
        i++;
    }
    return {
        i,
        val: +str,
    };
}
