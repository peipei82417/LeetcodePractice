import { root } from "./DataStructure/tree.js";

/*
235. Lowest Common Ancestor of a Binary Search Tree

created by 2022/04/03

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
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
    let curr = root;
    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        } else {
            return curr;
        }
    }
};

const result = lowestCommonAncestor(root);
console.log(result);