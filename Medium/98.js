import { root } from "../DataStructure/tree.js";
/*
98. Validate Binary Search Tree

create by 2022/06/27

Binary Search Tree
Time Complexity
    totle: O(n)
Space Complexity
    totle: O(n)
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
var isValidBST = function (root) {
    const dfs = (node, min, max) => {
        if (!node) { return true; }
        if (node.val <= min || node.val >= max) {
            return false;
        }
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
    return dfs(root, -Infinity, Infinity);
};

const result = isValidBST(root);
console.log(result);