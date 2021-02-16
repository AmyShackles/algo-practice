const { sumOfUnique } = require("../sumOfUniqueElements.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sumOfUnique", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,2]
            Output: 4
            */
            const expected = 4;
            const actual = sumOfUnique([1,2,3,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,1,1,1]
            Output: 0
            */
            const expected = 0;
            const actual = sumOfUnique([1,1,1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4,5]
            Output: 15
            */
            const expected = 15;
            const actual = sumOfUnique([1,2,3,4,5]);
            expect(actual).to.deep.equal(expected);
        });
    });
