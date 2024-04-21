/*
1779. Find Nearest Point That Has the Same X or Y Coordinate

created by 2022/03/03

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let minLen = Infinity;
    let idx = -1;
    for (let i = 0; i < points.length; i++) {
        let pos = points[i];
        if (pos[0] === x || pos[1] === y) {
            let d = Math.abs(pos[0] - x) + Math.abs(pos[1] - y);
            if (d < minLen) {
                minLen = d;
                idx = i;
            }
        }
    }
    return idx;
};

let x = 3,
    y = 4,
    points = [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
    ];
//let x = 3, y = 4, points = [[2, 3]];
console.log(nearestValidPoint(x, y, points));
