/*
413. Arithmetic Slices

created by 2022/03/03

Algorithm : DP
Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let sum = 0,
        dp = 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp += 1;
            sum += dp;
        } else {
            dp = 0;
        }
    }
    return sum;
};

let nums = [1, 2, 3, 4, 5];
//let nums = [1, 2, 3, 8, 9, 10];

console.log(numberOfArithmeticSlices(nums));
