/*
695. Max Area of Island

create by 2024/04/25

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    var dfs = function (y, x) {
        if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length || grid[y][x] !== 1) {
            return 0;
        }
        grid[y][x] = 0;
        return 1 + dfs(y + 1, x) + dfs(y - 1, x) + dfs(y, x + 1) + dfs(y, x - 1);
    };
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            if (cell) {
                const area = dfs(i, j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};

console.log(
    maxAreaOfIsland([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
);
