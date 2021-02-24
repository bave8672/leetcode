/**
 * https://leetcode.com/problems/candy/
 *
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 *
 * You are giving candies to these children subjected to the following requirements:
 *
 *     Each child must have at least one candy.
 *     Children with a higher rating get more candies than their neighbors.
 *
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 *
 *
 *
 * Example 1:
 *
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 *
 * Example 2:
 *
 * Input: ratings = [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 * The third child gets 1 candy because it satisfies the above two conditions.
 *
 *
 *
 * Constraints:
 *
 *     n == ratings.length
 *     1 <= n <= 2 * 104
 *     1 <= ratings[i] <= 2 * 104
 *
 *
 */

// tslint:disable-next-line: cognitive-complexity
// Test mins from left then right
// time O(n) space O(n)
export function candy(ratings: number[]): number {
    const candies: number[] = [];
    for (let i = 0; i < ratings.length; i++) {
        candies.push(ratings[i - 1] < ratings[i] ? candies[i - 1] + 1 : 1);
    }
    for (let i = ratings.length - 1; i >= 0; i--) {
        candies[i] = Math.max(
            candies[i],
            ratings[i + 1] < ratings[i] ? candies[i + 1] + 1 : 1,
        );
    }
    return candies.reduce((sum, next) => sum + next, 0);
}

// Partial complete solution - suboptimal
// tslint:disable-next-line: cognitive-complexity
export function _candy(ratings: number[]): number {
    const shortRatings: number[] = [];
    let incomplete: number[] = [];
    const weights = new Map<number, number>([]);
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] !== ratings[i - 1]) {
            shortRatings.push(ratings[i] + 1);
            incomplete.push(shortRatings.length - 1);
        }
        let weight = weights.get(shortRatings.length - 1) || 0;
        weight++;
        weights.set(shortRatings.length - 1, weight);
    }
    const complete = new Set<number>([-1, shortRatings.length]);
    let candyCount = 0;
    while (incomplete.length > 0) {
        const nextIncomplete: number[] = [];
        for (const i of incomplete) {
            if (
                (shortRatings[i - 1] || Number.MAX_VALUE) >= shortRatings[i] &&
                (shortRatings[i + 1] || Number.MAX_VALUE) >= shortRatings[i]
            ) {
                shortRatings[i] = 1;
                complete.add(i);
                candyCount += shortRatings[i] * weights.get(i)!; // complete: candy = 1
            } else if (
                (shortRatings[i - 1] || Number.MAX_VALUE) < shortRatings[i] &&
                (shortRatings[i + 1] || Number.MAX_VALUE) < shortRatings[i]
            ) {
                shortRatings[i] = Math.max(
                    (shortRatings[i - 1] || 0) + 1,
                    (shortRatings[i + 1] || 0) + 1,
                );
                if (complete.has(i - 1) && complete.has(i + 1)) {
                    complete.add(i);
                    candyCount +=
                        Math.min(2, weights.get(i)!) * shortRatings[i] +
                        Math.max(0, weights.get(i)! - 2) *
                            Math.max(1, shortRatings[i] - 1);
                } else {
                    nextIncomplete.push(i);
                }
            } else if (
                (shortRatings[i - 1] || Number.MAX_VALUE) < shortRatings[i]
            ) {
                shortRatings[i] = (shortRatings[i - 1] || 0) + 1;
                if (complete.has(i - 1)) {
                    complete.add(i);
                    candyCount +=
                        shortRatings[i] +
                        Math.max(0, weights.get(i)! - 1) *
                            Math.max(1, shortRatings[i] - 1);
                } else {
                    nextIncomplete.push(i);
                }
            } else if (
                (shortRatings[i + 1] || Number.MAX_VALUE) < shortRatings[i]
            ) {
                shortRatings[i] = (shortRatings[i + 1] || 0) + 1;
                if (complete.has(i + 1)) {
                    complete.add(i);
                    candyCount +=
                        shortRatings[i] +
                        Math.max(0, weights.get(i)! - 1) *
                            Math.max(1, shortRatings[i] - 1);
                } else {
                    nextIncomplete.push(i);
                }
            } else {
                throw new Error(`help`);
            }
        }
        incomplete = nextIncomplete;
    }
    return candyCount;
}
