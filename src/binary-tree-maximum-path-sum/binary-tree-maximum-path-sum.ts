import { BinaryTree } from "../common/binary-tree";

/**
 * Given a non-empty binary tree, find the maximum path sum.
 *
 * For this problem,
 * a path is defined as any sequence of nodes from some starting node
 * to any node in the tree along the parent-child connections.
 *
 * The path must contain at least one node and does not need to go through the root.
 */
export function maxPathSum(root: BinaryTree<number>): number {
    let max = Number.MIN_SAFE_INTEGER;
    maxPathSumIncludingButNotSpanningNode(root);
    return max;
    function maxPathSumIncludingButNotSpanningNode(
        node: BinaryTree<number> | null,
    ): number {
        if (node === null) {
            return Number.MIN_SAFE_INTEGER;
        }
        const maxLeft = maxPathSumIncludingButNotSpanningNode(node.left);
        const maxRight = maxPathSumIncludingButNotSpanningNode(node.right);
        const maxLeftIncludingNode = node.val + Math.max(maxLeft, 0);
        const maxRightIncludingNode = node.val + Math.max(maxRight, 0);
        const maxSpanningNode =
            node.val + Math.max(maxLeft, 0) + Math.max(maxRight, 0);
        const maxNotSpanningNode = Math.max(
            maxLeftIncludingNode,
            maxRightIncludingNode,
        );
        max = Math.max(max, maxNotSpanningNode, maxSpanningNode);
        return maxNotSpanningNode;
    }
}
