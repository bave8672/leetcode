/**
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive)
 * of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 */
export class LRUCache {
    /**
     * The number of entries currently in the cache
     */
    public size = 0;
    /**
     * Reference to the head of the doubly-linked list
     */
    public head?: Node;
    /**
     * Reference to the tail of the double-linked list
     */
    public tail?: Node;
    /**
     * Lookup table mapping keys to their corresponding nodes in the linked list
     */
    public readonly hash = new Map<number, Node>();

    constructor(public readonly capacity: number) {}

    /**
     * Look up the key in the hash map,
     * and if found stitch it to the head of the list
     * @param key
     */
    public get(key: number): number {
        const cached = this.hash.get(key);
        if (cached === undefined) {
            return -1;
        }
        if (this.head !== cached) {
            if (cached === this.tail) {
                this.tail = this.tail.prev;
            }
            remove(cached);
            insertBefore(cached, this.head!);
            this.head = cached;
        }
        return cached.value;
    }

    /**
     * Check if value exists in the cache
     * If so, stitch it to the head of the list
     * If not, add a new entry to the head of the list
     * And bump the bottom off the list if the capacity is exceeded
     * @param key
     * @param value
     */
    public put(key: number, value: number): void {
        const cached = this.hash.get(key);
        if (cached) {
            if (cached === this.head) {
                this.head = this.head.next;
            } else if (cached === this.tail) {
                this.tail = this.tail.prev;
            }
            remove(cached);
        }
        if (!cached && this.size === this.capacity) {
            if (this.tail) {
                this.hash.delete(this.tail.key);
                this.tail = remove(this.tail).prev;
            } else if (this.head) {
                this.hash.clear();
                this.head = undefined;
            }
        } else if (!cached) {
            this.size++;
        }
        const node: Node = { key, value };
        this.hash.set(key, node);
        if (!this.head) {
            this.head = node;
        } else {
            insertBefore(node, this.head);
            this.head = node;
        }
        if (this.size >= 2 && !this.tail) {
            this.tail = this.head.next;
        }
    }
}

interface Node {
    key: number;
    value: number;
    prev?: Node;
    next?: Node;
}

function remove(node: Node) {
    const prev = node.prev;
    const next = node.next;
    delete node.prev;
    delete node.next;
    if (prev) {
        prev.next = next;
    }
    if (next) {
        next.prev = prev;
    }
    return { prev, next };
}

function insertBefore(node: Node, next: Node) {
    if (!next) {
        return;
    }
    const prev = next.prev;
    next.prev = node;
    node.next = next;
    node.prev = prev;
    if (prev) {
        prev.next = node;
    }
}
