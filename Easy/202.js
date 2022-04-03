/*
202. Happy Number

created by 2022/03/04

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    while (n > 4) {
        let d = n,
            s = 0;
        while (d > 0) {
            s += Math.pow(d % 10, 2);
            d = Math.floor(d / 10);
        }
        n = s;
    }
    return n === 1;
};

let n = 19;
//n = 2;
console.log(isHappy(n));
