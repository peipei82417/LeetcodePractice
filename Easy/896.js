/*
896. Monotonic Array

created by 2022/08/03

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
    }
    return increasing || decreasing;
};

const nums = [6, 5, 4, 4];
console.log(isMonotonic(nums));
