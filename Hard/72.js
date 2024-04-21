/*
72. Edit Distance

created by 2022/07/05

Dynamic Programming
Time complexity
    total : O(mn)
Space complexity
    total : O(mn)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;

    if (len1 === 0 && len2 === 0) {
        return 0;
    } else if (len1 === 0) {
        return len2;
    } else if (len2 === 0) {
        return len1;
    }

    const dp = new Array(len1 + 1);
    for (let i = 0; i < len1 + 1; i++) {
        const arr = new Array(len2 + 1).fill(0);
        dp[i] = arr;
    }

    for (let i = 1; i <= len1; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i <= len2; i++) {
        dp[0][i] = i;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const left = dp[i - 1][j] + 1;
            const up = dp[i][j - 1] + 1;
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = Math.min(left, up, dp[i - 1][j - 1]);
            } else {
                dp[i][j] = Math.min(left, up, dp[i - 1][j - 1] + 1);
            }
        }
    }
    return dp[len1][len2];
};

const word1 = "a",
    word2 = "b";
console.log(minDistance(word1, word2));
