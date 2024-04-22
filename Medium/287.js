/*
287. Find the Duplicate Number

create by 2023/10/19

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = 0,
        fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            break;
        }
    }

    let slow2 = 0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow === slow2) {
            return slow;
        }
    }
};

let nums = [18, 13, 14, 17, 9, 19, 7, 17, 4, 6, 17, 5, 11, 10, 2, 15, 8, 12, 16, 17];
console.log(findDuplicate(nums));
