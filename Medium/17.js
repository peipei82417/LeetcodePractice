/*
17. Letter Combinations of a Phone Number

create by 2024/04/23

Time Complexity
    total: O(4^n)
Space Complexity
    total: O(1)
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const results = [];
    if (!digits) {
        return results;
    }

    const obj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    var backtracking = function (i, str) {
        if (str.length === digits.length) {
            results.push(str);
            return;
        }
        for (const c of obj[digits[i]]) {
            backtracking(i + 1, str + c);
        }
    };

    backtracking(0, '');
    return results;
};

console.log(letterCombinations('23'));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
