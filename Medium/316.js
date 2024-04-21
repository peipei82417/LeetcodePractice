/*
316. Remove Duplicate Letters

created by 2022/03/18

Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const freq = Array(26).fill(0);
    const stack = [];

    for (let c of s) {
        const idx = c.charCodeAt() - "a".charCodeAt();
        freq[idx]++;
    }
    for (let c of s) {
        const idx = c.charCodeAt() - "a".charCodeAt();
        freq[idx]--;
        if (stack.includes(c)) {
            continue;
        }
        while (stack.length) {
            const lastChar = stack[stack.length - 1];
            const lastCharIdx = lastChar.charCodeAt() - "a".charCodeAt();

            if (freq[lastCharIdx] && lastChar > c) {
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(c);
    }
    return stack.join("");
};

let s = "bcabc"; // "abc"
s = "cbacdcbc"; // "acdb"
console.log(removeDuplicateLetters(s));
