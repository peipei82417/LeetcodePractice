/*
11. Container With Most Water

created by 2022/04/05

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0,
        r = height.length - 1;
    let result = 0;
    while (l < r) {
        const distance = r - l;
        const min = Math.min(height[l], height[r]);
        result = Math.max(result, min * distance);
        if (height[l] < height[r]) {
            l++;
        } else if (height[l] > height[r]) {
            r--;
        } else {
            l++, r--;
        }
    }
    return result;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
console.log(maxArea(height));
