const { canBeEqual } = require("../makeTwoArraysEqualByReversingSubArrays.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canBeEqual", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: target = [1,2,3,4], arr = [2,4,1,3]
            Output: true
            */
            const expected = true;
            const actual = canBeEqual([1,2,3,4],[2,4,1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: target = [7], arr = [7]
            Output: true
            */
            const expected = true;
            const actual = canBeEqual([7],[7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: target = [1,12], arr = [12,1]
            Output: true
            */
            const expected = true;
            const actual = canBeEqual([1,12],[12,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: target = [3,7,9], arr = [3,7,11]
            Output: false
            */
            const expected = false;
            const actual = canBeEqual([3,7,9],[3,7,11]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
            Output: true
            */
            const expected = true;
            const actual = canBeEqual([1,1,1,1,1],[1,1,1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
