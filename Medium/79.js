/*
79. Word Search

create by 2024/04/23

Time Complexity
    total: O(m * n * 4^n)
Space Complexity
    total: O(n)
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const paths = new Set();
    var dfs = function (i, j, wordIdx) {
        const path = `${i}-${j}`;
        if (wordIdx === word.length) {
            return true;
        }
        if (
            i < 0 ||
            i > board.length - 1 ||
            j < 0 ||
            j > board[i].length - 1 ||
            paths.has(path) ||
            board[i][j] !== word[wordIdx]
        ) {
            return false;
        }
        paths.add(path);
        const res =
            dfs(i + 1, j, wordIdx + 1) ||
            dfs(i - 1, j, wordIdx + 1) ||
            dfs(i, j + 1, wordIdx + 1) ||
            dfs(i, j - 1, wordIdx + 1);
        paths.delete(path);
        return res;
    };
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

const board = [
        ['A', 'A', 'A'],
        ['B', 'C', 'D'],
    ],
    word = 'AAB';
