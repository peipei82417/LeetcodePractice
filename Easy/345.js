/*
345. Reverse Vowels of a String

create by 2023/10/18

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let chars = s.split('');
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let l = 0,
        r = chars.length - 1;
    while (l < r) {
        if (!set.has(chars[l])) {
            l++;
        }

        if (!set.has(chars[r])) {
            r--;
        }

        if (set.has(chars[l]) && set.has(chars[r])) {
            let temp = chars[l];
            chars[l] = chars[r];
            chars[r] = temp;
            l++;
            r--;
        }
    }
    return chars.join('');
};

console.log(reverseVowels('hello'));
// Output: "holle"

console.log(reverseVowels('leetcode'));
// Output: "leotcede"
