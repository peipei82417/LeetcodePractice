/*
704. Binary Search

created by 2022/03/16

Time complexity
    totle : O(logn)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
};
let nums = [-1, 0, 3, 5, 9, 12],
    target = 9;
console.log(search(nums, target));
