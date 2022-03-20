/*
283. Move Zeroes

created by 2022/03/06

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0,
        j = 1;
    while (j < nums.length) {
        if (nums[i] === 0) {
            while (nums[j] === 0) {
                j++;
            }
            if (nums[j] === undefined) {
                break;
            }
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        i++;
        j++;
    }
};

let nums = [0, 1, 0, 3, 12];
//nums = [0, 0, 1];
//nums = [1, 0, 1];
//nums = [0, 1, 0];
moveZeroes(nums);
console.log(nums);
