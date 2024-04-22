/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};

let arr = [1, 2, 3];
let fn = function plusI(n, i) {
    return n + i;
};

console.log(map(arr, fn)); // Output: [2,3,4]
console.log(arr); // Output: [2,3,4]
