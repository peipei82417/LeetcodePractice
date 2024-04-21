/*
22. Generate Parentheses

created by 2022/07/29

Backtracking
Time complexity
    total : O( 4^n/sqrt(n) )
Space complexity
    total : O( 4^n/sqrt(n) )
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const backtrack = (s, l, r) => {
        if (l === 0 && r === 0) {
            result.push(s);
            return;
        }
        if (l > 0) {
            backtrack(s + "(", l - 1, r);
        }
        if (r > l) {
            backtrack(s + ")", l, r - 1);
        }
    };
    backtrack("", n, n);
    return result;
};

const n = 4;
console.log(generateParenthesis(n).length);
