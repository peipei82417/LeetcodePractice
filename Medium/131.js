/*
131. Palindrome Partitioning

create by 2024/04/23

Time Complexity
    total: O(2^n)
Space Complexity
    total: O(n)
*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const results = [];
    const part = [];
    var isPalindrome = function (s, l, r) {
        while (l < r) {
            if (s[l++] !== s[r--]) {
                return false;
            }
        }
        return true;
    };

    var backtracking = function (i) {
        if (i >= s.length) {
            results.push(part.slice());
            return;
        }
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                part.push(s.slice(i, j + 1));
                backtracking(j + 1);
                part.pop();
            }
        }
    };
    backtracking(0);
    return results;
};

console.log(partition('aab'));
