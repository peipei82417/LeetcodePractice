import { root, TreeNode } from "./DataStructure/tree.js";

/*
99. Recover Binary Search Tree
create by 2022/04/19

Recursion
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let first = null;
    let second = null;
    let prev = null;
    inorder(root);

    let temp = first.val;
    first.val = second.val;
    second.val = temp;

    function inorder(root) {
        if (!root) {
            return;
        }
        inorder(root.left);
        if (prev && prev.val > root.val) {
            if (!first) {
                first = prev;
            }
            second = root;
        }
        prev = root;
        inorder(root.right);
    }
};

recoverTree(root);
console.log(root);
