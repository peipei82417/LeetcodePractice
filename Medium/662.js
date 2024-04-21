import { root } from ".../DataStructure/tree.js";

/*
662. Maximum Width of Binary Tree

created by 2022/03/01

Algorithm : BFS
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
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }
    const queue = [[root, 0]];
    let result = 0,
        l = 0,
        r = 0;
    while (queue.length) {
        const size = queue.length;
        const startIdx = queue[0][1];
        for (let i = 0; i < size; ++i) {
            const [node, idx] = queue.shift();
            if (i === 0) {
                l = idx;
            }
            if (i === size - 1) {
                r = idx;
            }
            const subIdx = idx - startIdx;
            if (node.left !== null) {
                queue.push([node.left, 2 * subIdx + 1]);
            }
            if (node.right !== null) {
                queue.push([node.right, 2 * subIdx + 2]);
            }
        }
        result = Math.max(result, r - l + 1);
    }
    return result;
};

console.log(widthOfBinaryTree(root));
