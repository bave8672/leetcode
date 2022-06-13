/**
 * https://leetcode.com/problems/permutations-ii/
 *
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 */

export function permuteUnique(nums: number[]): number[][] {
    const set = new Set<string>();
    return permute(nums).filter((p) => {
        const str = p.join("");
        if (set.has(str)) {
            return false;
        }
        set.add(str);
        return true;
    });
}

function permute(nums: number[]): number[][] {
    if (nums.length <= 1) {
        return [nums];
    }
    if (nums.length === 2) {
        if (nums[0] === nums[1]) {
            return [nums];
        } else {
            return [nums, [nums[1], nums[0]]];
        }
    }
    const [head, ...tail] = nums;
    return permute(tail).reduce<number[][]>((acc, p) => {
        for (let i = 0; i <= p.length; i++) {
            const copy = [...p];
            copy.splice(i, 0, head);
            acc.push(copy);
        }
        return acc;
    }, []);
}
