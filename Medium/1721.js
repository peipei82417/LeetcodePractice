import { ListNode, head } from "../DataStructure/linkedlist.js";
/*
1721. Swapping Nodes in a Linked List

created by 2022/04/03

Time complexity
    total : O(n)
Space complexity
    total : O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let curr = head;
    let count = 0;
    while (curr) {
        count++;
        curr = curr.next;
    }
    const second = count - k + 1;
    if (second === k || count === 1) {
        return head;
    }
    curr = head;
    count = 0;
    const temp = [];
    while (curr) {
        if (count + 1 === k || count + 1 === second) {
            temp.push(curr.val);
        }
        count++;
        curr = curr.next;
    }
    curr = head;
    count = 0;
    while (curr) {
        if (count + 1 === k || count + 1 === second) {
            curr.val = temp.pop();
        }
        count++;
        curr = curr.next;
    }
    return head;
};

console.log(swapNodes(head, 4));
