const { checkPerfectNumber } = require("../perfectNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("checkPerfectNumber", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: num = 28
            Output: true
            */
            const expected = true;
            const actual = checkPerfectNumber(28);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: num = 6
            Output: true
            */
            const expected = true;
            const actual = checkPerfectNumber(6);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: num = 496
            Output: true
            */
            const expected = true;
            const actual = checkPerfectNumber(496);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: num = 8128
            Output: true
            */
            const expected = true;
            const actual = checkPerfectNumber(8128);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: num = 2
            Output: false
            */
            const expected = false;
            const actual = checkPerfectNumber(2);
            expect(actual).to.deep.equal(expected);
        });
    });
