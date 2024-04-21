/*
976. Largest Perimeter Triangle

created by 2022/03/03

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i = nums.length - 3; i >= 0; i--) {
        if (nums[i] + nums[i + 1] > nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }
    return 0;
};
// let nums = [2, 1, 2];
// let nums = [1, 2, 1];
// let nums = [3, 2, 3, 4];
let nums = [3, 6, 2, 3];
console.log(largestPerimeter(nums));
