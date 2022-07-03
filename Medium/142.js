import { ListNode, head } from "../DataStructure/linkedlist.js";
/*
142. Linked List Cycle II

created by 2022/06/21

Floyd's Tortoise and Hare (Cycle Detection)
Time complexity
    totle : O(n ~ n^2)
Space complexity
    totle : O(n)
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    if (!fast || !fast.next) {
        return null;
    }
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};

const result = detectCycle(head);
console.log(result)