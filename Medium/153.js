/*
153. Find Minimum in Rotated Sorted Array

create by 2024/04/17

Time Complexity
    total: O(log(n))
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    const l = 0,
        r = nums.length - 1,
        mid = Math.floor((l + r) / 2);
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 2) {
        return Math.min(nums[0], nums[1]);
    } else if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
        return nums[mid];
    } else if (mid + 1 < nums.length && nums[mid + 1] < nums[mid]) {
        return nums[mid + 1];
    }
    return Math.min(findMin(nums.slice(l, mid)), findMin(nums.slice(mid + 1, r + 1)));
};

const nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));
