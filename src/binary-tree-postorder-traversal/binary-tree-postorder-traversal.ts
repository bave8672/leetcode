import { BinaryTree } from "../common/binary-tree";

/**
 * Given a binary tree, return the postorder traversal of its nodes' values.
 */
export function postorderTraversal(root: BinaryTree<number> | null): number[] {
    if (root === null) {
        return [];
    }
    return [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val,
    ];
}

/**
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
export function postorderTraversalIterative(
    root: BinaryTree<number>,
): number[] {
    const output: number[] = [];
    const unvisitedNodes: Array<BinaryTree<number>> = [];
    const visitedNodes = new Set<BinaryTree<number>>();
    let currentNode: BinaryTree<number> | undefined = root;
    while (currentNode) {
        if (currentNode.left && !visitedNodes.has(currentNode.left)) {
            unvisitedNodes.push(currentNode);
            currentNode = currentNode.left;
        } else if (currentNode.right && !visitedNodes.has(currentNode.right)) {
            unvisitedNodes.push(currentNode);
            currentNode = currentNode.right;
        } else {
            visitedNodes.add(currentNode);
            output.push(currentNode.val);
            currentNode = unvisitedNodes.pop();
        }
    }
    return output;
}
