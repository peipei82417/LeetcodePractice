/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const obj = {};
    for (const item of arr1) {
        obj[item.id] = item;
    }
    for (const item of arr2) {
        if (obj[item.id]) {
            obj[item.id] = { ...obj[item.id], ...item };
        } else {
            obj[item.id] = item;
        }
    }
    return Object.values(obj);
};