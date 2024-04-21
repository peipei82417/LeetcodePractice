/*
74. Search a 2D Matrix

create by 2022/03/30

Binary Search
Time Complexity
    total: O(nlogn)
Space Complexity
    total: O(1)
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const N = matrix.length;
    let row = 0;
    for (let i = 0; i < N; i++) {
        let firstVal = matrix[i][0];
        row = i;
        if (firstVal > target) {
            row = Math.max(0, i - 1);
            break;
        }
    }

    const arr = matrix[row];
    let l = 0,
        r = arr.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return false;
};

// var searchMatrix = function (matrix, target) {
//     let l = 0, r = matrix.length
//     while (l < r) {
//         const mid = Math.floor((l + r) / 2);
//         if (matrix[mid][0] === target) {
//             return true;
//         } else if (matrix[mid][0] < target) {
//             l = mid + 1;
//         } else {
//             r = mid;
//         }
//     }
//     let temp = (r > 0) ? (r - 1) : r;
//     l = 0, r = matrix[0].length;
//     while (l < r) {
//         const mid = Math.floor((l + r) / 2);
//         if (matrix[temp][mid] === target) {
//             return true;
//         } else if (matrix[temp][mid] < target) {
//             l = mid + 1;
//         } else {
//             r = mid;
//         }
//     }
//     return false;
// };

let matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50],
    ],
    target = 50;

console.log(searchMatrix(matrix, target));
