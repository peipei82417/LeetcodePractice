/*
59. Spiral Matrix II

created by 2022/03/08

Time complexity
    total : O(n*n)
Space complexity
    total : O(1)
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 1) {
        return [[1]];
    }
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n).fill(0);
    }
    const dir = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const limit = n * n;
    let currDir = 0,
        currNum = 2;
    let i = 0,
        j = 0;
    result[0][0] = 1;

    while (currNum <= limit) {
        const [x, y] = dir[currDir];
        if (result[i + y][j + x] === 0) {
            (i += y), (j += x);
            result[i][j] = currNum;
        } else {
            currDir = (currDir + 1) % 4;
            continue;
        }
        if (0 > i + y || i + y >= n || 0 > j + x || j + x >= n) {
            currDir = (currDir + 1) % 4;
        }
        currNum++;
    }
    return result;
};

let n = 5;
console.log(generateMatrix(n));
