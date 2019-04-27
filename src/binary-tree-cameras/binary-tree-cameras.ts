import { BinaryTree } from "../common/binary-tree";

/**
 * Given a binary tree, we install cameras on the nodes of the tree.
 * Each camera at a node can monitor its parent, itself, and its immediate children.
 *
 * Calculate the minimum number of cameras needed to monitor all nodes of the tree.
 */
export function minCameraCover(root: BinaryTree<number>): number {
    let total = dfs(root);
    // handle case where root node is not covered
    if (!isVisible(root)) {
        total++;
    }
    return total;
    function dfs(node: BinaryTree<number> | null): number {
        // escape case for null child nodes
        if (node === null) {
            return 0;
        }

        // iterate for children using dfs
        const left = dfs(node.left);
        const right = dfs(node.right);

        // if either of the children is a camera, mark node as visible
        if (isVisible(node)) {
            node.visible = true;
        }

        // if either of the children is invisible, mark node as a camera
        if (
            (node.left !== null && !node.left.visible && !node.left.camera) ||
            (node.right !== null && !node.right.visible && !node.right.camera)
        ) {
            node.camera = true;
        }

        // total cameras is the sum of left, right and this node
        return left + right + (node.camera ? 1 : 0);
    }
}

function isVisible(node: BinaryTree<number>) {
    return (
        node.camera ||
        (node.left !== null && node.left.camera) ||
        (node.right !== null && node.right.camera)
    );
}
