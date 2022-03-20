/*
1232. Check If It Is a Straight Line

created by 2022/03/06

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length <= 2) return true;
    const getGradient = (co1, co2) => {
        const [x1, y1] = co1;
        const [x2, y2] = co2;
        if (x1 === x2) return Infinity;
        return (y1 - y2) / (x1 - x2);
    };
    for (let i = 1; i < coordinates.length - 1; i++) {
        const gradient1 = getGradient(coordinates[i], coordinates[i - 1]);
        const gradient2 = getGradient(coordinates[i], coordinates[i + 1]);
        if (gradient1 !== gradient2) return false;
    }
    return true;
};

let // coordinates = [
    //     [1, 1],
    //     [2, 2],
    //     [2, 0],
    // ];

    coordinates = [
        [0, 0],
        [0, 1],
        [0, -1],
    ];

console.log(checkStraightLine(coordinates));
