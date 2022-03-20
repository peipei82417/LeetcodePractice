/*
45. Jump Game II

created by 2022/03/07

Dynamic Programming
Time complexity
    totle : O(10^7)
Space complexity
    totle : O(10^4)

Dynamic Programming, Greedy
Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
//     let n = nums.length;
//     let dp = function (i) {
//         if (i >= n - 1) { return 0; }
//         if (i + nums[i] >= n - 1) { return 1; }
//         let result = n;
//         for (let s = 1; s < nums[i] + 1; s++) {
//             result = Math.min(result, dp(i + s) + 1);
//         }
//         return result;
//     }
//     return dp(0);
// };

var jump = function (nums) {
    let len = nums.length - 1, curr = -1, next = 0, result = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) {
            result++;
            curr = next;
        }
        next = Math.max(next, nums[i] + i);
    }
    return result;
};
let nums = [5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5];
// nums = [2, 3, 0, 1, 4];
console.log(jump(nums))