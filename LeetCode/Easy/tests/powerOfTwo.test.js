const { isPowerOfTwo } = require("../powerOfTwo.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPowerOfTwo", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 1
            Output: true
            */
            const expected = true;
            const actual = isPowerOfTwo(1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 16
            Output: true
            */
            const expected = true;
            const actual = isPowerOfTwo(16);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 3
            Output: false
            */
            const expected = false;
            const actual = isPowerOfTwo(3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: n = 4
            Output: true
            */
            const expected = true;
            const actual = isPowerOfTwo(4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: n = 5
            Output: false
            */
            const expected = false;
            const actual = isPowerOfTwo(5);
            expect(actual).to.deep.equal(expected);
        });
    });
