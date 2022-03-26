/*
283. Move Zeroes

created by 2022/03/21

Greedy
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
    const N = nums.length;
    let l = 0, r = 1;
    while (r < N) {
        if (nums[l] === 0) {
            while (nums[r] === 0) {
                r++;
            }
            if (r >= N) break;
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        l++; r++;
    }
};

let nums = [0, 1, 0, 3, 12];
nums = [0, 0]
moveZeroes(nums)
console.log(nums);