// tslint:disable

export function reachableNodes(
    edges: Array<[number, number, number]>, // i, j, n
    M: number, // moves
    N: number // nodes
): number {
    if (N === 0) {
        return 0;
    }
    if (N === 1 || M === 0 || edges.length === 0) {
        return 1;
    }
    const nodes = createNodes(edges);
    priorityQueueDjisktra2(
        Array.from(nodes).map(([i, node]) => node),
        nodes.get(0)!
    );
    return countReachable(nodes, edges, M);
}

function countReachable(
    nodes: Map<number, DNode>,
    edges: Array<[number, number, number]>,
    M: number
): number {
    let reachable = 0;
    for (const [, node] of nodes) {
        if (node.distance! <= M) {
            reachable++;
        }
    }
    edges.forEach(edge => {
        reachable += countEdgeNodes(edge[0], edge[1], edge[2], nodes, M);
    });
    return reachable;
}

function countEdgeNodes(
    i: number,
    k: number,
    n: number,
    nodes: Map<number, DNode>,
    M: number
): number {
    const nodeI = nodes.get(i)!;
    const nodeK = nodes.get(k)!;
    return Math.min(
        n,
        Math.max(0, M - nodeI.distance!) + Math.max(0, M - nodeK.distance!)
    );
}

function createNodes(
    edges: Array<[number, number, number]>
): Map<number, DNode> {
    const nodes = new Map<number, DNode>();
    nodes.set(0, { edges: [] });
    edges.forEach(([i, j, n]) => {
        addEdge(i, j, n, nodes);
    });
    return nodes;
}

function addEdge(i: number, k: number, n: number, nodes: Map<number, DNode>) {
    const nodeI = getNode(i, nodes);
    const nodeK = getNode(k, nodes);
    nodeI.edges.push({ length: n + 1, node: nodeK });
    nodeK.edges.push({ length: n + 1, node: nodeI });
}

function getNode(i: number, nodes: Map<number, DNode>): DNode {
    return getOrSet(nodes, i, () => ({ edges: [] }));
}

function getOrSet<T, K>(map: Map<K, T>, key: K, getValue: () => T): T {
    let value = map.get(key);
    if (value === undefined) {
        value = getValue();
        map.set(key, value);
    }
    return value;
}

interface DNode {
    distance?: number;
    edges: Edge[];
    counted?: boolean;
}

interface Edge {
    length: number;
    node: DNode;
}

function priorityQueueDjisktra2(nodes: DNode[], source: DNode): DNode[] {
    const queue = new FibonacciHeapPriorityQueue2<DNode>(
        (a, b) => a.key - b.key
    );
    // Add tentative distances to nodes
    nodes.forEach(node => {
        if (node === source) {
            node.distance = 0;
        } else {
            node.distance = Number.POSITIVE_INFINITY;
        }
        queue.insertWithPriority(node, node.distance);
    });
    // iterate until all nodes are visited
    while (!queue.isEmpty()) {
        const current = queue.pullHighestPriorityElement();
        const edges = current.edges.filter(edge => queue.contains(edge.node));
        // minimise the distance for each neighbour
        edges.forEach(edge => {
            const distance = Math.min(
                edge.node.distance!,
                current.distance! + edge.length
            );
            if (distance < edge.node.distance!) {
                edge.node.distance = distance;
                queue.increasePriority(edge.node, distance);
            }
        });
    }
    return nodes;
}

/**
 * https://en.wikipedia.org/wiki/Priority_queue#Usual_implementation
 */
class FibonacciHeapPriorityQueue2<T extends {}> {
    public readonly heap: FibonacciHeap2<number, T>;
    public readonly map = new Map<T, Node<number, T>>();

    public constructor(compare: CompareFunction<number, T>) {
        this.heap = new FibonacciHeap2<number, T>(compare);
    }

    isEmpty(): boolean {
        return this.heap.isEmpty();
    }

    insertWithPriority(value: T, priority: number) {
        const node = this.heap.insert(priority, value);
        this.map.set(value, node);
    }

    pullHighestPriorityElement(): T {
        const max = this.heap.extractMinimum();
        const value = max!.value;
        this.map.delete(value);
        return value;
    }

    increasePriority(value: T, priority: number) {
        const node = this.map.get(value);
        this.heap.decreaseKey(node!, priority);
    }

    public contains(value: T): boolean {
        return this.map.has(value);
    }
}

/**
 * @license
 * Copyright Daniel Imms <http://www.growingwiththeweb.com>
 * Released under MIT license. See LICENSE in the project root for details.
 */

// tslint:disable

type CompareFunction<K, V> = (a: INode<K, V>, b: INode<K, V>) => number;

class FibonacciHeap2<K, V> {
    private _minNode: Node<K, V> | null = null;
    private _nodeCount: number = 0;
    private _compare: CompareFunction<K, V>;

    constructor(compare?: CompareFunction<K, V>) {
        this._compare = compare ? compare : this._defaultCompare;
    }

    /**
     * Clears the heap's data, making it an empty heap.
     */
    public clear(): void {
        this._minNode = null;
        this._nodeCount = 0;
    }

    /**
     * Decreases a key of a node.
     * @param node The node to decrease the key of.
     * @param newKey The new key to assign to the node.
     */
    public decreaseKey(node: Node<K, V>, newKey: K): void {
        if (!node) {
            throw new Error("Cannot decrease key of non-existent node");
        }
        if (this._compare({ key: newKey }, { key: node.key }) > 0) {
            throw new Error("New key is larger than old key");
        }

        node.key = newKey;
        const parent = node.parent;
        if (parent && this._compare(node, parent) < 0) {
            this._cut(node, parent, this._minNode as Node<K, V>);
            this._cascadingCut(parent, this._minNode as Node<K, V>);
        }
        if (this._compare(node, this._minNode as Node<K, V>) < 0) {
            this._minNode = node;
        }
    }

    /**
     * Deletes a node.
     * @param node The node to delete.
     */
    public delete(node: Node<K, V>): void {
        // This is a special implementation of decreaseKey that sets the argument to
        // the minimum value. This is necessary to make generic keys work, since there
        // is no MIN_VALUE constant for generic types.
        const parent = node.parent;
        if (parent) {
            this._cut(node, parent, this._minNode as Node<K, V>);
            this._cascadingCut(parent, this._minNode as Node<K, V>);
        }
        this._minNode = node;

        this.extractMinimum();
    }

    /**
     * Extracts and returns the minimum node from the heap.
     * @return The heap's minimum node or null if the heap is empty.
     */
    public extractMinimum(): Node<K, V> | null {
        const extractedMin = this._minNode;
        if (extractedMin) {
            // Set parent to null for the minimum's children
            if (extractedMin.child) {
                let child = extractedMin.child;
                do {
                    (child.parent as any) = null;
                    child = child.next;
                } while (child !== extractedMin.child);
            }

            let nextInRootList = null;
            if (extractedMin.next !== extractedMin) {
                nextInRootList = extractedMin.next;
            }
            // Remove min from root list
            this._removeNodeFromList(extractedMin);
            this._nodeCount--;

            // Merge the children of the minimum node with the root list
            this._minNode = this._mergeLists(
                nextInRootList,
                extractedMin.child
            );
            if (this._minNode) {
                this._minNode = this._consolidate(this._minNode);
            }
        }
        return extractedMin;
    }

    /**
     * Returns the minimum node from the heap.
     * @return The heap's minimum node or null if the heap is empty.
     */
    public findMinimum(): Node<K, V> | null {
        return this._minNode;
    }

    /**
     * Inserts a new key-value pair into the heap.
     * @param key The key to insert.
     * @param value The value to insert.
     * @return node The inserted node.
     */
    public insert(key: K, value?: V): Node<K, V> {
        const node = new Node(key, value);
        this._minNode = this._mergeLists(this._minNode, node);
        this._nodeCount++;
        return node;
    }

    /**
     * @return Whether the heap is empty.
     */
    public isEmpty(): boolean {
        return this._minNode === null;
    }

    /**
     * @return The size of the heap.
     */
    public size(): number {
        if (this._minNode === null) {
            return 0;
        }
        return this._getNodeListSize(this._minNode);
    }

    /**
     * Joins another heap to this heap.
     * @param other The other heap.
     */
    public union(other: FibonacciHeap2<K, V>): void {
        this._minNode = this._mergeLists(this._minNode, other._minNode);
        this._nodeCount += other._nodeCount;
    }

    /**
     * Compares two nodes with each other.
     * @param a The first key to compare.
     * @param b The second key to compare.
     * @return -1, 0 or 1 if a < b, a == b or a > b respectively.
     */
    private _defaultCompare(a: INode<K, V>, b: INode<K, V>): number {
        if (a.key > b.key) {
            return 1;
        }
        if (a.key < b.key) {
            return -1;
        }
        return 0;
    }

    /**
     * Cut the link between a node and its parent, moving the node to the root list.
     * @param node The node being cut.
     * @param parent The parent of the node being cut.
     * @param minNode The minimum node in the root list.
     * @return The heap's new minimum node.
     */
    private _cut(
        node: Node<K, V>,
        parent: Node<K, V>,
        minNode: Node<K, V>
    ): Node<K, V> | null {
        (node.parent as any) = null;
        parent.degree--;
        if (node.next === node) {
            (parent.child as any) = null;
        } else {
            parent.child = node.next;
        }
        this._removeNodeFromList(node);
        const newMinNode = this._mergeLists(minNode, node);
        node.isMarked = false;
        return newMinNode;
    }

    /**
     * Perform a cascading cut on a node; mark the node if it is not marked,
     * otherwise cut the node and perform a cascading cut on its parent.
     * @param node The node being considered to be cut.
     * @param minNode The minimum node in the root list.
     * @return The heap's new minimum node.
     */
    private _cascadingCut(
        node: Node<K, V>,
        minNode: Node<K, V> | null
    ): Node<K, V> | null {
        const parent = node.parent;
        if (parent) {
            if (node.isMarked) {
                minNode = this._cut(node, parent, minNode as Node<K, V>);
                minNode = this._cascadingCut(parent, minNode);
            } else {
                node.isMarked = true;
            }
        }
        return minNode;
    }

    /**
     * Merge all trees of the same order together until there are no two trees of
     * the same order.
     * @param minNode The current minimum node.
     * @return The new minimum node.
     */
    private _consolidate(minNode: Node<K, V>): Node<K, V> | null {
        const aux = [];
        const it = new NodeListIterator<K, V>(minNode);
        while (it.hasNext()) {
            let current = it.next();

            // If there exists another node with the same degree, merge them
            let auxCurrent = aux[current.degree];
            while (auxCurrent) {
                if (this._compare(current, auxCurrent) > 0) {
                    const temp = current;
                    current = auxCurrent;
                    auxCurrent = temp;
                }
                this._linkHeaps(auxCurrent, current);
                aux[current.degree] = null;
                current.degree++;
                auxCurrent = aux[current.degree];
            }

            aux[current.degree] = current;
        }

        let newMinNode = null;
        for (let i = 0; i < aux.length; i++) {
            const node = aux[i];
            if (node) {
                // Remove siblings before merging
                node.next = node;
                node.prev = node;
                newMinNode = this._mergeLists(newMinNode, node);
            }
        }
        return newMinNode;
    }

    /**
     * Removes a node from a node list.
     * @param node The node to remove.
     */
    private _removeNodeFromList(node: Node<K, V>): void {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        node.next = node;
        node.prev = node;
    }

    /**
     * Links two heaps of the same order together.
     *
     * @private
     * @param max The heap with the larger root.
     * @param min The heap with the smaller root.
     */
    private _linkHeaps(max: Node<K, V>, min: Node<K, V>): void {
        this._removeNodeFromList(max);
        (min.child as any) = this._mergeLists(max, min.child);
        max.parent = min;
        max.isMarked = false;
    }

    /**
     * Merge two lists of nodes together.
     *
     * @private
     * @param a The first list to merge.
     * @param b The second list to merge.
     * @return The new minimum node from the two lists.
     */
    private _mergeLists(
        a: Node<K, V> | null,
        b: Node<K, V> | null
    ): Node<K, V> | null {
        if (!a) {
            if (!b) {
                return null;
            }
            return b;
        }
        if (!b) {
            return a;
        }

        const temp = a.next;
        a.next = b.next;
        a.next.prev = a;
        b.next = temp;
        b.next.prev = b;

        return this._compare(a, b) < 0 ? a : b;
    }

    /**
     * Gets the size of a node list.
     * @param node A node within the node list.
     * @return The size of the node list.
     */
    private _getNodeListSize(node: Node<K, V>): number {
        let count = 0;
        let current = node;

        do {
            count++;
            if (current.child) {
                count += this._getNodeListSize(current.child);
            }
            current = current.next;
        } while (current !== node);

        return count;
    }
}

class Node<K, V> implements INode<K, V> {
    public key: K;
    public value: V;
    public prev: Node<K, V>;
    public next: Node<K, V>;
    public parent!: Node<K, V>;
    public child!: Node<K, V>;

    public degree: number = 0;
    public isMarked: boolean = false;

    constructor(key: K, value?: V) {
        this.key = key;
        this.value = value as any;
        this.prev = this;
        this.next = this;
    }
}

class NodeListIterator<K, V> {
    private _index: number;
    private _items: Array<Node<K, V>>;

    /**
     * Creates an Iterator used to simplify the consolidate() method. It works by
     * making a shallow copy of the nodes in the root list and iterating over the
     * shallow copy instead of the source as the source will be modified.
     * @param start A node from the root list.
     */
    constructor(start: Node<K, V>) {
        this._index = -1;
        this._items = [];
        let current = start;
        do {
            this._items.push(current);
            current = current.next;
        } while (start !== current);
    }

    /**
     * @return Whether there is a next node in the iterator.
     */
    public hasNext(): boolean {
        return this._index < this._items.length - 1;
    }

    /**
     * @return The next node.
     */
    public next(): Node<K, V> {
        return this._items[++this._index];
    }
}

// file: interfaces.d.ts

interface INode<K, V> {
    key: K;
    value?: V;
}
