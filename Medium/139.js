/*
139. Word Break

create by 2022/03/31

Time Complexity
    totle: O(n * m * n)
Space Complexity
    totle: O(n)
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);

    dp[0] = true;

    for (let i = 0; i <= s.length; i++) {
        if (dp[i]) {
            for (const word of wordDict) {
                if (s.slice(i, i + word.length) === word) {
                    dp[i + word.length] = true;
                }
            }
        }
    }
    return dp[s.length];
};

const s = "leetcode",
    wordDict = ["leet", "code"]; // true
// const s = "applepenapple", wordDict = ["apple", "pen"]; // true
// const s = "aaaaaaa", wordDict = ["aaaa", "aaa"]; // true
// const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]; // false

console.log(wordBreak(s, wordDict));
