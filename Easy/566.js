/*
566. Reshape the Matrix

created by 2022/03/07

Time complexity
    totle : O(m*n)
Space complexity
    totle : O(n)
*/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (r * c !== mat.length * mat[0].length) {
        return mat;
    }
    let result = [],
        temp = [];
    let row = 0,
        col = 0;
    while (row < mat.length) {
        while (col < mat[0].length) {
            temp.push(mat[row][col]);
            if (temp.length === c) {
                result.push([...temp]);
                temp.length = 0;
            }
            col++;
        }
        col = 0;
        row++;
    }
    return result;
};

let mat = [
        [1, 2],
        [3, 4],
    ],
    r = 1,
    c = 4;
console.log(matrixReshape(mat, r, c));
