/*
141. Linked List Cycle

created by 2022/03/08

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    while(head){
        if(head.flag){
            return true;
        } else { 
            head.flag = true;
        }
        head = head.next;
    }
    return false;
};