/*
238. Product of Array Except Self

create by 2023/10/17

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = new Array(nums.length);
    res[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i - 1] * res[i - 1];
    }
    let r = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] * r;
        r = r * nums[i];
    }
    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// Output: [24,12,8,6]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// Output: [0,0,9,0,0]
