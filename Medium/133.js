/*
133. Clone Graph

create by 2024/04/25

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) {
        return null;
    }
    const map = new Map();
    var dfs = function (node) {
        if (map.has(node)) {
            return map.get(node);
        }
        const clone = new Node(node.val);
        map.set(node, clone);
        for (const neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    };

    return dfs(node);
};

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
n1.neighbors = [n2, n4];
n2.neighbors = [n1, n3];
n3.neighbors = [n2, n4];
n4.neighbors = [n1, n3];
console.log(cloneGraph(n1));
