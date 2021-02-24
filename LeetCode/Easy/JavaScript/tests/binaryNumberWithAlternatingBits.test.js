const { hasAlternatingBits } = require("../binaryNumberWithAlternatingBits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("hasAlternatingBits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 5
            Output: true
            */
            const expected = true;
            const actual = hasAlternatingBits(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 7
            Output: false
            */
            const expected = false;
            const actual = hasAlternatingBits(7);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 11
            Output: false
            */
            const expected = false;
            const actual = hasAlternatingBits(11);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 10
            Output: true
            */
            const expected = true;
            const actual = hasAlternatingBits(10);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: n = 3
            Output: false
            */
            const expected = false;
            const actual = hasAlternatingBits(3);
            expect(actual).to.deep.equal(expected);
        });
    });
