// 2618. Check if Object Instance of Class

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (
        obj === null ||
        obj === undefined ||
        typeof classFunction !== "function"
    ) {
        return false;
    }
    let currPrototype = Object.getPrototypeOf(obj);
    while (currPrototype !== null) {
        if (currPrototype === classFunction.prototype) {
            return true;
        }
        currPrototype = Object.getPrototypeOf(currPrototype);
    }
    return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); // true
