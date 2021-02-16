const { isUgly } = require("../uglyNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isUgly", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 6
            Output: true
            */
            const expected = true;
            const actual = isUgly(6);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: 8
            Output: true
            */
            const expected = true;
            const actual = isUgly(8);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: 14
            Output: false 
            */
            const expected = false ;
            const actual = isUgly(14);
            expect(actual).to.deep.equal(expected);
        });
    });
