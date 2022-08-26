/*
128. Longest Consecutive Sequence

create by 2022/07/06

Time Complexity
    totle: O(nlog n)
Space Complexity
    totle: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive1 = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);

    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                currentStreak += 1;
            } else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    }
    return Math.max(longestStreak, currentStreak);
};

/*
Time Complexity
    totle: O(n)
Space Complexity
    totle: O(n)
*/
var longestConsecutive2 = function (nums) {
    let longest_streak = 0;
    let num_set = new Set(nums);
    num_set.forEach((element) => {
        if (!num_set.has(element - 1)) {
            let current_num = element;
            let current_streak = 1;
            while (num_set.has(current_num + 1)) {
                current_num += 1;
                current_streak += 1;
            }
            longest_streak = Math.max(longest_streak, current_streak);
        }
    });
    return longest_streak;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive2(nums));
