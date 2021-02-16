const { restoreString } = require("../shuffleString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("restoreString", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
            Output: "leetcode"
            */
            const expected = "leetcode";
            const actual = restoreString("codeleet",[4,5,6,7,0,2,1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "abc", indices = [0,1,2]
            Output: "abc"
            */
            const expected = "abc";
            const actual = restoreString("abc",[0,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "aiohn", indices = [3,1,4,2,0]
            Output: "nihao"
            */
            const expected = "nihao";
            const actual = restoreString("aiohn",[3,1,4,2,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
            Output: "arigatou"
            */
            const expected = "arigatou";
            const actual = restoreString("aaiougrt",[4,0,2,6,7,3,1,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: s = "art", indices = [1,0,2]
            Output: "rat"
            */
            const expected = "rat";
            const actual = restoreString("art",[1,0,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
