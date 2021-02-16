const { check } = require("../checkIfArrayIsSortedAndRotated.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("check", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,4,5,1,2]
            Output: true
            */
            const expected = true;
            const actual = check([3,4,5,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [2,1,3,4]
            Output: false
            */
            const expected = false;
            const actual = check([2,1,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3]
            Output: true
            */
            const expected = true;
            const actual = check([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,1]
            Output: true
            */
            const expected = true;
            const actual = check([1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: nums = [2,1]
            Output: true
            */
            const expected = true;
            const actual = check([2,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
