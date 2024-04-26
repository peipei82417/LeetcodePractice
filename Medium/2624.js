// 2624. Snail Traversal

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) {
        return [];
    }
    const result = new Array(rowsCount);
    for (let i = 0; i < rowsCount; i++) {
        result[i] = new Array(colsCount).fill(null);
    }
    this.forEach((n, i) => {
        const r = Math.floor(i / rowsCount);
        if (r % 2 === 0) {
            const c = i % rowsCount;
            result[c][r] = n;
        } else {
            const c = rowsCount - 1 - (i % rowsCount);
            result[c][r] = n;
        }
    });
    return result;
};

const arr = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
console.log(arr.snail(5, 4));
console.log(1 % 2);
console.log(2 % 2);
// [
//     [19, 17, 16, 15],
//     [10, 1, 14, 4],
//     [3, 2, 12, 20],
//     [7, 5, 18, 11],
//     [9, 8, 6, 13],
// ];
