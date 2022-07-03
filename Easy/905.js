/*
905. Sort Array By Parity

created by 2022/05/02

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let p1 = 0;
    let p2 = nums.length - 1;
    let result = new Array(nums.length);
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] % 2 === 0) {
            result[p1++] = nums[k];
        } else {
            result[p2--] = nums[k];
        }
    }
    return result;
};
