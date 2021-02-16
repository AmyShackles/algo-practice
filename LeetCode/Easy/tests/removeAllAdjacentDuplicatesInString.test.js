const { removeDuplicates } = require("../removeAllAdjacentDuplicatesInString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("removeDuplicates", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "abbaca"
            Output: "ca"
            */
            const expected = "ca";
            const actual = removeDuplicates("abbaca");
            expect(actual).to.deep.equal(expected);
        });
    });
