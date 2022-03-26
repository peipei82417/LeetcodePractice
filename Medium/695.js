/*
695. Max Area of Island

created by 2022/03/22

Greedy
Time complexity
    totle : O(m * n)
Space complexity
    totle : O(m * n)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const row = grid.length, col = grid[0].length;
    let result = 0
    let dfs = function (i, j) {
        if (i > row - 1 || j > col - 1 || i < 0 || j < 0 || grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = 0;
        return (1 + dfs(i + 1, j) + dfs(i - 1, j) +
            dfs(i, j + 1) + dfs(i, j - 1));
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                result = Math.max(result, dfs(i, j));
            }
        }
    }
    return result;
};

let grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];
let grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]]
console.log(maxAreaOfIsland(grid));