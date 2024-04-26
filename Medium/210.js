/*
210. Course Schedule II

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const map = new Map();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, new Set());
    }
    for (const [crs, pre] of prerequisites) {
        map.get(crs).add(pre);
    }
    const result = [];
    const visit = new Set();
    const cycle = new Set();
    var dfs = function (crs) {
        if (cycle.has(crs)) {
            return false;
        }
        if (visit.has(crs)) {
            return true;
        }
        cycle.add(crs);
        for (const p of Array.from(map.get(crs))) {
            if (!dfs(p)) {
                return false;
            }
        }
        cycle.delete(crs);
        visit.add(crs);
        result.push(crs);
        return true;
    };
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return [];
        }
    }
    return result;
};

const numCourses = 1,
    prerequisites = [];
console.log(findOrder(numCourses, prerequisites));
