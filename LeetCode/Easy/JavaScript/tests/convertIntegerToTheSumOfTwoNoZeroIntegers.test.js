const { getNoZeroIntegers } = require("../convertIntegerToTheSumOfTwoNoZeroIntegers.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("getNoZeroIntegers", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 2
            Output: [1,1]
            */
            const expected = [1,1];
            const actual = getNoZeroIntegers(2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 11
            Output: [2,9]
            */
            const expected = [2,9];
            const actual = getNoZeroIntegers(11);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 10000
            Output: [1,9999]
            */
            const expected = [1,9999];
            const actual = getNoZeroIntegers(10000);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 69
            Output: [1,68]
            */
            const expected = [1,68];
            const actual = getNoZeroIntegers(69);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: n = 1010
            Output: [11,999]
            */
            const expected = [11,999];
            const actual = getNoZeroIntegers(1010);
            expect(actual).to.deep.equal(expected);
        });
    });
