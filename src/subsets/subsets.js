/**
 * Given a set of distinct integers, nums,
 * return all possible subsets (the power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
    const subsets = [];
    for (let n = 0; n < 2 ** nums.length; n++) {
        const set = [];
        n.toString(2)
            .split("")
            .reverse()
            .forEach((b, i) => {
                if (b === "1") {
                    set.push(nums[i]);
                }
            });
        subsets.push(set);
    }
    return subsets;
};
