
/*
81. Search in Rotated Sorted Array II

create by 2022/03/28

Time Complexity
    totle: O(n)
Space Complexity
    totle: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] > nums[l]) {
            if (nums[l] <= target && nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else if (nums[mid] < nums[l]) {
            if (nums[r] >= target && nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            l++;
        }
    }
    return false;
};


// let nums = [2, 5, 6, 0, 0, 1, 2], target = 0;
let nums = [2, 2, 5, 6, 0, 0, 1, 2], target = 1;
console.log(search(nums, target));

