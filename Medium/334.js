/*
334. Increasing Triplet Subsequence

create by 2023/10/17

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length <= 2) {
        return false;
    }
    let min1 = Infinity,
        min2 = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min2) {
            return true;
        } else if (nums[i] < min1) {
            min1 = nums[i];
        } else if (nums[i] > min1 && nums[i] < min2) {
            min2 = nums[i];
        }
    }
    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
// Output: true

console.log(increasingTriplet([5, 4, 3, 2, 1]));
// Output: false

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
// Output: true
