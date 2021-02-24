const { thirdMax } = require("../thirdMaximumNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("thirdMax", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,2,1]
            Output: 1
            */
            const expected = 1;
            const actual = thirdMax([3,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2]
            Output: 2
            */
            const expected = 2;
            const actual = thirdMax([1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [2,2,3,1]
            Output: 1
            */
            const expected = 1;
            const actual = thirdMax([2,2,3,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
