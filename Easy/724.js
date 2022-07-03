// 724. Find Pivot Index

// created by 2022/06/18
/*
Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    let lSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (lSum === sum - lSum - nums[i]) {
            return i;
        }
        lSum += nums[i];
    }
    return -1;
};

const nums = [2, 1, -1];
const n = pivotIndex(nums);
console.log(n);
