/*
46. Permutations

create by 2024/04/23

Time Complexity
    total: O(n!)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const results = [];
    var swap = function (arr, n1, n2) {
        let temp = arr[n2];
        arr[n2] = arr[n1];
        arr[n1] = temp;
    };
    var backtracking = function (arr, i) {
        if (i >= arr.length) {
            return results.push(arr.slice());
        }
        for (let j = i; j < arr.length; j++) {
            swap(arr, i, j);
            backtracking(arr, i + 1);
            swap(arr, i, j);
        }
    };
    backtracking(nums, 0);
    return results;
};

const nums = [1, 2];
console.log(permute(nums));
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
