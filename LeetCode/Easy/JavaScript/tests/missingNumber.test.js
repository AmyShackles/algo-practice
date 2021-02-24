const { missingNumber } = require("../missingNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("missingNumber", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,0,1]
            Output: 2
            */
            const expected = 2;
            const actual = missingNumber([3,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [0,1]
            Output: 2
            */
            const expected = 2;
            const actual = missingNumber([0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [9,6,4,2,3,5,7,0,1]
            Output: 8
            */
            const expected = 8;
            const actual = missingNumber([9,6,4,2,3,5,7,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [0]
            Output: 1
            */
            const expected = 1;
            const actual = missingNumber([0]);
            expect(actual).to.deep.equal(expected);
        });
    });
