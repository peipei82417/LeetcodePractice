/*
19. Remove Nth Node From End of List

created by 2024/04/18

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let left = dummy,
        right = head;
    while (n > 0 && right) {
        right = right.next;
        n -= 1;
    }
    while (right) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return dummy.next;
};

removeNthFromEnd(head, 6);

while (head) {
    console.log(head.val);
    head = head.next;
}
