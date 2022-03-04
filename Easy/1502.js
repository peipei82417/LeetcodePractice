/*
1502. Can Make Arithmetic Progression From Sequence

created by 2022/03/04

Time complexity
    totle : O(nlogn)
Space complexity
    totle : O(1)
    
Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => {
        return a - b;
    })
    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== arr[i - 1] - arr[i - 2]) {
            return false;
        }
    }
    return true;
};

var canMakeArithmeticProgression = function (arr) {
    let set = new Set();
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    if (set.size == 1) { return true; }

    let diff = (max - min) / (arr.length - 1);
    let cur = max;
    let count = 1;
    while (cur != min) {
        if (!set.has(cur - diff)) {
            return false;
        }
        cur = cur - diff;
        count++;
    }
    return count === arr.length;
};

let arr = [3, 5, 1, 7, 9];
//let arr = [1, 2, 4];

console.log(canMakeArithmeticProgression(arr));