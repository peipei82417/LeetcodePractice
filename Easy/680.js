/*
680. Valid Palindrome II

created by 2022/04/02

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let l = 0,
        r = s.length - 1;
    const helper = function (s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    };

    while (l < r) {
        if (s[l] !== s[r]) {
            return helper(s, l, r - 1) || helper(s, l + 1, r);
        }
        l++;
        r--;
    }
    return true;
};

// const s = "aba"; // true
// const s = "abccbxa"; // true
const s = "deeee"; // true
console.log(validPalindrome(s));
