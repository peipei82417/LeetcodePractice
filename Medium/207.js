/*
207. Course Schedule

created by 2022/07/26

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
    const graph = new Array(numCourses);

    for (let i = 0; i < numCourses; i++) {
        graph[i] = new Array(0);
    }

    for (const prerequisite of prerequisites) {
        graph[prerequisite[1]].push(prerequisite[0]);
    }

    let isVisited = new Array(numCourses).fill(null);
    for (let i = 0; i < numCourses; i++) {
        if (dfs(graph, i, isVisited)) {
            return false;
        }
    }
    return true;
};

const dfs = function (graph, curr, isVisited) {
    if (isVisited[curr] === true) {
        return true;
    }
    if (isVisited[curr] === false) {
        return false;
    }

    isVisited[curr] = true;

    for (let t of graph[curr]) {
        if (dfs(graph, t, isVisited)) {
            return true;
        }
    }

    isVisited[curr] = false;

    return false;
};

const numCourses = 2,
    prerequisites = [
        [1, 0],
        [0, 1],
    ];
const result = canFinish(numCourses, prerequisites);
console.log(result);
