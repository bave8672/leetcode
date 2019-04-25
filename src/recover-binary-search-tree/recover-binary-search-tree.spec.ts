import { BinaryTree } from "../common/binary-tree";
import { recoverTree } from "./recover-binary-search-tree";

describe("recoverTree", () => {
    it(`1`, () => {
        const tree = BinaryTree.parse([1, 3, null, null, 2])!;
        recoverTree(tree);
        expect(tree).toEqual(BinaryTree.parse([3, 1, null, null, 2]));
    });

    it(`2`, () => {
        const tree = BinaryTree.parse([3, 1, 4, null, null, 2])!;
        recoverTree(tree);
        expect(tree).toEqual(BinaryTree.parse([2, 1, 4, null, null, 3]));
    });

    it(`3`, () => {
        const tree = BinaryTree.parse([3, null, 2, null, 1])!;
        recoverTree(tree);
        expect(tree).toEqual(BinaryTree.parse([1, null, 2, null, 3]));
    });
});
