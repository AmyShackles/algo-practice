/*
    Source: https://leetcode.com/problems/decode-xored-array/
*/

function decode(encoded, first) {
    let decoded = [first];
    for (let i = 0; i < encoded.length; i++) {
        decoded.push(decoded[decoded.length - 1] ^ encoded[i]);
    }
    return decoded;
}

module.exports = { decode };