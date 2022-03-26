/*
54. Spiral Matrix

created by 2022/03/22

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const row = matrix.length, col = matrix[0].length;
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let i = 0, j = 0, k = 0, d = 0;
    let result = new Array(row * col).fill(undefined);

    while (k < (row * col)) {
        result[k] = matrix[i][j];
        matrix[i][j] = "*";
        const isTurnNext = checkDir(matrix, row, col, [i + dir[d][0], j + dir[d][1]]);
        if (isTurnNext) {
            d = (d + 1) % 4;
        }
        i += dir[d][0];
        j += dir[d][1];
        k += 1;
    }
    return result;
};

let checkDir = function (matrix, row, col, vec) {
    if (vec[0] > row - 1 || vec[1] > col - 1 || vec[0] < 0 || vec[1] < 0) {
        return true;
    }
    if (matrix[vec[0]][vec[1]] === "*") {
        return true;
    }
    return false;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// [1, 2, 3, 6, 9, 8, 7, 4, 5]
let matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
let matrix3 = [[1]];
console.log(spiralOrder(matrix3))