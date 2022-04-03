/*
1822. Sign of the Product of an Array

created by 2022/03/04

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let i = 0,
        count = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            return 0;
        } else if (nums[i] < 0) {
            count++;
        }
        i++;
    }
    return count % 2 === 0 ? 1 : -1;
};

let nums = [-1, -2, -3, -4, 3, 2, 1];
//let nums = [1, 5, 0, 2, -3];
//let nums = [-1, 1, -1, 1, -1];

console.log(arraySign(nums));
