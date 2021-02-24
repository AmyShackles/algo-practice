const { minSubsequence } = require("../minimumSubsequenceInNonIncreasingOrder.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minSubsequence", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [4,3,10,9,8]
            Output: [10,9] 
            */
            const expected = [10,9] ;
            const actual = minSubsequence([4,3,10,9,8]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [4,4,7,6,7]
            Output: [7,7,6] 
            */
            const expected = [7,7,6] ;
            const actual = minSubsequence([4,4,7,6,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [6]
            Output: [6]
            */
            const expected = [6];
            const actual = minSubsequence([6]);
            expect(actual).to.deep.equal(expected);
        });
    });
