const { validMountainArray } = require("../validMountainArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("validMountainArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [2,1]
            Output: false
            */
            const expected = false;
            const actual = validMountainArray([2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [3,5,5]
            Output: false
            */
            const expected = false;
            const actual = validMountainArray([3,5,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [0,3,2,1]
            Output: true
            */
            const expected = true;
            const actual = validMountainArray([0,3,2,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
