/*
684. Redundant Connection

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const parents = new Array(edges.length).fill(0);
    const ranks = new Array(edges.length).fill(1);

    var find = function (node) {
        while (parents[node] !== node) {
            parents[node] = parents[parents[node]];
            node = parents[node];
        }
        return node;
    };

    for (const [u, v] of edges) {
        if (!parents[u]) {
            parents[u] = u;
        }
        if (!parents[v]) {
            parents[v] = v;
        }
        let pu = find(u);
        let pv = find(v);
        if (pu === pv) {
            return [u, v];
        }
        if (ranks[pv] > ranks[pu]) {
            [pu, pv] = [pv, pu];
        }
        parents[pv] = pu;
        ranks[pu] += pv;
    }
};

const edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
];
console.log(findRedundantConnection(edges));
