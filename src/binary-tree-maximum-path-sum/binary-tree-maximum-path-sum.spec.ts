import { BinaryTree } from "../common/binary-tree";
import { maxPathSum } from "./binary-tree-maximum-path-sum";

describe("binary-tree-max-sum-path", () => {
    it(`1`, () => expect(maxPathSum(BinaryTree.parse([1, 2, 3])!)).toBe(6));
    it(`2`, () =>
        expect(
            maxPathSum(BinaryTree.parse([-10, 9, 20, null, null, 15, 7])!),
        ).toBe(42));
    it(`3`, () =>
        expect(
            maxPathSum(
                BinaryTree.parse([20, 15, 7, null, 6, 7, 8, -1, -2, -99])!,
            ),
        ).toBe(56));
    it(`3`, () =>
        expect(
            maxPathSum(BinaryTree.parse([-99, null, -99, 100, 1000, null])!),
        ).toBe(1001));
});
