/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * <problem description>
 */

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
    ];
}

class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
export function inorderTraversalIterative(root: TreeNode): number[] {
    const output: number[] = [];
    const stack: TreeNode[] = [];
    const visitedNodes = new Set<TreeNode>();
    let currentNode: TreeNode | undefined = root;
    while (currentNode) {
        if (visitedNodes.has(currentNode)) {
            currentNode = stack.pop();
        } else if (currentNode.left && !visitedNodes.has(currentNode.left)) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            output.push(currentNode.val);
            visitedNodes.add(currentNode);
            if (currentNode.right && !visitedNodes.has(currentNode.right)) {
                stack.push(currentNode);
                currentNode = currentNode.right;
            }
        }
    }
    return output;
}
