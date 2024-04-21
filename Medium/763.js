/*
763. Partition Labels

created by 2022/03/21

Greedy
Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let result = [];
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, map.get(s[i]));
        if (i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
};

const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));
