/*
42. Trapping Rain Water

create by 2024/04/12

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let result = 0;
    let p1 = 0,
        p2 = height.length - 1,
        maxL = height[p1],
        maxR = height[p2];
    while (p1 < p2) {
        if (height[p2] < height[p1]) {
            result += Math.max(0, maxR - height[p2--]);
            maxR = Math.max(maxR, height[p2]);
        } else {
            result += Math.max(0, maxL - height[p1++]);
            maxL = Math.max(maxL, height[p1]);
        }
    }
    return result;
};
