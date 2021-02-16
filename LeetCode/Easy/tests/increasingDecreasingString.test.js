const { sortString } = require("../increasingDecreasingString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sortString", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "aaaabbbbcccc"
            Output: "abccbaabccba"
            */
            const expected = "abccbaabccba";
            const actual = sortString("aaaabbbbcccc");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "rat"
            Output: "art"
            */
            const expected = "art";
            const actual = sortString("rat");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "leetcode"
            Output: "cdelotee"
            */
            const expected = "cdelotee";
            const actual = sortString("leetcode");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "ggggggg"
            Output: "ggggggg"
            */
            const expected = "ggggggg";
            const actual = sortString("ggggggg");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: s = "spo"
            Output: "ops"
            */
            const expected = "ops";
            const actual = sortString("spo");
            expect(actual).to.deep.equal(expected);
        });
    });
