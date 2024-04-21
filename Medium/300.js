/*
300. Longest Increasing Subsequence

created by 2022/03/09

Dynamic Programming
Time complexity
    total : O(n^2)
Space complexity
    total : O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    let dp = new Arraly(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

// var lengthOfLIS = function (nums) {

//     let dp = []
//     for (let i = 0; i < nums.length; i++) {

//     }
//     return Math.max(...dp);
// };

let nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
console.log(lengthOfLIS(nums));
