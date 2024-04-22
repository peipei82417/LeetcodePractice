/*
84. Largest Rectangle in Histogram

create by 2024/04/15

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let result = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        const height = heights[i];
        while (stack.length && stack[stack.length - 1].height > height) {
            const { index, height } = stack.pop();
            result = Math.max(result, height * (i - index));
            start = index;
        }
        stack.push({ index: start, height: height });
    }

    for (const { index, height } of stack) {
        result = Math.max(result, height * (heights.length - index));
    }

    return result;
};

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
