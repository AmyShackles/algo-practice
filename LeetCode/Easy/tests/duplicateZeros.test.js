const { duplicateZeros } = require("../duplicateZeros.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("duplicateZeros", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [1,0,2,3,0,4,5,0]
            Output: null
            */
            const expected = null;
            const actual = duplicateZeros([1,0,2,3,0,4,5,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [1,2,3]
            Output: null
            */
            const expected = null;
            const actual = duplicateZeros([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
