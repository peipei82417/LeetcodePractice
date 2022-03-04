/*
1790. Check if One String Swap Can Make Strings Equal

created by 2022/03/04

Time complexity
    totle : O(n)
Space complexity
    totle : O(1)
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let count = 0, temp = new Array(2).fill('');
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;
            if (count > 2) { return false; }
            if (count === 1) {
                temp[0] = s1[i];
                temp[1] = s2[i];
            } else if (count === 2) {
                if (s1[i] !== temp[1] || s2[i] !== temp[0]) {
                    return false;
                }
            }
        }
    }
    if (count === 1) {
        return false;
    }
    return true;
};

let s1 = "bank", s2 = "kanb";
//s1 = "attack", s2 = "defend";
//s1 = "kelb", s2 = "kelb";
s1 = "aa", s2 = "ac";
console.log(areAlmostEqual(s1, s2));