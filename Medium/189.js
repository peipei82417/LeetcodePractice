/*
189. Rotate Array

created by 2022/03/08

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    nums.reverse();
    revNums(nums, 0, k - 1);
    revNums(nums, k, nums.length - 1);
};

const revNums = function (nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};

let nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3;
(nums = [-1]), (k = 2);
rotate(nums, k);
console.log(nums);
