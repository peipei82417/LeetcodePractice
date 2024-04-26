/*
90. Subsets II

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
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    var backtracking = function (i, subset) {
        if (i === nums.length) {
            return results.push(subset.slice());
        }
        subset.push(nums[i]);
        backtracking(i + 1, subset);
        subset.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i += 1;
        }
        backtracking(i + 1, subset);
    };
    backtracking(0, []);
    return results;
};

const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
