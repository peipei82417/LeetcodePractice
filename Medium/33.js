/*
33. Search in Rotated Sorted Array

create by 2024/04/17

Time Complexity
    total: O(log(n))
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let peak_idx = findPeakIndex(nums);
    if (nums[peak_idx] == target) {
        return peak_idx;
    }
    if (target >= nums[0] && target <= nums[peak_idx]) {
        return binarySearch(nums, 0, peak_idx, target);
    } else {
        return binarySearch(nums, peak_idx + 1, nums.length - 1, target);
    }
};

var findPeakIndex = function (nums) {
    if (nums.length == 1) {
        return 0;
    }
    if (nums[0] < nums[nums.length - 1]) {
        return nums.length - 1;
    }
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[l] <= nums[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return 0;
};

var binarySearch = function (nums, l, r, target) {
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            l = mid + 1;
        } else if (target < nums[mid]) {
            r = mid - 1;
        }
    }
    return -1;
};

const nums = [5, 1, 2, 3, 4],
    target = 4;
console.log(search(nums, target));
