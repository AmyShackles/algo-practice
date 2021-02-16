const { findComplement } = require("../numberComplement.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findComplement", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: num = 5
            Output: 2
            */
            const expected = 2;
            const actual = findComplement(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: num = 1
            Output: 0
            */
            const expected = 0;
            const actual = findComplement(1);
            expect(actual).to.deep.equal(expected);
        });
    });
