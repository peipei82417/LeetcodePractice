/*
130. Surrounded Regions

create by 2024/04/25

Time Complexity
    total: O(m * n)
Space Complexity
    total: O(1)
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const visited = new Set();
    var checkSurround = function (i, j) {
        const key = `${i}-${j}`;
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
            return false;
        }
        if (board[i][j] === "X" || visited.has(key)) {
            return true;
        }
        visited.add(key);
        return (
            checkSurround(i - 1, j) &&
            checkSurround(i, j + 1) &&
            checkSurround(i + 1, j) &&
            checkSurround(i, j - 1)
        );
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (
                board[i][j] === "O" &&
                checkSurround(i, j) &&
                visited.size > 0
            ) {
                Array.from(visited).forEach((pos) => {
                    const [x, y] = pos.split("-");
                    board[x][y] = "X";
                });
            }
            visited.clear();
        }
    }
};

const board1 = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];
solve(board1);
console.log(board1);

const board2 = [
    ["O", "O"],
    ["O", "O"],
];
solve(board2);
console.log(board2);
