/*
2. Add Two Numbers

create by 2024/04/19

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
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
    let carry = 0;
    let head = new ListNode(0);
    let result = head;
    while (l1 || l2) {
        let val1 = l1?.val ?? 0;
        let val2 = l2?.val ?? 0;
        const sum = val1 + val2 + carry;
        const node = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        head.next = node;
        head = head.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry) {
        head.next = new ListNode(1);
    }
    return result.next;
};

console.log(addTwoNumbers(l11, l21));
