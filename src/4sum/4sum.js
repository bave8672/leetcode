/**
 * https://leetcode.com/problems/4sum/
 *
 * <problem description>
 */

var fourSum = function (nums, target, cardinality, offset, memo, deduplicate) {
    if (cardinality === undefined) {
        cardinality = 4;
    }
    if (offset === undefined) {
        offset = 0;
    }
    if (cardinality < 1 || offset > nums.length - cardinality) {
        return [];
    }
    if (!memo) {
        memo = [];
    }
    if (!memo[target]) {
        memo[target] = [];
    }
    if (!memo[target][cardinality]) {
        memo[target][cardinality] = [];
    } else if (memo[target][cardinality][offset]) {
        return memo[target][cardinality][offset];
    }
    if (deduplicate === undefined) {
        nums = nums.sort((x, y) => x - y);
    }
    let results = [];
    if (cardinality === 1 && nums[offset] === target) {
        results.push([target]);
    } else {
        results.push(
            ...fourSum(nums, target, cardinality, offset + 1, memo, false),
            ...fourSum(
                nums,
                target - nums[offset],
                cardinality - 1,
                offset + 1,
                memo,
                false,
            ).map((arr) => [nums[offset], ...arr]),
        );
    }
    memo[target][cardinality][offset] = results;
    if (deduplicate === undefined) {
        const set = new Set();
        let i = 0;
        while (i < results.length) {
            const key = results[i].join("");
            if (set.has(key)) {
                results.splice(i, 1);
            } else {
                set.add(key);
                i++;
            }
        }
    }
    return results;
};

exports.fourSum = fourSum;
