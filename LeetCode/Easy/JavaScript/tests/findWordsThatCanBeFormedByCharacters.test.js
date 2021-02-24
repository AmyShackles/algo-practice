const { countCharacters } = require("../findWordsThatCanBeFormedByCharacters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countCharacters", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: words = ["cat","bt","hat","tree"], chars = "atach"
            Output: 6
            */
            const expected = 6;
            const actual = countCharacters(["cat","bt","hat","tree"],"atach");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
            Output: 10
            */
            const expected = 10;
            const actual = countCharacters(["hello","world","leetcode"],"welldonehoneyr");
            expect(actual).to.deep.equal(expected);
        });
    });
