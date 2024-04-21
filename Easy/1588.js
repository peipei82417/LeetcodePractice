/*
1588. Sum of All Odd Length Subarrays

created by 2022/03/06

Time complexity
    total : O(n^2)
Space complexity
    total : O(1)
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    const len = arr.length;
    let sum = 0,
        odd = len % 2;
    if (odd === 0) {
        odd += 1;
    }
    while (odd <= len) {
        let temp = new Array(len - odd + 1);
        let i = 0;
        while (i < len - odd + 1) {
            temp[i] = arr.slice(i, i + odd);
            i++;
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                sum += temp[i][j];
            }
        }
        odd += 2;
    }
    return sum;
};

// let arr = [1, 4, 2, 5, 3];
let arr = [1, 2];
// let arr = [10, 11, 12];
console.log(sumOddLengthSubarrays(arr));
