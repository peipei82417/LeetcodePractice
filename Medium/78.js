/*
78. Subsets

created by 2022/03/14

Time complexity
    totle : O(n * 2^n)
Space complexity
    totle : O(n * 2^n)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//     const result = [[]];
//     for (const num of nums) {
//         const subset = [];
//         for (const list of result) {
//             subset.push([...list, num]);
//         }
//         result.push(...subset);
//     }
//     return result;
// };

/*
Backtrack + DFS
Time complexity
    totle : O(n * 2^n)
Space complexity
    totle : O(n)
*/

var subsets = function (nums) {
    const result = [];
    const backtrack = function (n, s, subset) {
        if (subset.length === n) {
            result.push([...subset]);
            return;
        }
        for (let i = s; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(n, i + 1, subset);
            subset.pop();
        }
    };
    for (let i = 0; i < nums.length + 1; i++) {
        backtrack(i, 0, []);
    }
    return result;
};

let nums = [1, 2, 3];
console.log(subsets(nums));
