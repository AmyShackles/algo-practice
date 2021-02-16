const { findKthPositive } = require("../kthMissingPositiveNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findKthPositive", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [2,3,4,7,11], k = 5
            Output: 9
            */
            const expected = 9;
            const actual = findKthPositive([2,3,4,7,11],5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,3,4], k = 2
            Output: 6
            */
            const expected = 6;
            const actual = findKthPositive([1,2,3,4],2);
            expect(actual).to.deep.equal(expected);
        });
    });
