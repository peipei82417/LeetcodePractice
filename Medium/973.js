/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const arr = points.slice().sort((a, b) => {
        const aLen = Math.pow(a[0] - 0, 2) + Math.pow(a[1] - 0, 2);
        const bLen = Math.pow(b[0] - 0, 2) + Math.pow(b[1] - 0, 2);
        return aLen - bLen;
    });
    return arr.slice(0, k);
};

const test1 = [
    [
        [1, 3],
        [-2, 2],
    ],
    1,
];

const test2 = [
    [
        [3, 3],
        [5, -1],
        [-2, 4],
    ],
    2,
];

console.log(kClosest(...test1));
console.log(kClosest(...test2));
