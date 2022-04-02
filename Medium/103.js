import { root } from "../DataStructure/tree.js";

/*
103. Binary Tree Zigzag Level Order Traversal

created by 2022/03/17

Breadth-First Search(BFS)
Time complexity
    totle : O(n)
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    const queue = [root];
    let level = true;

    while (queue.length) {
        const N = queue.length;
        const arr = [];

        for (let i = 0; i < N; i++) {
            const node = queue.shift();

            level ? arr.push(node.val) : arr.unshift(node.val);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(arr);
        level = !level;
    }
    return result;
};

const ans = zigzagLevelOrder(root);
console.log(ans);
