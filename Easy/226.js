/*
226. Invert Binary Tree

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    if (!root.left && !root.right) {
        return root;
    }
    if (root.left || root.right) {
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
