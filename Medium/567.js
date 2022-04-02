/*
567. Permutation in String

create by 2022/03/30

Sliding Window
Time Complexity
    totle: O(l1 + l2) = O(n)
Space Complexity
    totle: O(26) = O(1)
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const l1 = s1.length;
    const l2 = s2.length;
    const chars = new Array(26).fill(0);
    const a = "a".charCodeAt(0);

    for (let i = 0; i < l1; i++) {
        chars[s1.charCodeAt(i) - a]--;
    }

    for (let i = 0; i < l2; i++) {
        chars[s2.charCodeAt(i) - a]++;

        if (i < l1 - 1) {
            continue;
        }
        if (i > l1 - 1) {
            chars[s2.charCodeAt(i - l1) - a]--;
        }
        if (chars.every((v) => v === 0)) {
            return true;
        }
    }
    return false;
};

//const s1 = "ab", s2 = "eidbaooo"; // true
const s1 = "ab",
    s2 = "eidboaoo"; // false

console.log(checkInclusion(s1, s2));
