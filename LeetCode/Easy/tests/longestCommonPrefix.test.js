const { longestCommonPrefix } = require("../longestCommonPrefix.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("longestCommonPrefix", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: strs = ["flower","flow","flight"]
            Output: "fl"
            */
            const expected = "fl";
            const actual = longestCommonPrefix(["flower","flow","flight"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: strs = ["dog","racecar","car"]
            Output: ""
            */
            const expected = "";
            const actual = longestCommonPrefix(["dog","racecar","car"]);
            expect(actual).to.deep.equal(expected);
        });
    });
