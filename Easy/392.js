/*
392. Is Subsequence

created by 2022/06/19

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0,
        j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) {
            i += 1;
        }
        j += 1;
    }
    console.log(i, j);
    return i >= s.length ? true : false;
};

const s = "axc",
    t = "ahbgdc";
const result = isSubsequence(s, t);
console.log(result);
