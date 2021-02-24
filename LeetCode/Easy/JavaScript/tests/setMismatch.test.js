const { findErrorNums } = require("../setMismatch.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findErrorNums", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,2,4]
            Output: [2,3]
            */
            const expected = [2,3];
            const actual = findErrorNums([1,2,2,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,1]
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = findErrorNums([1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
