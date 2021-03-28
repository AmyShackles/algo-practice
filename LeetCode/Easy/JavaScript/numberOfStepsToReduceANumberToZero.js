/*
    Source: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
*/

function numberOfSteps(num) {
    let count = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
        count++;
    }
    return count;
}

module.exports = { numberOfSteps };