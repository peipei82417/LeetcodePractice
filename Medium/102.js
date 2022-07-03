import { root } from "../DataStructure/tree.js";
/*
102. Binary Tree Level Order Traversal

create by 2022/06/24

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
 * @return {number[][]}
 */
var levelOrder = function (root, res = [], level = 0) {
    if (!root) {
        return res;
    }

    if (level === res.length) {
        res.push([]);
    }

    res[level].push(root.val);

    levelOrder(root.left, res, level + 1);
    levelOrder(root.right, res, level + 1);

    return res;
};

const result = levelOrder(root);
console.log(result);