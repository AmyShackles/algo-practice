/*
    Source: https://leetcode.com/problems/roman-to-integer/
*/

/*
    Source: https://leetcode.com/problems/roman-to-integer/

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

    Edge cases:
    IV            4
    IX            9
    VX - uh, no, idiot.  What the fuck, self.
    XL            40
    XC            90
    CD            400
    CM            900

*/

function romanToInt(s) {
    const lookup = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let num = 0;
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
            num += lookup[s[i + 1]] - lookup[s[i]];
            i++;
        } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
            num += lookup[s[i + 1]] - lookup[s[i]];
            i++;
        } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
            num += lookup[s[i + 1]] - lookup[s[i]];
            i++;
        } else {
            num += lookup[s[i]];
        }
    }
    return num;
}

module.exports = { romanToInt };
