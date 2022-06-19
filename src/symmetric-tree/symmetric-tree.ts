/**
 * https://leetcode.com/problems/symmetric-tree/
 *
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */

/**
 * Iterative - two stacks
 */
export function isSymmetric(root: TreeNode | null): boolean {
    const stack = [root!.left, root!.right];
    while (stack.length) {
        const r = stack.pop();
        const l = stack.pop();
        if (l || r) {
            if (!l || !r || l.val !== r.val) {
                return false;
            }
            stack.push(l.left);
            stack.push(r.right);
            stack.push(l.right);
            stack.push(r.left);
        }
    }
    return true;
}

/**
 * Iterative - two stacks
 */
export function isSymmetric3(root: TreeNode | null): boolean {
    const lStack = [root!.left];
    const rStack = [root!.right];
    while (lStack.length || rStack.length) {
        const l = lStack.pop();
        const r = rStack.pop();
        if (l || r) {
            if (!l || !r || l.val !== r.val) {
                return false;
            }
            lStack.push(l.left);
            rStack.push(r.right);
            lStack.push(l.right);
            rStack.push(r.left);
        }
    }
    return true;
}

/**
 * Recursive
 */
export function isSymmetric2(root: TreeNode | null): boolean {
    return visit(root!.left, root!.right);
}

function visit(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a == null && b == null) {
        return true;
    } else if (a == null || b == null || a.val !== b.val) {
        return false;
    } else {
        return visit(a.left, b.right) && visit(a.right, b.left);
    }
}

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
