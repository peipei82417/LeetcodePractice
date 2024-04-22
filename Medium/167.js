/*
167. Two Sum II - Input Array Is Sorted

create by 2024/04/17

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;
    while (p1 < p2) {
        const sum = numbers[p1] + numbers[p2];
        if (sum > target) {
            p2--;
        } else if (sum < target) {
            p1++;
        } else {
            return [p1 + 1, p2 + 1];
        }
    }
    return [];
};

const numbers = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(numbers, target));
