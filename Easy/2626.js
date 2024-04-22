/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let sum = init;
    for (let i = 0; i < nums.length; i++) {
        sum = fn(sum, nums[i]);
    }
    return sum;
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
    return accum + curr;
};
let init = 0;
console.log(reduce(nums, fn, init)); // 10
