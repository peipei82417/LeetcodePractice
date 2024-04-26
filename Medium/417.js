/*
417. Pacific Atlantic Water Flow

created by 2024/04/25
*/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const canFlowToPacific = new Set();
    const canFlowToAtlantic = new Set();

    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[i].length; j++) {
            const pos = `${i}-${j}`;
            const [flowToPacific, flowToAtlantic] = checkFlow(heights, i, j, {
                canFlowToPacific,
                canFlowToAtlantic,
            });
            if (flowToPacific) {
                canFlowToPacific.add(pos);
            }
            if (flowToAtlantic) {
                canFlowToAtlantic.add(pos);
            }
        }
    }
    const result = [];
    Array.from(canFlowToPacific).forEach((pos) => {
        if (canFlowToAtlantic.has(pos)) {
            result.push(pos.split("-"));
        }
    });
    return result;
};

var checkFlow = function (heights, y, x, set) {
    const { canFlowToPacific, canFlowToAtlantic } = set;
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const str = `${y}-${x}`;
    let flowToPacific = canFlowToPacific.has(str);
    let flowToAtlantic = canFlowToAtlantic.has(str);
    const flowSet = new Set([str]);
    const queue = [[y, x]];
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const pos = queue.shift();
            for (const dir of directions) {
                if (flowToPacific && flowToAtlantic) {
                    return [flowToPacific, flowToAtlantic];
                }
                const vec = [pos[0] + dir[0], pos[1] + dir[1]];
                const str = `${vec[0]}-${vec[1]}`;
                if (flowSet.has(str)) {
                    continue;
                }
                if (vec[0] < 0 || vec[1] < 0) {
                    flowToPacific = true;
                    continue;
                } else if (
                    vec[0] >= heights.length ||
                    vec[1] >= heights[vec[0]].length
                ) {
                    flowToAtlantic = true;
                    continue;
                }
                if (heights[vec[0]][vec[1]] > heights[pos[0]][pos[1]]) {
                    continue;
                }
                flowSet.add(str);
                queue.push([vec[0], vec[1]]);
            }
        }
    }
    return [flowToPacific, flowToAtlantic];
};

const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(heights));
