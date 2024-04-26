/*
78. Subsets

create by 2024/04/23

Time Complexity
    total: O(n * 2^n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const results = [];
    const subset = [];
    var backtracking = function (idx) {
        if (idx >= nums.length) {
            return results.push(subset.slice());
        }
        subset.push(nums[idx]);
        backtracking(idx + 1);
        subset.pop();
        backtracking(idx + 1);
    };
    backtracking(0);
    return results;
};

const nums = [1, 2];
console.log(subsets(nums));
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
