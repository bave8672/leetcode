/**
 * https://leetcode.com/problems/sliding-window-maximum/
 *
 * <problem description>
 */

/**
 * Precompute maxLaft and maxRight over intervals of k
 * And use boundary to calculate
 * O(n) time and space
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
    const maxLeft: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        maxLeft.push(i % k ? Math.max(maxLeft[i - 1], nums[i]) : nums[i]);
    }
    const maxRight: number[] = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        maxRight.unshift(
            i % k !== k - 1
                ? Math.max(maxRight[0] || Number.NEGATIVE_INFINITY, nums[i])
                : nums[i],
        );
    }
    const max: number[] = [];
    for (let i = 0; i <= nums.length - k; i++) {
        max.push(Math.max(maxRight[i], maxLeft[i + k - 1]));
    }
    return max;
}

/**
 * Binary heap soln O(n.log(n)) time O(k) space
 * Can be O(n) time if using e.g. a Fibonacci heap
 */
export function maxSlidingWindow2(nums: number[], k: number): number[] {
    const heap = new Heap();
    for (let i = 0; i < k && i < nums.length; i++) {
        heap.add(nums[i]);
    }
    const max: number[] = [];
    max.push(heap.peek()!);
    for (let i = 0; i < nums.length - k; i++) {
        heap.remove(nums[i]);
        heap.add(nums[i + k]);
        max.push(heap.peek()!);
    }
    return max;
}

/** Binary heap */
class Heap {
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
