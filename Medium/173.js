import { root, TreeNode } from "./DataStructure/tree.js"
/*
173. Binary Search Tree Iterator
create by 2022/04/21

Time Complexity
    totle: O(1)
Space Complexity
    totle: O(h) h is the height of the tree
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
 */
var BSTIterator = function (root) {
    this.root = root;
    this.stack = [];
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    while (this.root) {
        this.stack.push(this.root);
        this.root = this.root.left;
    }
    const curr = this.stack.pop();
    this.root = curr.right;
    return curr.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return (this.root || this.stack.length) ? true : false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const bst = new BSTIterator(root);
console.log(bst.next()); // 3
console.log(bst.next()); // 7
console.log(bst.hasNext()); // true
console.log(bst.next()); // 9
console.log(bst.hasNext()); // true
console.log(bst.next()); // 15
console.log(bst.hasNext()); // true
console.log(bst.next()); // 20
console.log(bst.hasNext()); // false
