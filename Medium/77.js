/*
77. Combinations

create by 2022/04/06

Backtracking + DFS
Time Complexity
    total: O(C(n,k))
Space Complexity
    total: O(k)
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = [];
    const helper = (p, subSet) => {
        if (subSet.length === k) {
            result.push([...subSet]);
        }
        if (p > n) {
            return;
        }
        for (let i = p; i <= n; i++) {
            subSet.push(i);
            helper(i + 1, subSet);
            subSet.pop();
        }
    };
    helper(1, new Array());
    return result;
};

const n = 4,
    k = 2;
// [
//     [2, 4],
//     [3, 4],
//     [2, 3],
//     [1, 2],
//     [1, 3],
//     [1, 4],
// ]
console.log(combine(n, k));
