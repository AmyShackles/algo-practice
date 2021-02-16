const { findLucky } = require("../findLuckyIntegerInAnArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findLucky", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [2,2,3,4]
            Output: 2
            */
            const expected = 2;
            const actual = findLucky([2,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,2,3,3,3]
            Output: 3
            */
            const expected = 3;
            const actual = findLucky([1,2,2,3,3,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [2,2,2,3,3]
            Output: -1
            */
            const expected = -1;
            const actual = findLucky([2,2,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: arr = [5]
            Output: -1
            */
            const expected = -1;
            const actual = findLucky([5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: arr = [7,7,7,7,7,7,7]
            Output: 7
            */
            const expected = 7;
            const actual = findLucky([7,7,7,7,7,7,7]);
            expect(actual).to.deep.equal(expected);
        });
    });
