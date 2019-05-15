/**
 * This gets 100% for speed and 97.10% for memory at time of submission :)
 */

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
    const parent: Array<number | undefined> = [];
    let nodeWithDoubleParent: number | undefined;
    let firstDoubleParent: number | undefined;
    let secondDoubleParent: number | undefined;

    edges.forEach((edge) => {
        const childNode = edge[1];
        const firstParent = parent[childNode];
        if (firstParent !== undefined) {
            nodeWithDoubleParent = childNode;
            firstDoubleParent = firstParent;
            secondDoubleParent = edge[0];
        } else {
            parent[childNode] = edge[0];
        }
    });

    /**
     * graph contains a loop
     * return last edge added to the loop
     */
    if (nodeWithDoubleParent === undefined) {
        const loopNodes = getLoopNodes(parent)!;
        return edges[
            edges
                .reverse()
                .findIndex(
                    (edge) => loopNodes.has(edge[0]) && loopNodes.has(edge[1]),
                )
        ];
    }

    /**
     *  Check to see if removing the second parent splits the tree
     */
    if (
        findRoot(firstDoubleParent!, parent).root !==
        findRoot(secondDoubleParent!, parent).root
    ) {
        return [firstDoubleParent!, nodeWithDoubleParent];
    }

    return [secondDoubleParent!, nodeWithDoubleParent];
}

function findRoot(
    n: number,
    parent: Array<number | undefined>,
    seen = new Set<number>(),
    seenTwice = new Set<number>(),
): { root?: number; seen?: Set<number>; loop?: Set<number> } {
    if (seen.has(n) && seenTwice.has(n)) {
        return { loop: seenTwice };
    } else if (!seen.has(n)) {
        seen.add(n);
    } else if (!seenTwice.has(n)) {
        seenTwice.add(n);
    }
    return parent[n] === undefined
        ? { root: n, seen }
        : findRoot(parent[n]!, parent, seen, seenTwice);
}

function getLoopNodes(parent: Array<number | undefined>) {
    let seen = new Set<number>();
    for (let n = 0; n < parent.length; n++) {
        if (seen.has(n)) {
            continue;
        }
        const result = findRoot(n, parent, seen);
        if (result.loop) {
            return result.loop;
        }
        seen = result.seen!;
    }
}
