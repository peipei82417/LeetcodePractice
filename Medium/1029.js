/*
1029. Two City Scheduling

created by 2022/03/25

Greedy
Time complexity
    totle : O(nlogn)
Space complexity
    totle : O(n)
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    costs.sort((a, b) => {
        return b[1] - b[0] - (a[1] - a[0]);
    });
    const N = costs.length;
    let result = 0;
    for (let i = 0; i < N; i++) {
        result += i < N / 2 ? costs[i][0] : costs[i][1];
    }
    return result;
};

let costs = [
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
];
// 110
// costs = [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]];
// 1859
// costs = [[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]];
// 3086
console.log(twoCitySchedCost(costs));
