/*
799. Champagne Tower

created by 2022/03/04

Algorithm : DP
Time complexity
    totle : O(n^2)
Space complexity
    totle : O(n)
*/

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
    let currRow = new Array(100).fill(0);
    currRow[0] = poured;

    for (let i = 0; i < query_row; i++) {
        const nextRow = new Array(100).fill(0);
        for (let j = 0; j < 100; j++) {
            if (currRow[j] > 1) {
                const rem = currRow[j] - 1;
                currRow[j] = 1;
                const half = rem / 2;
                nextRow[j] += half;
                nextRow[j + 1] += half;
            }
        }
        currRow = nextRow;
    }
    return Math.min(1, currRow[query_glass]);
};

let poured = 1,
    query_row = 1,
    query_glass = 1;
(poured = 2), (query_row = 1), (query_glass = 1);
(poured = 100000009), (query_row = 33), (query_glass = 17);

console.log(champagneTower(poured, query_row, query_glass));
