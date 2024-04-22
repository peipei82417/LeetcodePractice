/*
110. Balanced Binary Tree

created by 2022/08/08

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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let res = true;
    function maxDepth(node) {
        if (!node) {
            return 0;
        }
        const left = maxDepth(node.left);
        const right = maxDepth(node.right);
        if (Math.abs(left - right) > 1) {
            res = false;
        }
        return Math.max(left, right) + 1;
    }
    maxDepth(root);
    return res;
};

console.log(isBalanced(root));
