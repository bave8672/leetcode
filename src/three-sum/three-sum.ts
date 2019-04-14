/**
 * https://leetcode.com/problems/three-sum/
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 */
export function threeSum(nums: number[]): number[] {
    const as: Set<number> = new Set();
    const bs: Set<number> = new Set();
    const cs: Set<number> = new Set();
    const complementsAb: Map<number, number[]> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];

        if (!as.has(n)) {
            as.add(n);
        } else if (!bs.has(n)) {
            as.forEach(a => {
                const complementAb = -a - n;
                if (!complementsAb.has(complementAb)) {
                    complementsAb.set(complementAb, [a, n]);
                }
            });
            bs.add(n);
        } else if (!cs.has(n)) {
            if (complementsAb.has(n)) {
                return [...complementsAb.get(n)!, n];
            }
            cs.add(n);
        }
    }

    console.log({
        as,
        bs,
        cs
    });

    cs.forEach(c => {
        if (complementsAb.has(c)) {
            return [...complementsAb.get(c)!, c];
        }
    });

    throw new Error(`no solution`);
}
