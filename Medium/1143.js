/*
1143. Longest Common Subsequence

created by 2022/03/02

Algorithm : DP
Time complexity
    totle : O(m*n)
Space complexity
    totle : O(m*n)
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const dp = [];
    let m = text1.length;
    let n = text2.length;
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] !== text2[j - 1]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    return dp[m][n];
};

let text1 = "abc",
    text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
