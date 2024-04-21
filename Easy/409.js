/*
409. Longest Palindrome

created by 2022/06/22

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const count = map.get(s[i]);
        if (count) {
            map.set(s[i], count + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let result = 0;
    let odd = 0;
    map.forEach((val) => {
        if (val % 2 === 0) {
            result += val;
        } else {
            odd = 1;
            result += val - 1;
        }
    });
    return result + odd;
};

const s = "abccccdd";
const result = longestPalindrome(s);
console.log(result);
