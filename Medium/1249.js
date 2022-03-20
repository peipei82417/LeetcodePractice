/*
1249. Minimum Remove to Make Valid Parentheses

created by 2022/03/15

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    s = s.split("");
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i);
        } else if (s[i] == ")") {
            if (stack.length) {
                stack.pop();
            } else {
                s[i] = "";
            }
        }
    }
    for (let i of stack) {
        s[i] = "";
    }
    return s.join("");
};

const s = "lee(t(c)o)de)";
// s = "ab(c)d(";
// s = "))((";
console.log(minRemoveToMakeValid(s))