/*
1046. Last Stone Weight

create by 2024/04/24

Time Complexity
    total: O(n * nlog(n))
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        const stone1 = stones.shift();
        const stone2 = stones.shift();
        if (stone1 === stone2) {
            continue;
        }
        stones.push(Math.abs(stone1 - stone2));
    }
    return stones.length === 1 ? stones[0] : 0;
};
