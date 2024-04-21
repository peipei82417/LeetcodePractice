/*
1672. Richest Customer Wealth

created by 2022/03/06

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        max = Math.max(max, sum);
    }
    return max;
};

// let accounts = [
//     [1, 2, 3],
//     [3, 2, 1],
// ];
let accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
];
// let accounts = [
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
// ];

console.log(maximumWealth(accounts));
