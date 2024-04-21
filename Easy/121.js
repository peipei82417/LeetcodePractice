/*
121. Best Time to Buy and Sell Stock

created by 2022/06/22

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};

const prices = [7, 6, 4, 3, 1];
const result = maxProfit(prices);
console.log(result);
