/*
1678. Goal Parser Interpretation

created by 2022/03/08

Time complexity
    totle : O(n)
Space complexity
    totle : O(n)
*/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let result = "";
    let i = 0;
    while (i < command.length) {
        const s = command[i];
        if (s === "(") {
            const s2 = command[i + 1]
            if (s2 === ')') {
                result += "o";
                i++;
            } else if (s2 === 'a') {
                result += "al";
                i += 3;
            }
        } else {
            result += s;
        }
        i++;
    }
    return result;
};

let command = "G()(al)";
command = "G()()()()(al)";
command = "(al)G(al)()()G";
console.log(interpret(command));