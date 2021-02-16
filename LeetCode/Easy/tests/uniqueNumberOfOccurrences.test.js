const { uniqueOccurrences } = require("../uniqueNumberOfOccurrences.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("uniqueOccurrences", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,2,1,1,3]
            Output: true
            */
            const expected = true;
            const actual = uniqueOccurrences([1,2,2,1,1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2]
            Output: false
            */
            const expected = false;
            const actual = uniqueOccurrences([1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
            Output: true
            */
            const expected = true;
            const actual = uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]);
            expect(actual).to.deep.equal(expected);
        });
    });
