import { ListNode, head } from "../DataStructure/linkedlist.js";
/*
206. Reverse Linked List

created by 2022/06/21

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
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
 * @return {ListNode}
 */

var reverseList = function (head) {
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};

const result = reverseList(head);
console.log(result)