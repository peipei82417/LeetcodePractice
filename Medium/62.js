/*
62. Unique Paths

create by 2022/03/28

Dynamic Programming
Time Complexity
    totle: O(m * n)
Space Complexity
    totle: O(m * n)
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array(m + 1).fill(new Array(n + 1).fill(0))
    dp[1][1] = 1
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 && j == 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m][n];
};

let m = 1, n = 5;
console.log(uniquePaths(m, n));
