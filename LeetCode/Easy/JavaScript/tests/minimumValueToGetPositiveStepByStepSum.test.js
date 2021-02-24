const { minStartValue } = require("../minimumValueToGetPositiveStepByStepSum.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minStartValue", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [-3,2,-3,4,2]
            Output: 5
            */
            const expected = 5;
            const actual = minStartValue([-3,2,-3,4,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2]
            Output: 1
            */
            const expected = 1;
            const actual = minStartValue([1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,-2,-3]
            Output: 5
            */
            const expected = 5;
            const actual = minStartValue([1,-2,-3]);
            expect(actual).to.deep.equal(expected);
        });
    });
