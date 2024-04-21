/*
146. LRU Cache

create by 2022/04/01

Time Complexity
    total: O(1)
Space Complexity
    total: O(n)
*/
function Node(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node("head", 0);
    this.tail = new Node("tail", 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.map.get(key);
    if (node === undefined) {
        return -1;
    }
    this.remove(node);
    this.insert(node);

    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.remove(this.map.get(key));
    }
    const node = new Node(key, value);
    this.insert(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
        const last = this.tail.prev;
        this.map.delete(last.key);
        this.remove(last);
    }
};

LRUCache.prototype.remove = function (node) {
    const next = node.next;
    const prev = node.prev;
    prev.next = next;
    next.prev = prev;
};

LRUCache.prototype.insert = function (node) {
    const first = this.head.next;
    first.prev = node;
    node.prev = this.head;
    node.next = first;
    this.head.next = node;
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
