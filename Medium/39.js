/*
39. Combination Sum

create by 2024/04/23

Time Complexity
    total: O(2^target * k)
Space Complexity
    total: O(k * x)
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const results = [];
    const comb = [];
    var backtracking = function (i, total) {
        if (i >= candidates.length || total > target) {
            return;
        }
        if (total === target) {
            return results.push(comb.slice());
        }
        comb.push(candidates[i]);
        backtracking(i, total + candidates[i]);
        comb.pop();
        backtracking(i + 1, total);
    };
    backtracking(0, 0);
    return results;
};
