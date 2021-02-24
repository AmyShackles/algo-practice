const { shortestToChar } = require("../shortestDistanceToACharacter.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("shortestToChar", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "loveleetcode", c = "e"
            Output: [3,2,1,0,1,0,0,1,2,2,1,0]
            */
            const expected = [3,2,1,0,1,0,0,1,2,2,1,0];
            const actual = shortestToChar("loveleetcode","e");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "aaab", c = "b"
            Output: [3,2,1,0]
            */
            const expected = [3,2,1,0];
            const actual = shortestToChar("aaab","b");
            expect(actual).to.deep.equal(expected);
        });
    });
