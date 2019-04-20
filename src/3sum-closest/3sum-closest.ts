export const threeSumClosest = (nums: number[], target: number) => {
    // sort numbers
    nums.sort((a, b) => a - b);
    // store best answer
    let result = -1;
    let closestDistance = Number.MAX_SAFE_INTEGER;
    // iterate over each number
    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicates
        while (i > 0 && nums[i] === nums[i - 1]) {
            i++;
        }
        // bilinear search remaining set for results
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            const dist = Math.abs(sum - target);

            // check against best answer
            if (dist < closestDistance) {
                closestDistance = dist;
                result = sum;
            }
            // increment/decrement search indices
            if (sum <= target) {
                lo++;
                while (nums[lo] === nums[lo - 1]) {
                    lo++;
                }
            } else {
                hi--;
                while (nums[hi] === nums[hi + 1]) {
                    hi--;
                }
            }
        }
    }

    return result;
};
