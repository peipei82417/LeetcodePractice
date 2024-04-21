/*
20. Valid Parentheses

created by 2022/03/13

Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            stack.push(obj[s[i]]);
        } else {
            let pop = stack.pop();
            if (s[i] !== pop) {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};

let s = "((";
console.log(isValid(s));
