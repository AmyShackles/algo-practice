/*
    Source: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
*/

// First solution -- manipulates number into a string
// function subtractProductAndSum(n) {
//     let product = 1, sum = 0;
//     let numString = n.toString()
//     for (let i = 0; i < numString.length; i++) {
//         product *= numString[i];
//         sum += +numString[i];
//     };
//     return product - sum;
// }

// Second solution, treats the number as a number
function subtractProductAndSum(n) {
    let sum = 0, product = 1, modulo = 0;
    while (n > 0) {
        mod = n % 10;
        sum += mod;
        product *= mod;
        n = Math.trunc(n / 10)
    }
    return product - sum;
}

module.exports = { subtractProductAndSum };