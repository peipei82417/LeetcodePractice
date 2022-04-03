/*
953. Verifying an Alien Dictionary

created by 2022/03/09

Time complexity
    totle : O(m + n)
Space complexity
    totle : O(1)
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    }
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length) return false;
            if (words[i].charAt(j) != words[i + 1].charAt(j)) {
                const currentWordChar = words[i].charAt(j);
                const nextWordChar = words[i + 1].charAt(j);
                if (map.get(currentWordChar) > map.get(nextWordChar)) {
                    return false;
                } else {
                    break;
                }
            }
        }
    }
    return true;
};

let words = ["hello", "leetcode"],
    order = "ahlabcdefgijkmnopqrstuvwxyz";

console.log(isAlienSorted(words, order));
