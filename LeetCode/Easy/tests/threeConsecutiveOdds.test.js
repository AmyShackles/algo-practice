const { threeConsecutiveOdds } = require("../threeConsecutiveOdds.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("threeConsecutiveOdds", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [2,6,4,1]
            Output: false
            */
            const expected = false;
            const actual = threeConsecutiveOdds([2,6,4,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,34,3,4,5,7,23,12]
            Output: true
            */
            const expected = true;
            const actual = threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]);
            expect(actual).to.deep.equal(expected);
        });
    });
