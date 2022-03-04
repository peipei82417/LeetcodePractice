/*
583. Delete Operation for Two Strings

created by 2022/03/03

Algorithm : DP
Time complexity
    totle : O(m*n)
Space complexity
    totle : O(m*n)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = new Array(word2.length + 1);
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = new Array(word2.length + 1).fill(0);
    }
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = i + j;
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[word1.length][word2.length];
};

//let word1 = "sea", word2 = "eat";
//let word1 = "a", word2 = "a";
let word1 = "leetcode", word2 = "etco";

console.log(minDistance(word1, word2));