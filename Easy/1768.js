/*
1768. Merge Strings Alternately

created by 2022/03/08

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0, j = 0;
    let result = "";
    while (i < word1.length && j < word2.length) {
        result += (word1[i] + word2[j]);
        i++; j++;
    }
    if (i < word1.length) {
        result += word1.slice(i, word1.length);
    }
    if (j < word2.length) {
        result += word2.slice(j, word2.length);
    }
    return result;
};
let word1 = "ab", word2 = "pqrs"
console.log(mergeAlternately(word1,word2));