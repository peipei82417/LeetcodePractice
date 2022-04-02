/*
96. Unique Binary Search Trees

create by 2022/03/28

Dynamic Programming
Time Complexity
    totle: O(n^2)
Space Complexity
    totle: O(n)
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};

console.log(numTrees(3));
