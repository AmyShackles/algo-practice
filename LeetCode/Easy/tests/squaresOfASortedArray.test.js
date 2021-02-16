const { sortedSquares } = require("../squaresOfASortedArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sortedSquares", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [-4,-1,0,3,10]
            Output: [0,1,9,16,100]
            */
            const expected = [0,1,9,16,100];
            const actual = sortedSquares([-4,-1,0,3,10]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [-7,-3,2,3,11]
            Output: [4,9,9,49,121]
            */
            const expected = [4,9,9,49,121];
            const actual = sortedSquares([-7,-3,2,3,11]);
            expect(actual).to.deep.equal(expected);
        });
    });
