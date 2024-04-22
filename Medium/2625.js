/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n <= 0) {
        return arr;
    } else {
        const newArr = new Array(0);
        for (const item of arr) {
            if (item instanceof Array && n > 0) {
                newArr.push(...flat(item, n - 1));
            } else {
                newArr.push(item);
            }
        }
        return newArr;
    }
};