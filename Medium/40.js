/*
40. Combination Sum II

create by 2024/04/23

Time Complexity
    total: O(2^n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const results = [];
    const comb = [];
    var backtracking = function (i, total) {
        if (total === target) {
            results.push(comb.slice());
            return;
        }
        if (i >= candidates.length || total > target) {
            return;
        }
        comb.push(candidates[i]);
        backtracking(i + 1, total + candidates[i]);
        comb.pop();
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i += 1;
        }
        backtracking(i + 1, total);
    };
    backtracking(0, 0);
    return results;
};

const candidates = [
        14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8, 7, 30, 12, 33, 20, 21, 29, 24,
        17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16, 8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12,
    ],
    target = 27;
console.log(combinationSum2(candidates, target));
