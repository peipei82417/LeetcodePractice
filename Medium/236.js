import { root } from "../DataStructure/tree.js";
/*
236. Lowest Common Ancestor of a Binary Tree

create by 2022/07/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    } else {
        return left || right;
    }
};

const result = lowestCommonAncestor(root, 5, 1);
console.log(result);
