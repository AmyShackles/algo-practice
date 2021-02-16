const { isPathCrossing } = require("../pathCrossing.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isPathCrossing", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: path = "NES"
            Output: false 
            */
            const expected = false ;
            const actual = isPathCrossing("NES");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: path = "NESWW"
            Output: true
            */
            const expected = true;
            const actual = isPathCrossing("NESWW");
            expect(actual).to.deep.equal(expected);
        });
    });
