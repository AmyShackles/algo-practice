/*
    Source: https://leetcode.com/problems/goal-parser-interpretation/
*/
// I love regex so like coming up with solutions using it, but realize that it might be an easy way out in an interview
// function interpret(command) {
//     return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al")
// }

function interpret(command) {
    let interpreted = "";
    let index = 0;
    while (index < command.length) {
        if (command[index] === "G") {
            interpreted += "G";
        } else if (command[index] === "(") {
            if (command[index + 1] === ")") {
                interpreted += "o";
                index++;
            } else if (command.slice(index, index + 4) === "(al)") {
                interpreted += "al";
                index += 3;
            }
        }
        index++;
    }
    return interpreted;
}

module.exports = { interpret };