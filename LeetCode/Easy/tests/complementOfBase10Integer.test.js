const { bitwiseComplement } = require("../complementOfBase10Integer.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("bitwiseComplement", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 5
            Output: 2
            */
            const expected = 2;
            const actual = bitwiseComplement(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: 7
            Output: 0
            */
            const expected = 0;
            const actual = bitwiseComplement(7);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: 10
            Output: 5
            */
            const expected = 5;
            const actual = bitwiseComplement(10);
            expect(actual).to.deep.equal(expected);
        });
    });
