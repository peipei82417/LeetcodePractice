/*
424. Longest Repeating Character Replacement

create by 2024/04/16

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = new Map();
    let l = 0;
    let result = 0;
    let maxf = 0;
    for (let r = 0; r < s.length; r++) {
        if (!map.has(s[r])) {
            map.set(s[r], 1);
        } else {
            map.set(s[r], map.get(s[r]) + 1);
        }
        maxf = Math.max(maxf, map.get(s[r]));
        while (r - l + 1 - maxf > k) {
            map.set(s[l], map.get(s[l]) - 1);
            l++;
        }
        result = Math.max(result, r - l + 1);
    }
    return result;
};

let s = 'ABABBA',
    k = 1;
console.log(characterReplacement(s, k)); // 4
