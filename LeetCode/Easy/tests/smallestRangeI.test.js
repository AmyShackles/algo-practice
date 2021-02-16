const { smallestRangeI } = require("../smallestRangeI.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("smallestRangeI", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = [1], K = 0
            Output: 0
            */
            const expected = 0;
            const actual = smallestRangeI([1],0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: A = [0,10], K = 2
            Output: 6
            */
            const expected = 6;
            const actual = smallestRangeI([0,10],2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: A = [1,3,6], K = 3
            Output: 0
            */
            const expected = 0;
            const actual = smallestRangeI([1,3,6],3);
            expect(actual).to.deep.equal(expected);
        });
    });
