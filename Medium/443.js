/*
443. String Compression

create by 2023/10/18

Time Complexity
    total: O(n)
Space Complexity
    total: O(1)
*/
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return chars;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
// Output: Return 6,

console.log(compress(['a']));
// Output: Return 1,

console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']));
// Output: Return 4,
