import { TreeNode, root } from './DataStructure/tree.js'

/*
450. Delete Node in a BST

created by 2022/03/23

Greedy
Time complexity
    totle : O(h) high of tree
Space complexity
    totle : O(n)
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) {
        return root;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }
        let min = root.right;
        while (min.left) {
            min = min.left;
        }
        root.val = min.val;
        root.right = deleteNode(root.right, min.val);
    }
    return root;
};

let key = 5;
console.log(deleteNode(root, key));