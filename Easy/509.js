/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    const result = new Array(n + 1).fill(0);
    result[0] = 0;
    result[1] = 1;
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
};

const n = 4;
console.log(fib(n));
