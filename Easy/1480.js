/*
1480. Running Sum of 1d Array

created by 2022/06/18

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

const nums = [1, 2, 3, 4];
runningSum(nums);
console.log(nums);
