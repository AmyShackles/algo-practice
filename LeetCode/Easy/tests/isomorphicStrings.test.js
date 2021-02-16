const { isIsomorphic } = require("../isomorphicStrings.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isIsomorphic", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "egg", t = "add"
            Output: true
            */
            const expected = true;
            const actual = isIsomorphic("egg","add");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "foo", t = "bar"
            Output: false
            */
            const expected = false;
            const actual = isIsomorphic("foo","bar");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "paper", t = "title"
            Output: true
            */
            const expected = true;
            const actual = isIsomorphic("paper","title");
            expect(actual).to.deep.equal(expected);
        });
    });
