import { LRUCache } from "./lru-cache";

// tslint:disable:no-commented-code

// tslint:disable-next-line: no-big-function
describe("lru cache", () => {
    it(`0`, () => {
        const cache = new LRUCache(2 /* capacity */);
        cache.put(1, 1);
        cache.put(2, 2);
        expect(cache.get(1)).toBe(1); // returns 1
        cache.put(3, 3); // evicts key 2
        expect(cache.get(2)).toBe(-1); // returns -1 (not found)
        cache.put(4, 4); // evicts key 1
        expect(cache.get(1)).toBe(-1); // returns -1 (not found)
        expect(cache.get(3)).toBe(3); // returns 3
        expect(cache.get(4)).toBe(4); // returns 4
    });

    it(`1`, () => {
        const cache = new LRUCache(3);
        cache.put(1, 10);
        cache.put(2, 20);
        cache.put(2, 20);
        cache.put(2, 20);
        cache.put(2, 20);
        cache.put(2, 20);
        expect(cache.get(1)).toBe(10);
        expect(cache.get(2)).toBe(20);
    });

    it(`2`, () => {
        const cache = new LRUCache(3);
        cache.put(1, 10);
        cache.put(2, 20);
        cache.put(3, 30);
        cache.get(1);
        cache.put(4, 40);
        expect(cache.get(2)).toBe(-1);
        expect(cache.get(1)).toBe(10);
        expect(cache.get(3)).toBe(30);
        expect(cache.get(4)).toBe(40);
        expect(cache.get(2)).toBe(-1);
    });

    it(`3`, () => {
        const cache = new LRUCache(2);
        cache.put(1, 10);
        cache.put(2, 20);
        cache.put(3, 30);
        cache.put(4, 40);
        cache.get(2);
        cache.put(5, 50);
        cache.put(6, 60);
        cache.put(7, 70);
        cache.put(8, 80);
    });

    // tslint:disable-next-line: no-big-function
    it(`4`, () =>
        run(
            [
                "LRUCache",
                "put",
                "put",
                "put",
                "put",
                "put",
                "get",
                "put",
                "get",
                "get",
                "put",
                "get",
                "put",
                "put",
                "put",
                "get",
                "put",
                "get",
                "get",
                "get",
                "get",
                "put",
                "put",
                "get",
                "get",
                "get",
                "put",
                "put",
                "get",
                "put",
                "get",
                "put",
                "get",
                "get",
                "get",
                "put",
                "put",
                "put",
                "get",
                "put",
                "get",
                "get",
                "put",
                "put",
                "get",
                "put",
                "put",
                "put",
                "put",
                "get",
                "put",
                "put",
                "get",
                "put",
                "put",
                "get",
                "put",
                "put",
                "put",
                "put",
                "put",
                "get",
                "put",
                "put",
                "get",
                "put",
                "get",
                "get",
                "get",
                "put",
                "get",
                "get",
                "put",
                "put",
                "put",
                "put",
                "get",
                "put",
                "put",
                "put",
                "put",
                "get",
                "get",
                "get",
                "put",
                "put",
                "put",
                "get",
                "put",
                "put",
                "put",
                "get",
                "put",
                "put",
                "put",
                "get",
                "get",
                "get",
                "put",
                "put",
                "put",
                "put",
                "get",
                "put",
                "put",
                "put",
                "put",
                "put",
                "put",
                "put",
            ],
            [
                [10],
                [10, 13],
                [3, 17],
                [6, 11],
                [10, 5],
                [9, 10],
                [13],
                [2, 19],
                [2],
                [3],
                [5, 25],
                [8],
                [9, 22],
                [5, 5],
                [1, 30],
                [11],
                [9, 12],
                [7],
                [5],
                [8],
                [9],
                [4, 30],
                [9, 3],
                [9],
                [10],
                [10],
                [6, 14],
                [3, 1],
                [3],
                [10, 11],
                [8],
                [2, 14],
                [1],
                [5],
                [4],
                [11, 4],
                [12, 24],
                [5, 18],
                [13],
                [7, 23],
                [8],
                [12],
                [3, 27],
                [2, 12],
                [5],
                [2, 9],
                [13, 4],
                [8, 18],
                [1, 7],
                [6],
                [9, 29],
                [8, 21],
                [5],
                [6, 30],
                [1, 12],
                [10],
                [4, 15],
                [7, 22],
                [11, 26],
                [8, 17],
                [9, 29],
                [5],
                [3, 4],
                [11, 30],
                [12],
                [4, 29],
                [3],
                [9],
                [6],
                [3, 4],
                [1],
                [10],
                [3, 29],
                [10, 28],
                [1, 20],
                [11, 13],
                [3],
                [3, 12],
                [3, 8],
                [10, 9],
                [3, 26],
                [8],
                [7],
                [5],
                [13, 17],
                [2, 27],
                [11, 15],
                [12],
                [9, 19],
                [2, 15],
                [3, 16],
                [1],
                [12, 17],
                [9, 1],
                [6, 19],
                [4],
                [5],
                [5],
                [8, 1],
                [11, 7],
                [5, 2],
                [9, 28],
                [1],
                [2, 2],
                [7, 4],
                [4, 22],
                [7, 24],
                [9, 26],
                [13, 28],
                [11, 26],
            ],
            [
                null,
                null,
                null,
                null,
                null,
                null,
                -1,
                null,
                19,
                17,
                null,
                -1,
                null,
                null,
                null,
                -1,
                null,
                -1,
                5,
                -1,
                12,
                null,
                null,
                3,
                5,
                5,
                null,
                null,
                1,
                null,
                -1,
                null,
                30,
                5,
                30,
                null,
                null,
                null,
                -1,
                null,
                -1,
                24,
                null,
                null,
                18,
                null,
                null,
                null,
                null,
                -1,
                null,
                null,
                18,
                null,
                null,
                -1,
                null,
                null,
                null,
                null,
                null,
                18,
                null,
                null,
                -1,
                null,
                4,
                29,
                30,
                null,
                12,
                -1,
                null,
                null,
                null,
                null,
                29,
                null,
                null,
                null,
                null,
                17,
                22,
                18,
                null,
                null,
                null,
                -1,
                null,
                null,
                null,
                20,
                null,
                null,
                null,
                -1,
                18,
                18,
                null,
                null,
                null,
                null,
                20,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ],
        ));

    it(`5`, () =>
        run(
            ["LRUCache", "put", "get", "put", "get", "get"],
            [[1], [2, 1], [2], [3, 2], [2], [3]],
            [null, null, 1, null, -1, 2],
        ));

    // tslint:disable-next-line: cognitive-complexity
    function run(
        commands: Array<"LRUCache" | "put" | "get">,
        args: number[][],
        expectedOutput: Array<number | null>,
    ) {
        let lruCache: LRUCache;
        commands.forEach((command, i) => {
            switch (command) {
                case "LRUCache":
                    lruCache = new LRUCache(args[i][0]);
                    break;
                case "put":
                    lruCache.put(args[i][0], args[i][1]);
                    break;
                case "get":
                    {
                        try {
                            expect(lruCache.get(args[i][0])).toBe(
                                expectedOutput[i],
                            );
                        } catch (err) {
                            // debugger;
                        }
                    }
                    break;
            }
            if (lruCache.size !== lruCache.hash.size) {
                // debugger;
                throw new Error(`size mismatch`);
            }
            let n = 0;
            let node = lruCache.head;
            while (node) {
                n++;
                if (n > lruCache.size) {
                    // debugger;
                    throw new Error(`list loop`);
                }
                node = node.next;
            }
            if (n !== lruCache.size) {
                // debugger;
                throw new Error("list size mismatch down");
            }
            n = 0;
            node = lruCache.tail;
            while (node) {
                n++;
                if (n > lruCache.size) {
                    // debugger;
                    throw new Error(`list loop`);
                }
                node = node.prev;
            }
            if (lruCache.size > 1 && n !== lruCache.size) {
                // debugger;
                throw new Error("list size mismatch up");
            }
        });
    }
});
