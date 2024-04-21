import { root, TreeNode } from "../DataStructure/tree.js";
/*
230. Kth Smallest Element in a BST
create by 2022/04/18

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const arr = [];
    let n = 0;
    const inOrder = (root) => {
        if (!root || k === n) {
            return;
        }
        inOrder(root.left);
        arr.push(root.val);
        n += 1;
        inOrder(root.right);
    };
    inOrder(root);
    return arr[k - 1];
};

const k = 3;
console.log(kthSmallest(root, k));
