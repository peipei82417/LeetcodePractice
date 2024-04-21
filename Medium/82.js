import { ListNode, head } from "../DataStructure/linkedlist.js";
/*
82. Remove Duplicates from Sorted List II

created by 2022/03/09

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }
    if (head.next && head.val === head.next.val) {
        const value = head.val;
        while (head && head.val === value) {
            head = head.next;
        }
        return deleteDuplicates(head);
    }
    head.next = deleteDuplicates(head.next);
    return head;
};

console.log(deleteDuplicates(head));
