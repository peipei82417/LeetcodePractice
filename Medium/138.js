/*
138. Copy List with Random Pointer

create by 2024/04/19

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    const map = new Map();
    map.set(null, null);
    let curr = head;
    while (curr) {
        const copy = new Node(curr.val, null, null);
        map.set(curr, copy);
        curr = curr.next;
    }
    curr = head;
    while (curr) {
        const copy = map.get(curr);
        copy.next = map.get(curr.next);
        copy.random = map.get(curr.random);
        curr = curr.next;
    }
    return map.get(head);
};

console.log(copyRandomList(n1));
