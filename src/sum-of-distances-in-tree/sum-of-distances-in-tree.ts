/**
 * An undirected, connected tree with N nodes labelled 0...N-1 and N-1 edges are given.
 *
 * The ith edge connects nodes edges[i][0] and edges[i][1] together.
 *
 * Return a list ans, where ans[i] is the sum of the distances between node i and all other nodes.
 *
 * Example 1:
 * ```
 * Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
 * Output: [8,12,6,10,10,10]
 * Explanation:
 * Here is a diagram of the given tree:
 *   0
 *  / \
 * 1   2
 *    /|\
 *   3 4 5
 * We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
 * equals 1 + 1 + 2 + 2 + 2 = 8.  Hence, answer[0] = 8, and so on.
 * ```
 * Note: 1 <= N <= 10000
 */
export function sumOfDistancesInTree(N: number, edges: number[][]): number[] {
    if (N === 1) {
        return [0];
    }
    const graph = buildGraph(edges);
    const distances: number[] = [];
    for (let i = 0; i < N; i++) {
        distances.push(graph.get(i)!.getSum().sum);
    }
    return distances;
}

function buildGraph(edges: number[][]) {
    const map = new Map<number, Node>();
    edges.forEach((edge) => {
        const head = getOrSet(map, edge[0], () => new Node(edge[0]));
        const tail = getOrSet(map, edge[1], () => new Node(edge[1]));
        Node.connect(head, tail);
    });
    return map;
}

class Node {
    public static connect(head: Node, tail: Node) {
        head.neighbors.set(tail.value, tail);
        tail.neighbors.set(head.value, head);
    }
    public readonly neighbors = new Map<number, Node>();
    private readonly sumExcludingAndPaths = new Map<
        number | undefined,
        { sum: number; paths: number }
    >();

    public constructor(public readonly value: number) {}

    public getSum(exclude?: number): { sum: number; paths: number } {
        return getOrSet(this.sumExcludingAndPaths, exclude, () => {
            let sum = 0;
            let paths = 0;
            for (const [key, node] of this.neighbors) {
                if (key !== exclude) {
                    const childSum = node.getSum(this.value);
                    paths += 1 + childSum.paths;
                    sum += 1 + childSum.paths + childSum.sum;
                }
            }
            return {
                paths,
                sum,
            };
        });
    }
}

function getOrSet<T, K>(map: Map<K, T>, key: K, getValue: () => T): T {
    let value = map.get(key);
    if (value === undefined) {
        value = getValue();
        map.set(key, value);
    }
    return value;
}
