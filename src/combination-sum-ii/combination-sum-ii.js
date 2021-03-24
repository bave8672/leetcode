/**
 * https://leetcode.com/problems/combination-sum-ii/
 *
 * <problem description>
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    return _combinationSum2(
        candidates.sort((a, b) => a - b),
        target,
        0,
    );
};

var _combinationSum2 = function (candidates, target, offset) {
    if (offset >= candidates.length || target <= 0) {
        return [];
    }
    const combinations = [];
    const candidate = candidates[offset];
    if (candidate === target) {
        combinations.push([candidate]);
    } else {
        combinations.push(
            ..._combinationSum2(
                candidates,
                target - candidate,
                offset + 1,
            ).map((com) => [candidate, ...com]),
        );
    }
    while (candidates[offset] === candidate) {
        offset++;
    }
    combinations.push(..._combinationSum2(candidates, target, offset));
    return combinations;
};

const c1 = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);

debugger;
