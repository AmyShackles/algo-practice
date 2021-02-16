const { largeGroupPositions } = require("../positionsOfLargeGroups.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("largeGroupPositions", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "abbxxxxzzy"
            Output: [[3,6]]
            */
            const expected = [[3,6]];
            const actual = largeGroupPositions("abbxxxxzzy");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "abc"
            Output: []
            */
            const expected = [];
            const actual = largeGroupPositions("abc");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "abcdddeeeeaabbbcd"
            Output: [[3,5],[6,9],[12,14]]
            */
            const expected = [[3,5],[6,9],[12,14]];
            const actual = largeGroupPositions("abcdddeeeeaabbbcd");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "aba"
            Output: []
            */
            const expected = [];
            const actual = largeGroupPositions("aba");
            expect(actual).to.deep.equal(expected);
        });
    });
