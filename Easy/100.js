/*
100. Same Tree

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    const sameL = isSameTree(p.left, q.left);
    const sameR = isSameTree(p.right, q.right);
    if (!sameL || !sameR) {
        return false;
    }
    return true;
};
