/*
    Source: https://leetcode.com/problems/jewels-and-stones/
*/

function numJewelsInStones(jewels, stones) {
    return [...stones].filter((val) => jewels.includes(val)).length;
}

module.exports = { numJewelsInStones };