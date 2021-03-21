/**
 * https://leetcode.com/problems/combination-sum/
 *
 * <problem description>
 */

function combinationSum(candidates, target) {
    return _combinationSum(candidates, target, 0, []);
}

function _combinationSum(candidates, target, offset, memo) {
    if (offset >= candidates.length || target <= 0) {
        return [];
    }
    // if (!memo[offset]) {
    //     memo[offset] = [];
    // } else if (memo[offset][target]) {
    //     return memo[offset][target];
    // }
    const combinations = [];
    combinations.push();
    const copies = [];
    while (target >= 0) {
        if (target === 0) {
            combinations.push([...copies]);
        } else {
            combinations.push(
                ..._combinationSum(
                    candidates,
                    target,
                    offset + 1,
                    memo,
                ).map((com) => [...copies, ...com]),
            );
        }
        target -= candidates[offset];
        copies.push(candidates[offset]);
    }
    return combinations;
    // memo[offset][target] = combinations;
    // return memo[offset][target];
}

const c = combinationSum([2, 3, 5], 8);

debugger;
