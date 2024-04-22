function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/*
98. Validate Binary Search Tree

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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    var dfs = function (node, min, max) {
        if (!node) {
            return true;
        }
        if (node.val >= max || node.val <= min) {
            return false;
        }
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    };
    return dfs(root, -Infinity, Infinity);
};

const node7 = new TreeNode(4, null, null);
const node6 = new TreeNode(5, null, node7);
const node5 = new TreeNode(1, null, null);
const node4 = new TreeNode(4, null, null);
const node3 = new TreeNode(3, null, null);
const node2 = new TreeNode(1, null, null);
const node1 = new TreeNode(2, node2, node3);

console.log(isValidBST(node1));
