import { TreeNode, root } from "../DataStructure/tree.js";
/*
113. Path Sum II

create by 2022/04/01

Depth-First Search
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = [];
    const dfs = function (root, targetSum, temp = []) {
        if (!root) {
            return;
        }
        targetSum -= root.val;
        temp = temp.concat(root.val);
        if (!root.left && !root.right && !targetSum) {
            result.push(temp);
            return;
        }
        dfs(root.left, targetSum, temp);
        dfs(root.right, targetSum, temp);
    };
    dfs(root, targetSum);
    return result;
};

let targetSum = 22;
console.log(pathSum(root, targetSum));
