/*
73. Set Matrix Zeroes

created by 2022/03/04

Algorithm : backtracking
Time complexity
    totle : O(m * n)
Space complexity
    totle : O(m + n)

Time complexity
    totle : O(m * n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function (matrix) {
//     let row = matrix.length, col = matrix[0].length;
//     let pos = [], dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

//     let backtracking = function (matrix, vec, pos) {
//         let [i, j] = pos
//         if (i >= row || j >= col || i < 0 || j < 0) {
//             return;
//         }
//         matrix[i][j] = 0;
//         backtracking(matrix, vec, [i + vec[0], j + vec[1]]);
//     }

//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (matrix[i][j] === 0) {
//                 pos.push([i, j])
//             }
//         }
//     }

//     for (let i = 0; i < pos.length; i++) {
//         for (let vec of dir) {
//             backtracking(matrix, vec, pos[i])
//         }
//     }
// };

//==========================================================

var setZeroes = function (matrix) {
    let isCol = false;
    const R = matrix.length;
    const C = matrix[0].length;

    for (let i = 0; i < R; i++) {

        // Since first cell for both first row and first column is the same i.e. matrix[0][0]
        // We can use an additional variable for either the first row/column.
        // For this solution we are using an additional variable for the first column
        // and using matrix[0][0] for the first row.
        if (matrix[i][0] == 0) {
            isCol = true;
        }

        for (let j = 1; j < C; j++) {
            // If an element is zero, we set the first element of the corresponding row and column to 0
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // Iterate over the array once again and using the first row and first column, update the elements.
    for (let i = 1; i < R; i++) {
        for (let j = 1; j < C; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // See if the first row needs to be set to zero as well
    if (matrix[0][0] == 0) {
        for (let j = 0; j < C; j++) {
            matrix[0][j] = 0;
        }
    }

    // See if the first column needs to be set to zero as well
    if (isCol) {
        for (let i = 0; i < R; i++) {
            matrix[i][0] = 0;
        }
    }
};


let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
setZeroes(matrix)
console.log(matrix);