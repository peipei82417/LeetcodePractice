/*
70. Climbing Stairs

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const db = new Array(n);
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            db[i] = 1;
        } else if (i === 1) {
            db[i] = 2;
        } else {
            db[i] = db[i - 1] + db[i - 2];
        }
    }
    return db[n - 1];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
