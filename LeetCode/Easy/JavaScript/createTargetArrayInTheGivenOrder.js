/*
    Source: https://leetcode.com/problems/create-target-array-in-the-given-order/
*/

function createTargetArray (nums,index) {
    let targetArray = [];
    nums.forEach((val, i) => {
        targetArray.splice(index[i], 0, val)
    });
    return targetArray;
};

module.exports = { createTargetArray };