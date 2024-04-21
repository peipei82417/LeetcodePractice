import { ListNode, head, head1 } from "../DataStructure/linkedlist.js";
/*
21. Merge Two Sorted Lists

created by 2022/03/07

Time complexity
    total : O(m + n)
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let list = new ListNode();
    let start = list;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            list.next = list1;
            list1 = list1.next;
        } else {
            list.next = list2;
            list2 = list2.next;
        }
        list = list.next;
    }
    if (list1) {
        list.next = list1;
    }
    if (list2) {
        list.next = list2;
    }
    return start.next;
};

console.log(mergeTwoLists(head, head1));
