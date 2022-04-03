/*
146. LRU Cache

create by 2022/04/01

Time Complexity
    totle: O(1)
Space Complexity
    totle: O(n)
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this._capacity = capacity;
    this._map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const value = this._map.get(key);
    if (value === undefined) {
        return -1;
    }
    this._map.delete(key);
    this._map.set(key, value);

    return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this._map.size >= this._capacity && !this._map.has(key)) {
        const firstKey = this._map.keys().next().value;
        this._map.delete(firstKey);
    }
    this._map.delete(key);
    this._map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cachs = new LRUCache(2);
console.log(cachs.get(2));
cachs.put(2, 6);
console.log(cachs.get(1));
cachs.put(1, 5);
cachs.put(1, 2);
console.log(cachs.get(1));
console.log(cachs.get(2));
