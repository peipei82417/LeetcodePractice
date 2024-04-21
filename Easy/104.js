import { root } from "../DataStructure/tree.js";
/*
104. Maximum Depth of Binary Tree

created by 2022/03/10

Time complexity
    total : O(n)
Space complexity
    total : O(1)
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
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let maxLeft = maxDepth(root.left);
    let maxRight = maxDepth(root.right);
    return Math.max(maxLeft, maxRight) + 1;
};

console.log(maxDepth(root));
