/*
572. Subtree of Another Tree

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    function equal(root, subRoot) {
        if (!root && !subRoot) {
            return true;
        }
        if (!root || !subRoot || root.val !== subRoot.val) {
            return false;
        }
        return (
            equal(root.left, subRoot.left) && equal(root.right, subRoot.right)
        );
    }
    function dfs(node) {
        if (!node) {
            return false;
        }
        if (equal(node, subRoot)) {
            return true;
        }
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};
