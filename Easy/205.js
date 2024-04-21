/*
205. Isomorphic Strings

created by 2022/06/18

Time complexity
    total : O(n)
Space complexity
    total : O(n)
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const count = s.length;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < count; i++) {
        const str1 = map1.get(s[i]);
        const str2 = map2.get(t[i]);
        if (str1 === undefined && str2 === undefined) {
            map1.set(s[i], t[i]);
            map2.set(t[i], s[i]);
        } else if (str1 !== t[i] || str2 !== s[i]) {
            return false;
        }
    }
    return true;
};

const s = "paper",
    t = "title";
const result = isIsomorphic(s, t);
console.log(result);
