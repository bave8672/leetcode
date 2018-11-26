function medianOfSortedArray(nums: number[]): number {
    return nums.length % 2
        ? nums[(nums.length - 1) / 2]
        : (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // console.log(nums1, nums2);

    // Case where one array is empty
    // Result is median of no-empty array
    if (nums1.length === 0) {
        return medianOfSortedArray(nums2);
    } else if (nums2.length === 0) {
        return medianOfSortedArray(nums1);
    }

    // Case where arrays have no intersection
    // Result is median of concatenated arrays
    else if (nums1[nums1.length - 1] <= nums2[0]) {
        return medianOfSortedArray([...nums1, ...nums2]);
    } else if (nums2[nums2.length - 1] <= nums1[0]) {
        return medianOfSortedArray([...nums2, ...nums1]);
    }

    // Base case where arrays can be merged in O(1) equivalent time
    else if (nums1.length <= 2 && nums2.length <= 2) {
        const merged = [];
        while (nums1.length || nums2.length) {
            merged.push(
                nums1.length && (!nums2.length || nums1[0] <= nums2[0])
                    ? (nums1.shift() as number)
                    : (nums2.shift() as number)
            );
        }
        return medianOfSortedArray(merged);
    }

    // Case where arrays have intersection
    // Median must be in between two existing medians
    // Remove non-contributing half of smaller array
    // And corresponding non-contributing elements of larger array
    const sliceCount = Math.max(
        Math.floor(Math.min(nums1.length, nums2.length) / 2) - 1,
        1
    );
    const median1 = medianOfSortedArray(nums1);
    const median2 = medianOfSortedArray(nums2);
    let newNums1 = nums1.slice();
    let newNums2 = nums2.slice();

    if (
        (median1 <= median2 && nums1.length > 2) ||
        ((nums1.length <= 2 || nums2.length <= 2) && nums1[0] <= nums2[0])
    ) {
        newNums1 = newNums1.slice(sliceCount);
    } else {
        newNums2 = newNums2.slice(sliceCount);
    }

    if (
        (median1 > median2 && nums1.length > 2) ||
        ((nums1.length <= 2 || nums2.length <= 2) &&
            nums1[nums1.length - 1] >= nums2[nums2.length - 1])
    ) {
        newNums1 = newNums1.slice(0, newNums1.length - sliceCount);
    } else {
        newNums2 = newNums2.slice(0, newNums2.length - sliceCount);
    }

    return findMedianSortedArrays(newNums1, newNums2);
}

import assert from "assert";
assert.equal(medianOfSortedArray([1, 2, 3]), 2);
assert.equal(medianOfSortedArray([1, 1, 3, 2]), 2);
assert.equal(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
assert.equal(findMedianSortedArrays([1, 2], [3]), 2);
assert.equal(findMedianSortedArrays([1, 3], [2]), 2);
assert.equal(findMedianSortedArrays([1, 2], [-1, 3]), 1.5);
assert.equal(findMedianSortedArrays([1, 2, 2], [1, 2, 3]), 2);
assert.equal(findMedianSortedArrays([2], [1, 3, 4]), 2.5);
assert.equal(findMedianSortedArrays([1, 2, 3, 8], [4, 5, 6, 7]), 4.5);
assert.equal(
    findMedianSortedArrays(
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
        [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ),
    3
);
assert.equal(findMedianSortedArrays([1, 3, 4], [2]), 2.5);
