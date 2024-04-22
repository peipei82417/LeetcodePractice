/*
271. Encode and Decode Strings

create by 2024/04/11

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (const str of strs) {
            result += str.length + '#' + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = new Array(0);
        let p1 = 0;
        let p2 = 1;
        while (p2 < str.length) {
            if (str[p2] !== '#') {
                p2++;
                continue;
            }
            const num = Number(str.slice(p1, p2));
            const s = str.slice(p2 + 1, p2 + num + 1);
            result.push(s);
            p1 = p2 + num + 1;
            p2 = p2 + num + 2;
        }
        return result;
    }
}

const solution = new Solution();
const encode = solution.encode(['we', 'say', ':', 'yes', '!@#$%^&*()']);
const decode = solution.decode(encode);

console.log(encode);
console.log(decode);
