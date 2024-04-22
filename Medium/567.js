/*
567. Permutation in String

create by 2024/04/16

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    let chars = {};
    for (const char of s1) {
        chars[char] = (chars[char] || 0) + 1;
    }
    let left = 0,
        right = 0,
        requiredLength = s1.length;

    while (right < s2.length) {
        if (chars[s2[right]] > 0) {
            requiredLength--;
        }
        chars[s2[right]]--;
        right++;
        if (requiredLength === 0) {
            return true;
        }
        if (right - left === s1.length) {
            if (chars[s2[left]] >= 0) {
                requiredLength++;
            }
            chars[s2[left]]++;
            left++;
        }
    }
    return false;
};

let s1 = 'ab',
    s2 = 'eidboao';
console.log(checkInclusion(s1, s2)); // true
