import { BinaryTree } from "./binary-tree";

describe("binary tree parsing", () => {
    it("1", () => {
        const tree = BinaryTree.parse([]);
        expect(tree).toBe(null);
    });

    it("2", () => {
        const tree = BinaryTree.parse([1, 2, 3]);
        expect(tree!.val).toBe(1);
        expect(tree!.left!.val).toBe(2);
        expect(tree!.right!.val).toBe(3);
        expect(tree!.left!.left!).toBe(null);
        expect(tree!.left!.right!).toBe(null);
        expect(tree!.right!.right!).toBe(null);
        expect(tree!.right!.left!).toBe(null);
    });

    it("3", () => {
        const tree = BinaryTree.parse([1, null, 2, 3]);
        expect(tree!.val).toBe(1);
        expect(tree!.left).toBe(null);
        expect(tree!.right!.val).toBe(2);
        expect(tree!.right!.right!).toBe(null);
        expect(tree!.right!.left!.val).toBe(3);
        expect(tree!.right!.left!.left).toBe(null);
        expect(tree!.right!.left!.right).toBe(null);
    });
});
