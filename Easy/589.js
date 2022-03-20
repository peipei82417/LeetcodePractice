/*
589. N-ary Tree Preorder Traversal

created by 2022/03/05

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) return [];
    let stack = [root];
    let result = [];
    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        while (node.children.length) {
            stack.push(node.children.pop());
        }
    }
    return result;
};