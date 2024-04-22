/*
1448. Count Good Nodes in Binary Tree

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
 * @return {number}
 */
var goodNodes = function (root) {
    var dfs = function (node, val) {
        if (!node) {
            return 0;
        }
        let res = node.val >= val ? 1 : 0;
        const max = Math.max(val, node.val);
        res += dfs(node.left, max);
        res += dfs(node.right, max);
        return res;
    };
    return dfs(root, root.val);
};

const node7 = new TreeNode(4, null, null);
const node6 = new TreeNode(5, null, node7);
const node5 = new TreeNode(1, null, null);
const node4 = new TreeNode(3, null, null);
const node3 = new TreeNode(4, node5, node6);
const node2 = new TreeNode(1, node4, null);
const node1 = new TreeNode(3, node2, node3);

console.log(goodNodes(node1));
