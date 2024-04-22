/*
543. Diameter of Binary Tree

created by 2024/04/21

Time complexity
    total : O(n)
Space complexity
    total : O(n)
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
var diameterOfBinaryTree = function (root) {
    let max = 0;
    function maxDepth(node) {
        if (!node) {
            return -1;
        }
        const depthL = maxDepth(node.left);
        const depthR = maxDepth(node.right);
        max = Math.max(max, depthL + depthR + 2);
        return Math.max(depthL, depthR) + 1;
    }
    maxDepth(root);
    return max;
};

const node5 = new TreeNode(5, null, null);
const node4 = new TreeNode(4, null, null);
const node3 = new TreeNode(3, null, null);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);
console.log(diameterOfBinaryTree(node1));
