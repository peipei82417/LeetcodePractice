/*
70. Climbing Stairs

created by 2022/06/27

Dynamic Programming
Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }
    const dp = [1, 2];
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};

const n = climbStairs(100);
console.log(n);
