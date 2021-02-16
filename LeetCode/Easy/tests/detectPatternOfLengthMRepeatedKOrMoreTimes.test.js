const { containsPattern } = require("../detectPatternOfLengthMRepeatedKOrMoreTimes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("containsPattern", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,4,4,4,4], m = 1, k = 3
            Output: true
            */
            const expected = true;
            const actual = containsPattern([1,2,4,4,4,4],1,3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
            Output: true
            */
            const expected = true;
            const actual = containsPattern([1,2,1,2,1,1,1,3],2,2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,1,2,1,3], m = 2, k = 3
            Output: false
            */
            const expected = false;
            const actual = containsPattern([1,2,1,2,1,3],2,3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,3,1,2], m = 2, k = 2
            Output: false
            */
            const expected = false;
            const actual = containsPattern([1,2,3,1,2],2,2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: arr = [2,2,2,2], m = 2, k = 3
            Output: false
            */
            const expected = false;
            const actual = containsPattern([2,2,2,2],2,3);
            expect(actual).to.deep.equal(expected);
        });
    });
