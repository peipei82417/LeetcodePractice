/*
235. Lowest Common Ancestor of a Binary Search Tree

create by 2024/04/22

Time Complexity
    total: O(log(n))
Space Complexity
    total: O(1)
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
    const max = Math.max(p.val, q.val);
    const min = Math.min(p.val, q.val);
    if (root.val === max || root.val === min) {
        return root;
    }
    if (root.val < max && root.val > min) {
        return root;
    }
    return lowestCommonAncestor(min > root.val ? root.right : root.left, p, q);
};

let node1 = new TreeNode(6);
let node2 = new TreeNode(2);
let node3 = new TreeNode(8);
let node4 = new TreeNode(0);
let node5 = new TreeNode(4);
let node6 = new TreeNode(7);
let node7 = new TreeNode(9);
let node8 = new TreeNode(3);
let node9 = new TreeNode(5);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

console.log(lowestCommonAncestor(node1, node8, node9));
