/*
    Source: https://leetcode.com/problems/xor-operation-in-an-array/
*/

// Instructions included a directive to create an array,
// function xorOperation (n,start) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr[i] = start + 2 * i;
//     }
//     return arr.reduce((prev, current) => prev ^ current);
// };

// However, an array isn't actually necessary to get to a solution and I don't understand the reasoning for it
function xorOperation (n,start) {
    let val = start + 2 * 0;
    for (let i = 1; i < n; i++) {
        val ^= start + 2 * i;
    }
    return val;
};

module.exports = { xorOperation };