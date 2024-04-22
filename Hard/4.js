/*
4. Median of Two Sorted Arrays

create by 2024/04/18

Time Complexity
    total: O(log(min(m,n)))
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let A = nums1,
        B = nums2;
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    if (B.length < A.length) {
        const T = A;
        A = B;
        B = T;
    }

    let l = 0,
        r = A.length - 1;

    while (true) {
        const i = Math.floor((l + r) / 2);
        const j = half - i - 2;

        let Aleft = i >= 0 ? A[i] : -Infinity,
            Aright = i + 1 < A.length ? A[i + 1] : Infinity,
            Bleft = j >= 0 ? B[j] : -Infinity,
            Bright = j + 1 < B.length ? B[j + 1] : Infinity;

        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2) {
                return Math.min(Aright, Bright);
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        } else if (Aleft > Bright) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};

const nums1 = [1, 2, 3],
    nums2 = [3, 4, 5, 6, 7];
console.log(findMedianSortedArrays(nums1, nums2));
