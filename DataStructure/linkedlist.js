class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// head = [1, 2, 3, 3, 4, 4, 5]
let head = new ListNode(-1);
let nA2 = new ListNode(5);
let nA3 = new ListNode(3);
let nA4 = new ListNode(4);
let nA5 = new ListNode(0);
// let nA6 = new ListNode(4);
// let nA7 = new ListNode(5);
head.next = nA2;
nA2.next = nA3;
nA3.next = nA4;
nA4.next = nA5;
// nA5.next = nA6;
// nA6.next = nA7;

export { ListNode, head };
