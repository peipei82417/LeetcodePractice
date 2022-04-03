/*
496. Next Greater Element I

created by 2022/03/05

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = (nums1, nums2) => {
    const stack = [];
    const map = {};
    for (let i = nums2.length - 1; i >= 0; --i) {
        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(nums2[i]);
    }
    return nums1.map((num) => map[num]);
};

let nums1 = [4, 1, 2],
    nums2 = [1, 3, 4, 2];
// Output: [-1,3,-1]
// nums1 = [2, 4], nums2 = [1, 2, 3, 4]
// Output: [3,-1]

console.log(nextGreaterElement(nums1, nums2));
