/*
739. Daily Temperatures

create by 2024/04/14

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > stack[stack.length - 1].temp) {
            const { idx } = stack.pop();
            result[idx] = i - idx;
        }
        stack.push({ temp: temperatures[i], idx: i });
    }
    return result;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
