import { TreeNode } from "../DataStructure/tree.js";
/*
108. Convert Sorted Array to Binary Search Tree

created by 2022/03/20

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return dfs(nums, 0, nums.length - 1);
};

const dfs = (nums, l, r) => {
    if (l > r) return null;
    const m = Math.floor((l + r) / 2);
    const root = new TreeNode(nums[m]);

    root.left = dfs(nums, l, m - 1);
    root.right = dfs(nums, m + 1, r);
    return root;
};
let nums = [-10, -3, 0, 5, 9, 8];
console.log(sortedArrayToBST(nums));
