/*
605. Can Place Flowers

create by 2023/10/19

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed = [0, ...flowerbed, 0];
    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1] === 0) {
            n -= 1;
            i += 1;
        }
    }
    return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// true

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
// false
