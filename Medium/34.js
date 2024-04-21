/*
34. Find First and Last Position of Element in Sorted Array

created by 2022/07/25

Time complexity
    total : O(logn)
Space complexity
    total : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const l = firstPosition(nums, target);
    const r = finalPosition(nums, target);
    return [l, r];
};

const firstPosition = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return nums[l] === target ? l : -1;
};

const finalPosition = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    while (l < r) {
        const mid = Math.ceil((l + r) / 2);
        if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid;
        }
    }
    return nums[r] === target ? r : -1;
};

const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
const result = searchRange(nums, target);
console.log(result);
