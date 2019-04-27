export class BinaryTree<T> {
    public static parse<T>(input: Array<T | null>): BinaryTree<T> | null {
        if (input.length === 0) {
            return null;
        }
        const root = new BinaryTree(input[0]!);
        let prevNodes: Array<BinaryTree<T>> = [root];
        let i = 1;
        let depth = 1;
        while (i < input.length) {
            let addedNodes = 0;
            const addedNodesList = [];
            for (let j = 0; j < prevNodes.length * 2; j++) {
                if (input[i] !== null && input[i] !== undefined) {
                    const node = new BinaryTree(input[i]!);
                    prevNodes[Math.floor(j / 2)][
                        j % 2 ? "right" : "left"
                    ] = node;
                    addedNodesList.push(node);
                    addedNodes++;
                }
                i++;
            }
            prevNodes = addedNodesList;
            depth++;
        }
        return root;
    }

    public left: BinaryTree<T> | null = null;
    public right: BinaryTree<T> | null = null;

    [key: string]: any;

    constructor(public val: T) {}
}
