import { root } from "../DataStructure/tree.js";
/*
404. Sum of Left Leaves

created by 2022/03/10

BFS
Time complexity
    totle : O(n)
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (!root.left) {
        return 0;
    }
    let sum = 0;
    let queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            }
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return sum;
};

console.log(sumOfLeftLeaves(root));
