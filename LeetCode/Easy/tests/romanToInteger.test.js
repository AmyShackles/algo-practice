const { romanToInt } = require("../romanToInteger.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("romanToInt", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "III"
            Output: 3
            */
            const expected = 3;
            const actual = romanToInt("III");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "IV"
            Output: 4
            */
            const expected = 4;
            const actual = romanToInt("IV");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "IX"
            Output: 9
            */
            const expected = 9;
            const actual = romanToInt("IX");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "LVIII"
            Output: 58
            */
            const expected = 58;
            const actual = romanToInt("LVIII");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: s = "MCMXCIV"
            Output: 1994
            */
            const expected = 1994;
            const actual = romanToInt("MCMXCIV");
            expect(actual).to.deep.equal(expected);
        });
    });
