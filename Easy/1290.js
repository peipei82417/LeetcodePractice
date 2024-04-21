import { ListNode, head } from "../DataStructure/linkedlist.js";
/*
1290. Convert Binary Number in a Linked List to Integer

created by 2022/03/10

Time complexity
    total : O(n)
Space complexity
    total : O(n)
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
 * @return {number}
 */
var getDecimalValue = function (head) {
    let s = "";
    while (head) {
        s += head.val.toString();
        head = head.next;
    }
    return parseInt(s, 2);
};

console.log(getDecimalValue(head));
