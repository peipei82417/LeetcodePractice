/*
700. Search in a Binary Search Tree

created by 2022/04/14

Time complexity
    totle : O(n logn)
Space complexity
    totle : O(1)
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    while (root) {
        if (root.val === val) {
            return root;
        } else if (root.val > val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return null;
};
