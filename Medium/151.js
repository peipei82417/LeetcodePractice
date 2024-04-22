/*
151. Reverse Words in a String

create by 2023/10/16

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const result = [];
    const splited = s.split(' ');
    for (let i = splited.length; i >= 0; i--) {
        if (splited[i]) {
            result.push(splited[i]);
        }
    }
    return result.join(' ');
};

console.log(reverseWords('the sky is blue'));
// Output: "blue is sky the"

console.log(reverseWords('  hello world  '));
// Output: "world hello"

console.log(reverseWords('a good   example'));
// Output: "example good a"

console.log(reverseWords('EPY2giL'));
// Output: "EPY2giL"

console.log(reverseWords('   fffff ff gg ee'));
// Output: "ee gg ff fffff"
