/*
198. House Robber

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const db = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            db[i] = nums[0];
        } else if (i === 1) {
            db[i] = Math.max(nums[0], nums[1]);
        } else {
            db[i] = Math.max(db[i - 2] + nums[i], db[i - 1]);
        }
    }
    return db.pop();
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
