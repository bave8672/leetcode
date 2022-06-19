import {
    TreeNode,
    isSymmetric,
    isSymmetric2,
    isSymmetric3,
} from "./symmetric-tree";

describe("symmetric-tree", () => {
    specs(isSymmetric, isSymmetric2, isSymmetric3);

    function specs(...impls: typeof isSymmetric[]) {
        impls.forEach((impl) => {
            it(impl.name, () => {
                const root = new TreeNode(
                    1,
                    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
                    new TreeNode(2, new TreeNode(4), new TreeNode(3)),
                );
                expect(isSymmetric(root)).toBe(true);
            });
        });
    }
});
