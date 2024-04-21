/*
374. Guess Number Higher or Lower
create by 2022/04/22

Time Complexity
    total: O(log3 n)
Space Complexity
    total: O(1)
*/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let mid1 = Math.floor(l + (r - l) / 3);
        let mid2 = Math.floor(r - (r - l) / 3);
        let res1 = guess(mid1);
        let res2 = guess(mid2);
        if (res1 == 0) {
            return mid1;
        }
        if (res2 == 0) {
            return mid2;
        } else if (res1 < 0) {
            r = mid1 - 1;
        } else if (res2 > 0) {
            l = mid2 + 1;
        } else {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }
    return -1;
};
