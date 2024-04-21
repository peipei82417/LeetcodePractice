/*
287. Find the Duplicate Number

create by 2022/03/29

Time Complexity
    total: O(n)
Space Complexity:
    total: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);

    tortoise = nums[0];

    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    return hare;
};

let nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));
