export class BinaryTree<T> {
    public static parse<T>(input: Array<T | null>): BinaryTree<T> | null {
        if (input.length === 0) {
            return null;
        }
        const root = new BinaryTree(input[0]!);
        let nodes: Array<BinaryTree<T>> = [root];
        let i = 1;
        let depth = 1;
        while (i < input.length) {
            let addedNodes = 0;
            for (let j = 0; j <= depth; j++) {
                if (input[i] !== null && input[i] !== undefined) {
                    const node = new BinaryTree(input[i]!);
                    nodes[Math.floor(j / 2)][j % 2 ? "right" : "left"] = node;
                    nodes.push(node);
                    addedNodes++;
                }
                i++;
            }
            nodes = nodes.slice(nodes.length - addedNodes);
            depth++;
        }
        return root;
    }

    public left: BinaryTree<T> | null = null;
    public right: BinaryTree<T> | null = null;

    constructor(public val: T) {}
}
