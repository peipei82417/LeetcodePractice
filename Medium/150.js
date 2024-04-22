/*
150. Evaluate Reverse Polish Notation

create by 2024/04/12

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = new Array(0);
    const map = {
        '+': function (n1, n2) {
            return n1 + n2;
        },
        '-': function (n1, n2) {
            return n1 - n2;
        },
        '*': function (n1, n2) {
            return n1 * n2;
        },
        '/': function (n1, n2) {
            const a = n1 / n2;
            if (a < 0) {
                return Math.ceil(n1 / n2);
            } else {
                return Math.floor(n1 / n2);
            }
        },
    };
    for (const token of tokens) {
        if (isNaN(Number(token))) {
            const n2 = stack.pop();
            const n1 = stack.pop();
            stack.push(map[token](n1, n2));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};
