const { uniqueMorseRepresentations } = require("../uniqueMorseCodeWords.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("uniqueMorseRepresentations", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: words = ["gin", "zen", "gig", "msg"]
            Output: 2
            */
            const expected = 2;
            const actual = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
            expect(actual).to.deep.equal(expected);
        });
    });
