/*
881. Boats to Save People

created by 2022/03/24

Greedy, Two Pointer
Time complexity
    totle : O(nlogn)
Space complexity
    totle : O(n)
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let result = 0;
    people.sort((a, b) => {
        return a - b;
    })
    let l = 0, r = people.length - 1;
    while (l <= r) {
        result++;
        if ((people[l] + people[r]) <= limit) {
            l++;
        }
        r--;
    }
    return result;
};
let people = [3, 1, 7], limit = 7; // 2
// people = [3, 2, 2, 1], limit = 3; // 3
// people = [3, 8, 7, 1, 4], limit = 9; // 3
console.log(numRescueBoats(people, limit));