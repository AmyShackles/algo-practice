const { largestSumAfterKNegations } = require("../maximizeSumOfArrayAfterKNegations.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("largestSumAfterKNegations", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = [4,2,3], K = 1
            Output: 5
            */
            const expected = 5;
            const actual = largestSumAfterKNegations([4,2,3],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: A = [3,-1,0,2], K = 3
            Output: 6
            */
            const expected = 6;
            const actual = largestSumAfterKNegations([3,-1,0,2],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: A = [2,-3,-1,5,-4], K = 2
            Output: 13
            */
            const expected = 13;
            const actual = largestSumAfterKNegations([2,-3,-1,5,-4],2);
            expect(actual).to.deep.equal(expected);
        });
    });
