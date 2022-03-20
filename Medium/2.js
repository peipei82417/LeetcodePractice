import { ListNode, head, head1 } from './DataStructure/linkedlist.js';
/*
2. Add Two Numbers

created by 2022/03/10

Time complexity
    totle : O(max(m,n))
Space complexity
    totle : O(max(m,n))
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    while (l1 || l2) {
        const x = (l1 != null) ? l1.val : 0;
        const y = (l2 != null) ? l2.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1) { l1 = l1.next; }
        if (l2) { l2 = l2.next; }
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};

console.log(addTwoNumbers(head, head1));
