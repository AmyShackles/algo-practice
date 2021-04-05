/*
    Source: https://leetcode.com/problems/flipping-an-image/
*/

// function flipAndInvertImage(A) {
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A[i].length; j++) {
//             A[i][j] ^= 1;
//         }
//         A[i].reverse();
//     }
//     return A;
// }

function flipAndInvertImage(image) {
    return image.map(row => row.map(col => col ^= 1).reverse())
}

module.exports = { flipAndInvertImage };