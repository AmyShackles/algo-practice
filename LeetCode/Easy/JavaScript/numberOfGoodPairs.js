/*
    Source: https://leetcode.com/problems/number-of-good-pairs/
*/

// function numIdenticalPairs(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// function numIdenticalPairs(nums) {
//     let counts = {};
//     let count = 0;
//     nums.forEach(val => {
//         if (counts[val] !== undefined) {
//             counts[val]++;
//             count += counts[val]
//         } else {
//             counts[val] = 0;
//         }
//     })
//     return count;
// }

function numIdenticalPairs(nums) {
    let counts = {};
    let count = 0;
    nums.forEach(val => {
        if (counts[val] !== undefined) {
            count += counts[val]++;
        } else {
            counts[val] = 1;
        }
    })
    return count;
}

module.exports = { numIdenticalPairs };