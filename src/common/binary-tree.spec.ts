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

    it("4", () => {
        const tree = BinaryTree.parse([20, 15, 7, null, 6, 7, 8, -1, -2, -99]);
        expect(tree!.val).toBe(20);
        expect(tree!.left!.right!.left!.val).toBe(-1);
    });

    it(`5`, () => {
        const tree = BinaryTree.parse([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            null,
            11,
            null,
            12,
            null,
            null,
            null,
            13,
            null,
        ])!;
        expect(tree.right!.right!.left!.val).toBe(12);
    });

    it("6", () => {
        const tree = BinaryTree.parse([
            0,
            1,
            null,
            null,
            2,
            3,
            null,
            null,
            4,
            5,
        ]);
        expect(tree!.val).toBe(0);
        expect(tree!.left!.right!.left!.right!.left!.val).toBe(5);
    });

    it("7", () => {
        const tree = BinaryTree.parse([
            0,
            1,
            2,
            3,
            4,
            null,
            null,
            5,
            null,
            null,
            6,
            null,
            7,
            null,
            null,
            null,
            9,
        ]);
        expect(tree!.val).toBe(0);
        expect(tree!.left!.left!.left!.right!.right!.val).toBe(9);
    });
});
