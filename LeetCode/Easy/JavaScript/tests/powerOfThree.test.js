const { isPowerOfThree } = require("../powerOfThree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPowerOfThree", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 27
            Output: true
            */
            const expected = true;
            const actual = isPowerOfThree(27);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 0
            Output: false
            */
            const expected = false;
            const actual = isPowerOfThree(0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 9
            Output: true
            */
            const expected = true;
            const actual = isPowerOfThree(9);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 45
            Output: false
            */
            const expected = false;
            const actual = isPowerOfThree(45);
            expect(actual).to.deep.equal(expected);
        });
    });
