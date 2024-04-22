/*
875. Koko Eating Bananas

create by 2024/04/16

Time Complexity
    total: O(log(n))
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let maxPile = Math.max(...piles);
    let result = maxPile;
    let l = 1,
        r = maxPile;
    while (l <= r) {
        const speed = Math.floor((r + l) / 2);
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / speed);
            if (hours > h) {
                l = speed + 1;
                break;
            }
        }
        if (hours <= h) {
            result = Math.min(result, speed);
            r = speed - 1;
        }
    }
    return result;
};

const piles = [30, 11, 23, 4, 20],
    h = 6;
const interval = [1, 11];
console.log(minEatingSpeed(piles, h)); // 4
