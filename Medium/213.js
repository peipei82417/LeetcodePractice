/*
213. House Robber II

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const nums1 = nums.slice(0, nums.length - 1);
    const nums2 = nums.slice(1, nums.length);
    const db1 = new Array(nums.length - 1);
    const db2 = new Array(nums.length - 1);
    for (let i = 0; i < nums.length - 1; i++) {
        if (i === 0) {
            db1[i] = nums1[0];
            db2[i] = nums2[0];
        } else if (i === 1) {
            db1[i] = Math.max(nums1[0], nums1[1]);
            db2[i] = Math.max(nums2[0], nums2[1]);
        } else {
            db1[i] = Math.max(db1[i - 2] + nums1[i], db1[i - 1]);
            db2[i] = Math.max(db2[i - 2] + nums2[i], db2[i - 1]);
        }
    }
    return Math.max(db1.pop(), db2.pop());
};

console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
