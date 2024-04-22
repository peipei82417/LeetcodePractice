/*
143. Reorder List

created by 2024/04/18

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head,
        fast = head.next;
    while (slow && fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let second = slow.next;
    let prev = null;
    slow.next = null;
    while (second) {
        const temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    second = prev;
    let first = head;
    while (second) {
        const temp1 = first.next,
            temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};

reorderList(head);
console.log(head);
