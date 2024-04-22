/*
36. Valid Sudoku

create by 2024/04/10

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row_map = new Array(9);
    let col_map = new Array(9);
    let box_map = new Array(9);
    for (let i = 0; i < 9; i++) {
        row_map[i] = new Set();
        col_map[i] = new Set();
        box_map[i] = new Set();
    }
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {
                continue;
            }
            let now = board[row][col];
            const box = Math.floor(col % 3) + Math.floor(row / 3) * 3;
            if (row_map[row].has(now) || col_map[col].has(now) || box_map[box].has(now)) {
                return false;
            }
            row_map[row].add(now);
            col_map[col].add(now);
            box_map[box].add(now);
        }
    }
    return true;
};
const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
