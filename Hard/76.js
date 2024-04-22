/*
76. Minimum Window Substring

create by 2024/04/17

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const mapT = new Map();
    const window = new Map();
    for (const char of t) {
        mapT.set(char, (mapT.get(char) || 0) + 1);
    }
    let have = 0,
        need = mapT.size;
    let range = [-1, -1];
    let len = Infinity;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        const char = s[r];
        window.set(char, (window.get(char) || 0) + 1);
        if (mapT.has(char) && window.get(char) === mapT.get(char)) {
            have += 1;
        }
        while (have === need) {
            if (r - l + 1 < len) {
                range = [l, r];
                len = r - l + 1;
            }
            window.set(s[l], window.get(s[l]) - 1);
            if (mapT.has(s[l]) && window.get(s[l]) < mapT.get(s[l])) {
                have -= 1;
            }
            l += 1;
        }
    }
    return s.slice(range[0], range[1] + 1);
};

const s = 'ADOBECODEBANC',
    t = 'ABC';
console.log(minWindow(s, t));
