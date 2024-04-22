/*
853. Car Fleet

create by 2024/04/15

Time Complexity
    total: O(n logn)
Space Complexity
    total: O(n)
*/
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const stack = [];
    const cars = position
        .map((pos, i) => {
            return {
                position: pos,
                speed: speed[i],
            };
        })
        .sort((a, b) => b.position - a.position);
    for (const car of cars) {
        stack.push((target - car.position) / car.speed);
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }
    return stack.length;
};

const target = 12,
    position = [10, 8, 0, 5, 3],
    speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
