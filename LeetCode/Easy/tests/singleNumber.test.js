const { singleNumber } = require("../singleNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("singleNumber", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [2,2,1]
            Output: 1
            */
            const expected = 1;
            const actual = singleNumber([2,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [4,1,2,1,2]
            Output: 4
            */
            const expected = 4;
            const actual = singleNumber([4,1,2,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1]
            Output: 1
            */
            const expected = 1;
            const actual = singleNumber([1]);
            expect(actual).to.deep.equal(expected);
        });
    });
