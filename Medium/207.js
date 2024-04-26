/*
207. Course Schedule

create by 2024/04/26

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const map = new Map();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    for (const [crs, pre] of prerequisites) {
        if (!map.has(crs)) {
            return false;
        }
        map.get(crs).push(pre);
    }

    const visit = new Set();
    var dfs = function (crs) {
        if (visit.has(crs)) {
            return false;
        }
        if (map.get(crs).length === 0) {
            return true;
        }
        visit.add(crs);
        for (const pre of map.get(crs)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visit.delete(crs);
        map.set(crs, []);
        return true;
    };

    for (const [crs] of prerequisites) {
        if (!dfs(crs)) {
            return false;
        }
    }
    return true;
};

const numCourses = 5,
    prerequisites = [
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
        [3, 4],
    ];
console.log(canFinish(numCourses, prerequisites));
