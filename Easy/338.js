/*
338. Counting Bits

created by 2022/03/01

Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let result = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};

n = 5;
console.log(countBits(n));
