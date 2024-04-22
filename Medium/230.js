/*
230. Kth Smallest Element in a BST

create by 2024/04/22

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const nums = new Array(0);
    var inorder = function (node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        nums.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return nums[k - 1];
};
