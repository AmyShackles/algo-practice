/*
    Source: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
*/

// function smallerNumbersThanCurrent(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         let current = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (nums[j] < nums[i]) {
//                 current++;
//             }
//         }
//         arr[i] = current;
//     }
//     return arr;
// }

function smallerNumbersThanCurrent(nums) {
    let sorted = [...nums].sort((a, b) => a - b);
    return nums.map(num => sorted.indexOf(num))
}

module.exports = { smallerNumbersThanCurrent };