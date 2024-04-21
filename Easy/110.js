import { root } from "../DataStructure/tree.js";
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
    const maxdp = (root) => {
        if (!root || !result) {
            return 0;
        }
        let l = maxdp(root.left);
        let r = maxdp(root.right);
        if (Math.abs(l - r) > 1) {
            result = false;
            return 0;
        }
        return Math.max(l, r) + 1;
    };
    let result = true;
    maxdp(root);
    return result;
};

console.log(isBalanced(root));
