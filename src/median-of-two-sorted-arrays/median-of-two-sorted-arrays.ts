export function medianOfSortedArray(nums: number[]): number {
    return nums.length % 2
        ? nums[(nums.length - 1) / 2]
        : (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
}

// tslint:disable-next-line: cognitive-complexity
export function findMedianSortedArrays(
    nums1: number[],
    nums2: number[],
): number {
    // Case where one array is empty
    // Result is median of no-empty array
    if (nums1.length === 0) {
        return medianOfSortedArray(nums2);
    } else if (nums2.length === 0) {
        return medianOfSortedArray(nums1);
    }

    // Case where arrays do not intersect
    // Combine arrays in O(1)
    // Median is median of combined array
    if (nums1[nums1.length - 1] <= nums2[0]) {
        return medianOfSortedArray([...nums1, ...nums2]);
    } else if (nums2[nums2.length - 1] <= nums1[0]) {
        return medianOfSortedArray([...nums2, ...nums1]);
    } else if (nums1.length <= 2 && nums2.length <= 2) {
        const merged = [];
        while (nums1.length || nums2.length) {
            merged.push(
                nums1.length && (!nums2.length || nums1[0] <= nums2[0])
                    ? (nums1.shift() as number)
                    : (nums2.shift() as number),
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
        1,
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
