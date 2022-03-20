/*
1572. Matrix Diagonal Sum

created by 2022/03/07

Algorithm : backtracking
Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    if (mat.length === 1) {
        return mat[0][0];
    }
    let sum = 0;
    let i = 0, j = mat.length - 1;
    while (i < mat.length) {
        sum += (mat[i][i] + mat[j--][i]);
        i++;
    }
    return i % 2 === 0 ? sum : sum - mat[Math.floor(i / 2)][Math.floor(i / 2)];
};

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
mat = [
    [7, 9, 8, 6, 3],
    [3, 9, 4, 5, 2],
    [8, 1, 10, 4, 10],
    [9, 5, 10, 9, 6],
    [7, 2, 4, 10, 8]
]

console.log(diagonalSum(mat))
