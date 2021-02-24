const { diStringMatch } = require("../diStringMatch.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("diStringMatch", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "IDID"
            Output: [0,4,1,3,2]
            */
            const expected = [0,4,1,3,2];
            const actual = diStringMatch("IDID");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "III"
            Output: [0,1,2,3]
            */
            const expected = [0,1,2,3];
            const actual = diStringMatch("III");
            expect(actual).to.deep.equal(expected);
        });
    });
