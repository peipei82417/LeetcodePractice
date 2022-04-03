/*
228. Summary Ranges

created by 2022/02/28

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return [];
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        while (i < nums.length - 1 && nums[i] + 1 == nums[i + 1]) {
            i++;
        }
        if (num !== nums[i]) {
            result.push(`${num}->${nums[i]}`);
        } else {
            result.push(num.toFixed(0));
        }
    }
    return result;
};

nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
