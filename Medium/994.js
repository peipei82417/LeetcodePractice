/*
994. Rotting Oranges

create by 2024/04/25

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let time = 0;
    let fresh = 0;
    const queue = [];

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            if (cell === 1) {
                fresh += 1;
            }
            if (cell === 2) {
                queue.push([i, j]);
            }
        }
    }

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (queue.length && fresh > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const v = queue.shift();
            for (const dir of directions) {
                const vec = [v[0] + dir[0], v[1] + dir[1]];
                if (
                    vec[0] < 0 ||
                    vec[0] >= grid.length ||
                    vec[1] < 0 ||
                    vec[1] >= grid[0].length ||
                    grid[vec[0]][vec[1]] !== 1
                ) {
                    continue;
                }
                grid[vec[0]][vec[1]] = 2;
                queue.push(vec);
                fresh -= 1;
            }
        }
        time += 1;
    }
    return fresh === 0 ? time : -1;
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
); // 4

console.log(
    orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
    ])
); // -1

console.log(orangesRotting([[0, 2]])); // 0
