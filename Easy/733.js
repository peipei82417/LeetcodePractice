/*
733. Flood Fill

created by 2022/06/27

DFS
Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const orgiColor = image[sr][sc];
    const dfs = (image, x, y, color, orgi) => {
        if (
            x > image.length - 1 ||
            y > image[0].length - 1 ||
            x < 0 ||
            y < 0 ||
            image[x][y] !== orgi
        ) {
            return;
        }
        if (image[x][y] === orgi) {
            image[x][y] = color;
            dfs(image, x + 1, y, color, orgi);
            dfs(image, x - 1, y, color, orgi);
            dfs(image, x, y + 1, color, orgi);
            dfs(image, x, y - 1, color, orgi);
        }
        return image;
    };
    if (orgiColor !== newColor) {
        return dfs(image, sr, sc, newColor, orgiColor);
    } else {
        return image;
    }
};
// const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2;
const image = [
        [0, 0, 0],
        [0, 0, 0],
    ],
    sr = 0,
    sc = 0,
    color = 0;
const newImg = floodFill(image, sr, sc, color);

console.log(newImg);
