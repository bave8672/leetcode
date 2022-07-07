/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m);
    nums2.splice(n);
    let i = 0;
    for (const n of nums2) {
        while (i < nums1.length && nums1[i] < n) {
            i++;
        }
        nums1.splice(i, 0, n);
    }
}
