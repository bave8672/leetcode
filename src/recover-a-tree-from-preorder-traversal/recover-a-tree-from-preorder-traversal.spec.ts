import { BinaryTree } from "../common/binary-tree";
import { recoverFromPreorder } from "./recover-a-tree-from-preorder-traversal";

describe("recover tree from preorder traversal", () => {
    it(`0`, () => run("1-2--3--4-5--6--7", [1, 2, 5, 3, 4, 6, 7]));
    it(`multidigit nums`, () =>
        run("111-222--333--444-555--666--777", [
            111,
            222,
            555,
            333,
            444,
            666,
            777,
        ]));
    it(`empty case`, () => run("", []));
    it(`left only`, () => run("1-2--3", [1, 2, 3]));
    it(`left only 2`, () => run("1-2--3--4---5----6", [1, 2, 3, 4, 5, 6]));
    it(`right only 2`, () =>
        run("1-2-3--4--5---6---7----8----9", [1, 2, 3, 4, 5, 6, 7, 8, 9]));
    it(`bigger tree`, () =>
        run(
            "1-2--3--4-5--6--7---8---9----10----11-----12------13-----14------15",
            [1, 2, 5, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15],
        ));

    function run(input: string, expectedOutput: number[]) {
        const tree = recoverFromPreorder(input);
        const output = bf([tree]);
        expect(output).toEqual(expectedOutput);
    }

    function bf<T>(nodes: Array<BinaryTree<T> | null>): T[] {
        if (nodes.length === 0) {
            return [];
        }
        const result: T[] = [];
        const children: Array<BinaryTree<T> | null> = [];
        nodes
            .filter((node) => !!node)
            .forEach((node) => {
                result.push(node!.val);
                children.push(node!.left);
                children.push(node!.right);
            });

        return [...result, ...bf(children)];
    }
});
