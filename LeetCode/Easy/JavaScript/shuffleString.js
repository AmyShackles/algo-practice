/*
    Source: https://leetcode.com/problems/shuffle-string/
*/

// Adds overhead of creating an array and joining it at the end
// function restoreString(s, indices) {
//     let arr = [];
//     for (let i = 0; i < s.length; i++) {
//         arr[indices[i]] = s[i];
//     }
//     return arr.join("")
// }

function restoreString(s, indices) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        str += s[indices.indexOf(i)]
    }
    return str;
}


module.exports = { restoreString };