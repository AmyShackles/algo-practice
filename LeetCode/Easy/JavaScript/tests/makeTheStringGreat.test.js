const { makeGood } = require("../makeTheStringGreat.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("makeGood", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "leEeetcode"
            Output: "leetcode"
            */
            const expected = "leetcode";
            const actual = makeGood("leEeetcode");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "abBAcC"
            Output: ""
            */
            const expected = "";
            const actual = makeGood("abBAcC");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "s"
            Output: "s"
            */
            const expected = "s";
            const actual = makeGood("s");
            expect(actual).to.deep.equal(expected);
        });
    });
