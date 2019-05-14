/**
 * # 685. Redundant Connection II
 *
 * In this problem, a rooted tree is a directed graph such that,
 * there is exactly one node (the root) for which all other nodes are descendants of this node,
 * plus every node has exactly one parent, except for the root node which has no parents.
 *
 * The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N),
 * with one additional directed edge added. The added edge has two different vertices chosen from 1 to N,
 * and was not an edge that already existed.
 *
 * The resulting graph is given as a 2D-array of edges.
 * Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v,
 * where u is a parent of child v.
 *
 * Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes.
 * If there are multiple answers, return the answer that occurs last in the given 2D-array.
 *
 * *Example 1:*
 * ```
 * Input: [[1,2], [1,3], [2,3]]
 * Output: [2,3]
 * Explanation: The given directed graph will be like this:
 *   1
 *  / \
 * v   v
 * 2-->3
 * ```
 *
 * *Example 2:*
 * ```
 * Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
 * Output: [4,1]
 * Explanation: The given directed graph will be like this:
 * 5 <- 1 -> 2
 *      ^    |
 *      |    v
 *      4 <- 3
 * ```
 *
 * *Note:*
 * The size of the input 2D-array will be between 3 and 1000.
 * Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.
 */
export function findRedundantDirectedConnection(edges: number[][]): number[] {
    const nodes = makeTree(edges);
    let result: number[] | null = null;
    for (const edge of edges) {
        removeEdge(edge, nodes);
        if (isDirectedGraph(nodes)) {
            result = edge;
        }
        addEdge(edge, nodes);
    }
    return result!;
}

function isDirectedGraph(nodes: Map<number, Node>): boolean {
    const nodesWithParents = new Set<Node>();
    const prevHeads = new Set<Node>();
    for (const [, node] of nodes) {
        if (nodesWithParents.has(node)) {
            continue;
        }
        if (!isHeadOfDirectedGraph(node, nodesWithParents, prevHeads)) {
            return false;
        }
        prevHeads.add(node);
    }
    if (prevHeads.size !== 1) {
        return false;
    }
    return true;
}

function isHeadOfDirectedGraph(
    node: Node,
    nodesWithParents: Set<Node>,
    prevHeads: Set<Node>,
): boolean {
    for (const child of node.children) {
        if (prevHeads.has(child)) {
            prevHeads.delete(child);
            nodesWithParents.add(child);
            continue;
        } else if (nodesWithParents.has(child)) {
            return false;
        }
        nodesWithParents.add(child);
        if (!isHeadOfDirectedGraph(child, nodesWithParents, prevHeads)) {
            return false;
        }
    }
    return true;
}

function makeTree(edges: number[][]): Map<number, Node> {
    const nodes = new Map<number, Node>();
    edges.forEach((edge) => addEdge(edge, nodes));
    return nodes;
}

function addEdge(edge: number[], nodes: Map<number, Node>): void {
    const { parent, child } = getNodes(edge, nodes);
    parent.children.add(child);
}

function removeEdge(edge: number[], nodes: Map<number, Node>): void {
    const { parent, child } = getNodes(edge, nodes);
    parent.children.delete(child);
}

function getNodes(edge: number[], nodes: Map<number, Node>) {
    let parent = nodes.get(edge[0]);
    if (!parent) {
        parent = new Node(edge[0]);
        nodes.set(edge[0], parent);
    }
    let child = nodes.get(edge[1]);
    if (!child) {
        child = new Node(edge[1]);
        nodes.set(edge[1], child);
    }
    return { parent, child };
}

class Node {
    public readonly children = new Set<Node>();

    public constructor(public readonly val: number) {}
}
