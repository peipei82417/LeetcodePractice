import { head, ListNode } from './DataStructure/linkedlist.js'
/*
148. Sort List

created by 2022/02/24

Algorithm : Sort
(Top Down Merge Sort)
Time complexity
    totle : O(nlogn)
Space complexity
    totle : O(logn)

(Bottom Up Merge Sort)
Time complexity
    totle : O(nlogn)
Space complexity
    totle : O(1)
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function (head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let slow = head;
//     let fast = head.next;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     let mid = slow.next;
//     slow.next = null;
//     return merge(sortList(head), sortList(mid));
// };

// let merge = function (l1, l2) {
//     let dummyHead = new ListNode(0);
//     let tail = dummyHead;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             tail.next = l1;
//             l1 = l1.next;
//         } else if (l1.val >= l2.val) {
//             tail.next = l2;
//             l2 = l2.next;
//         }
//         tail = tail.next;
//     }
//     tail.next = l1 ? l1 : l2;
//     return dummyHead.next;
// }

//-----------------------------------

var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let len = 1, curr = head;
    while (curr = curr.next) {
        len++;
    }
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let l, r, tail;
    for (let i = 1; i < len; i <<= 1) {
        curr = dummyHead.next;
        tail = dummyHead;
        while (curr) {
            l = curr;
            r = split(l, i);
            curr = split(r, i);
            const pair = merge(l, r);
            tail.next = pair[0];
            tail = pair[1];
        }
    }
    return dummyHead.next;
};

let split = function (head, n) {
    while (head && --n) {
        head = head.next;
    }
    let rest = head ? head.next : null;
    if (head) {
        head.next = null;
    }
    return rest;
}

let merge = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else if (l1.val >= l2.val) {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 ? l1 : l2;
    while (tail.next) {
        tail = tail.next;
    }
    return [dummyHead.next, tail];
}

console.log(head);
sortList(head);
console.log(head);
