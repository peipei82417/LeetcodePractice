/*
746. Min Cost Climbing Stairs

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const db = new Array(cost.length);
    for (let i = 0; i < cost.length; i++) {
        if (i === 0 || i === 1) {
            db[i] = cost[i];
        } else {
            const n1 = db[i - 1] + cost[i];
            const n2 = db[i - 2] + cost[i];
            db[i] = Math.min(n1, n2);
        }
    }
    return Math.min(db[db.length - 1], db[db.length - 2]);
};

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
