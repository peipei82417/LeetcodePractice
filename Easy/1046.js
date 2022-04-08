/*
1046. Last Stone Weight

create by 2022/04/07

Time Complexity
    totle: O(n logn)
Space Complexity
    totle: O(1)
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => {
            return b - a;
        });
        stones.unshift(stones.shift() - stones.shift());
    }
    return stones.length === 1 ? stones[0] : 0;
};

let stones = [2, 7, 4, 1, 9, 1];
console.log(lastStoneWeight(stones));
