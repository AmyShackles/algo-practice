/*
    Source: https://leetcode.com/problems/decompress-run-length-encoded-list/
*/

function decompressRLElist(nums) {
    let arr = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
        arr.push(...new Array(nums[i]).fill(nums[i + 1]));
    }
    return arr;
}

module.exports = { decompressRLElist };