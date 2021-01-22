/**
 * https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/
 *
 * You are given an array pairs, where pairs[i] = [xi, yi], and:
 *
 *     There are no duplicates.
 *     xi < yi
 *
 * Let ways be the number of rooted trees that satisfy the following conditions:
 *
 *     The tree consists of nodes whose values appeared in pairs.
 *     A pair [xi, yi] exists in pairs if and only if xi is an ancestor of yi or yi is an ancestor of xi.
 *     Note: the tree does not have to be a binary tree.
 *
 * Two ways are considered to be different if there is at least one node that has different parents in both ways.
 *
 * Return:
 *
 *     0 if ways == 0
 *     1 if ways == 1
 *     2 if ways > 1
 *
 * A rooted tree is a tree that has a single root node, and all edges are oriented to be outgoing from the root.
 *
 * An ancestor of a node is any node on the path from the root to that node (excluding the node itself). The root has no ancestors.
 *
 *
 *
 * Example 1:
 *
 * Input: pairs = [[1,2],[2,3]]
 * Output: 1
 * Explanation: There is exactly one valid rooted tree, which is shown in the above figure.
 *
 * Example 2:
 *
 * Input: pairs = [[1,2],[2,3],[1,3]]
 * Output: 2
 * Explanation: There are multiple valid rooted trees. Three of them are shown in the above figures.
 *
 * Example 3:
 *
 * Input: pairs = [[1,2],[2,3],[2,4],[1,5]]
 * Output: 0
 * Explanation: There are no valid rooted trees.
 *
 *
 *
 * Constraints:
 *
 *     1 <= pairs.length <= 105
 *     1 <= xi < yi <= 500
 *     The elements in pairs are unique.
 *
 *
 */

// tslint:disable-next-line: cognitive-complexity
export function checkWays(
    pairs: number[][],
    map = buildMap(pairs),
    list = buildList(map),
    depth = 0,
    mustFindRoot = true,
): number {
    /**
     * Use fact that the tree must contain one or more "root" nodes
     * which is connected to all others below
     *
     * if none such node exists, the answer is 0
     * if multiple roots exist, the answer is 2
     *
     * find the root node(s), then solve the identical subproblem for each child node
     * final answer is 0 if any are 0, otherwise 2 if any are 2, otherwise 1
     *
     * time O(n^2 * log(n)) space O(n^2)
     */
    if (map.size === 0) {
        return 0;
    }
    if (list.length === 0) {
        return 1;
    }
    let ways = 1;
    const roots: number[] = [];
    const rootPairs = list.length - 1 + depth;
    while (list.length && map.get(list[list.length - 1])!.size === rootPairs) {
        const root = list.pop()!;
        roots.push(root);
    }
    const isRoot = roots.length > 0;
    if (roots.length === 0) {
        if (mustFindRoot) {
            return 0;
        } else {
            roots.push(list.pop()!);
        }
    }
    if (roots.length > 1) {
        ways = 2;
    }
    const [oldList, newList] = splitPairs(roots, map, list);
    if (!isRoot) {
        newList.push(...roots);
    }
    return [
        ways,
        checkWays(pairs, map, oldList, depth, false),
        checkWays(
            pairs,
            map,
            newList,
            depth + (isRoot ? roots.length : 0),
            !isRoot,
        ),
    ].reduce((prev, next) =>
        prev === 0 || next === 0 ? 0 : prev === 2 || next === 2 ? 2 : 1,
    );
}

function splitPairs(
    xs: number[],
    map: Map<number, Set<number>>,
    list: number[],
): [number[], number[]] {
    const originalList: number[] = [];
    const pairsList: number[] = [];
    for (const x of list) {
        if (map.get(xs[0])!.has(x)) {
            pairsList.push(x);
        } else {
            originalList.push(x);
        }
    }
    return [originalList, pairsList];
}

function buildMap(pairs: number[][]): Map<number, Set<number>> {
    const map = new Map<number, Set<number>>();
    for (const [x, y] of pairs) {
        let setX = map.get(x);
        if (!setX) {
            setX = new Set();
            setX.add(y);
            map.set(x, setX);
        } else {
            setX.add(y);
        }
        let setY = map.get(y);
        if (!setY) {
            setY = new Set();
            setY.add(x);
            map.set(y, setY);
        } else {
            setY.add(x);
        }
    }
    return map;
}

function buildList(map: Map<number, Set<number>>): number[] {
    return Array.from(map)
        .sort((a, b) => a[1].size - b[1].size)
        .map(([x]) => x);
}
