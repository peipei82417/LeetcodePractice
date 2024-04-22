/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let groups = {};
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if (groups[key] === undefined) {
            groups[key] = new Array();
        }
        groups[key].push(this[i]);
    }
    return groups;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
const array = [{ id: '1' }, { id: '1' }, { id: '2' }];
const fn = function (item) {
    return item.id;
};
console.log(array.groupBy(fn));
