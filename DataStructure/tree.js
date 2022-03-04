class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let n1 = new TreeNode(3);
let n2 = new TreeNode(9);
let n3 = new TreeNode(20);
let n4 = new TreeNode(15);
let n5 = new TreeNode(7);

let root = n1;
n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

export { TreeNode, root }