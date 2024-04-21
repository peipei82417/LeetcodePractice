/*
946. Validate Stack Sequences

created by 2022/03/16

Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const len = pushed.length;
    const stack = [];
    let i = 0;
    for (const num of pushed) {
        stack.push(num);
        while (i < len && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++;
        }
    }
    return i === len;
};

let pushed = [1, 2, 3, 4, 5],
    popped = [4, 5, 3, 2, 1];
// popped = [2, 4, 3, 5, 1];

console.log(validateStackSequences(pushed, popped));
