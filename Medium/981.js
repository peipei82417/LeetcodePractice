/*
981. Time Based Key-Value Store

create by 2024/04/17

Time Complexity
    total: O(log(n))
*/

var TimeMap = function () {
    this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map.has(key)) {
        this.map.get(key).push({ timestamp, value });
    } else {
        this.map.set(key, [{ timestamp, value }]);
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) {
        return '';
    }
    let arr = this.map.get(key);
    let l = 0,
        r = arr.length - 1;
    if (timestamp > arr[r].timestamp) {
        return arr[r].value;
    }
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (
            arr[mid].timestamp === timestamp ||
            (mid + 1 < arr.length && timestamp > arr[mid].timestamp && timestamp < arr[mid + 1].timestamp)
        ) {
            return arr[mid].value;
        }
        if (arr[mid].timestamp < timestamp) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return '';
};

// ["TimeMap", "set",             "get",      "get",      "set",              "get",      "get"]
// [[],        ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]

// ["TimeMap", "set",              "set",             "get",      "get",       "get",       "get",       "get"]
// [[],        ["love","high",10], ["love","low",20], ["love",5], ["love",10], ["love",15], ["love",20], ["love",25]]
// [null,      null,               null,              "",         "high",      "high",      "low",       "low"]

const timeMap = new TimeMap();
timeMap.set('love', 'high', 10);
timeMap.set('love', 'low', 20);
console.log(timeMap.get('love', 5));
console.log(timeMap.get('love', 10));
console.log(timeMap.get('love', 15));
console.log(timeMap.get('love', 20));
console.log(timeMap.get('love', 25));
