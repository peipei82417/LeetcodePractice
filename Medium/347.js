
/*
347. Top K Frequent Elements

create by 2022/03/29

Time Complexity
    totle: O(n)
Space Complexity:
    totle: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const N = nums.length;
    const map = new Map();
    const buckets = new Map();
    let max_freq = 1;
    for (let i = 0; i < N; i++) {
        const num = map.get(nums[i]);
        if (num === undefined) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], num + 1);
        }
        max_freq = Math.max(max_freq, map.get(nums[i]));
    }
    for (const [key, val] of map) {
        const bucket = buckets.get(val);
        if (bucket === undefined) {
            buckets.set(val, [key]);
        } else {
            bucket.push(key);
        }
    }
    const result = [];
    for (let i = max_freq; i > 0; i--) {
        const bucket = buckets.get(i);
        if (bucket === undefined) {
            continue;
        }
        result.push(...bucket);
        if (result.length === k) {
            return result;
        }
    }
    return result;
}

const nums = [1, 1, 1, 2, 2, 3, 1, 1, 2, 3, 3, 4, 4, 4, 5], k = 4;
console.log(topKFrequent(nums, k));