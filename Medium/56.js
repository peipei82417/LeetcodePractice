/*
56. Merge Intervals

created by 2022/03/25

Time complexity
    totle : O(n logn)
Space complexity
    totle : O(n)
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    const result = [];
    for (let interval of intervals) {
        if (!result.length || result[result.length - 1][1] < interval[0]) {
            result.push(interval);
        } else {
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }
    return result;
};

let intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
console.log(merge(intervals));
