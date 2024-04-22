/*
105. Construct Binary Tree from Preorder and Inorder Traversal

create by 2024/04/22

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    const inorderMid = inorder.findIndex((value) => value === preorder[0]);
    return new TreeNode(
        preorder[0],
        buildTree(preorder.slice(1, inorderMid + 1), inorder.slice(0, inorderMid)),
        buildTree(preorder.slice(inorderMid + 1, preorder.length), inorder.slice(inorderMid + 1, inorder.length))
    );
};

const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
