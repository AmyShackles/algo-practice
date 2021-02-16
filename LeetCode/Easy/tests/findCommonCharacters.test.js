const { commonChars } = require("../findCommonCharacters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("commonChars", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: ["bella","label","roller"]
            Output: ["e","l","l"]
            */
            const expected = ["e","l","l"];
            const actual = commonChars(["bella","label","roller"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: ["cool","lock","cook"]
            Output: ["c","o"]
            */
            const expected = ["c","o"];
            const actual = commonChars(["cool","lock","cook"]);
            expect(actual).to.deep.equal(expected);
        });
    });
