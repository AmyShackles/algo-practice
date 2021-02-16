const { reformat } = require("../reformatTheString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reformat", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "a0b1c2"
            Output: "0a1b2c"
            */
            const expected = "0a1b2c";
            const actual = reformat("a0b1c2");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "leetcode"
            Output: ""
            */
            const expected = "";
            const actual = reformat("leetcode");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "1229857369"
            Output: ""
            */
            const expected = "";
            const actual = reformat("1229857369");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "covid2019"
            Output: "c2o0v1i9d"
            */
            const expected = "c2o0v1i9d";
            const actual = reformat("covid2019");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: s = "ab123"
            Output: "1a2b3"
            */
            const expected = "1a2b3";
            const actual = reformat("ab123");
            expect(actual).to.deep.equal(expected);
        });
    });
