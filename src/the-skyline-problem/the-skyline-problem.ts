/**
 * https://leetcode.com/problems/the-skyline-problem/
 *
 * A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.
 *
 * The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:
 *
 *     lefti is the x coordinate of the left edge of the ith building.
 *     righti is the x coordinate of the right edge of the ith building.
 *     heighti is the height of the ith building.
 *
 * You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.
 *
 * The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.
 *
 * Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...]
 */

const enum Side {
    LEFT,
    RIGHT,
}

type Edge =
    | { side: Side.LEFT; height: number; x: number }
    | { side: Side.RIGHT; height: number; x: number };

export function getSkyline(buildings: [number, number, number][]): number[][] {
    // 1. split buildings into lefts and rights, sorted by position - O(n.log(n))
    // 2. Traverse lefts and rights on order (O(n)) and for each:
    //   a) If left, and the height is greater than the current height, push a point onto the skyline / modify the existing point at the current location
    //   b) If left, push the height onto a heap - O(1) or O(log(n)) time depending on heap impl, O(1) space
    //   c) If right, remove the item from the heap (O(1)), find the new max height from the top element of the heap (O(1)) and if lower, push a new point onto the skyline / update the existing point at the current location
    // Overall: O(n.log(n)) time, O(n) space

    const skyline: [number, number][] = [];
    // 1.
    const edges: Edge[] = buildings
        .flatMap(([left, right, height]) => [
            { side: Side.LEFT, height, x: left },
            { side: Side.RIGHT, height, x: right },
        ])
        .sort((a, b) => {
            if (a.x === b.x) {
                return a.side === Side.LEFT ? -1 : 1;
            } else {
                return a.x - b.x;
            }
        });
    // 2.
    const heightHeap = new HeightHeap();
    let currHeight = 0;
    let prevX = 0;
    for (const edge of edges) {
        if (edge.side === Side.LEFT) {
            // a)
            if (edge.height > currHeight) {
                currHeight = edge.height;
                if (edge.x === prevX && skyline.length) {
                    skyline[skyline.length - 1][1] = edge.height;
                } else {
                    skyline.push([edge.x, edge.height]);
                }
                prevX = edge.x;
            }
            // b)
            heightHeap.add(edge.height);
        } else {
            // c)
            heightHeap.remove(edge.height);
            const newHeight = heightHeap.peek() || 0;
            if (newHeight < currHeight) {
                currHeight = newHeight;
                if (edge.x === prevX && skyline.length) {
                    skyline[skyline.length - 1][1] = newHeight;
                } else {
                    skyline.push([edge.x, newHeight]);
                }
                prevX = edge.x;
            }
        }
    }

    return skyline;
}

interface Heap<T> {
    add(value: T): void;
    remove(value: T): void;
    peek(): T | undefined;
}

class HeightHeap implements Heap<number> {
    private arr: number[] = [];

    add(value: number): void {
        this.arr.splice(this.findIdx(value) + 1, 0, value);
    }

    remove(value: number): void {
        const id = this.findIdx(value);
        if (this.arr[id] === value) {
            this.arr.splice(this.findIdx(value), 1);
        }
    }

    peek(): number | undefined {
        return this.arr[this.arr.length - 1];
    }

    /**
     * Returns either the array idx of the value or it's in order insertion point
     */
    private findIdx(value: number): number {
        let i = 0;
        let j = this.arr.length - 1;
        while (i < j) {
            const testId = Math.round((i + j) / 2);
            const test = this.arr[testId];
            if (value > test) {
                i = Math.min(testId + 1, j);
            } else if (value < test) {
                j = Math.max(testId - 1, i);
            } else {
                return testId;
            }
        }
        if (this.arr[i] > value) {
            return i - 1;
        }
        return i;
    }
}

// exported for testing
export function findIdx(value: number, arr: number[]) {
    let i = 0;
    let j = arr.length - 1;
    while (i !== j) {
        const testId = Math.round((i + j) / 2);
        const test = arr[testId];
        if (value > test) {
            i = testId + 1;
        } else if (value < test) {
            j = testId - 1;
        } else {
            return testId;
        }
    }
    if (arr[i] > value) {
        return i - 1;
    }
    return i;
}
