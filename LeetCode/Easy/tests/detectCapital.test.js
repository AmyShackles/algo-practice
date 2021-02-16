const { detectCapitalUse } = require("../detectCapital.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("detectCapitalUse", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "USA"
            Output: True
            */
            const expected = True;
            const actual = detectCapitalUse("USA");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "FlaG"
            Output: False
            */
            const expected = False;
            const actual = detectCapitalUse("FlaG");
            expect(actual).to.deep.equal(expected);
        });
    });
