/*
703. Kth Largest Element in a Stream

create by 2024/04/24
*/
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    const sliceIdx = nums.length - k <= 0 ? 0 : nums.length - k;
    this.k = k;
    this.heap = nums
        .slice()
        .sort((a, b) => a - b)
        .slice(sliceIdx, nums.length);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.heap.length == this.k && this.heap[0] >= val) {
        return this.heap[0];
    }
    this.heap.push(val);
    this.heap.sort((a, b) => a - b);
    if (this.heap.length > this.k) {
        this.heap.shift();
    }
    return this.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(3, [5, -1]);
console.log(kthLargest.add(2));
console.log(kthLargest.add(1));
console.log(kthLargest.add(-1));
console.log(kthLargest.add(3));
console.log(kthLargest.add(4));
