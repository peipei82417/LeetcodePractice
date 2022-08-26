/*
28. Implement strStr()

created by 2022/08/08

Time complexity
    totle : O(n^2)
Space complexity
    totle : O(1)
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            let k = i;
            while (haystack[k] === needle[j]) {
                if (j >= needle.length) {
                    return i;
                }
                k++;
                j++;
            }
        }
    }
    return -1;
};

const haystack = "a",
    needle = "b";
console.log(strStr(haystack, needle));
