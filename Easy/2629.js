/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return (x) => {
        let sum = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            const fn = functions[i];
            sum = fn(sum);
        }
        return sum;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

let functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
let x = 1;
const fn = compose(functions);
console.log(fn(1)); // 1000
