import { BinaryTree } from "../common/binary-tree";
import { minCameraCover } from "./binary-tree-cameras";

describe(`binary-tree-cameras`, () => {
    it(`1`, () =>
        expect(minCameraCover(BinaryTree.parse([1, 2, null, 3, 4])!)).toBe(1));
    it(`2`, () =>
        expect(
            minCameraCover(
                BinaryTree.parse([1, 2, null, 3, null, 4, null, null, 5])!,
            ),
        ).toBe(2));
    it(`3`, () =>
        expect(
            minCameraCover(
                BinaryTree.parse([
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
                ])!,
            ),
        ).toBe(6));
    it(`4`, () =>
        expect(
            minCameraCover(
                BinaryTree.parse([0, 1, null, null, 2, 3, null, null, 4, 5])!,
            ),
        ).toBe(2));
    it(`5`, () =>
        expect(
            minCameraCover(
                BinaryTree.parse([
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
                    8,
                ])!,
            ),
        ).toBe(4));
    it(`6`, () =>
        expect(
            minCameraCover(
                BinaryTree.parse([
                    1,
                    2,
                    null,
                    3,
                    4,
                    5,
                    null,
                    null,
                    6,
                    7,
                    null,
                    null,
                    8,
                    null,
                    9,
                ])!,
            ),
        ).toBe(3));
});
