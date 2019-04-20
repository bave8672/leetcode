import assert from "assert";
import {
    findMedianSortedArrays,
    medianOfSortedArray,
} from "./median-of-two-sorted-arrays";

describe("median of two sorted arrays", () => {
    it("should ...", () => {
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
                [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            ),
            3,
        );
        assert.equal(findMedianSortedArrays([1, 3, 4], [2]), 2.5);
    });
});
