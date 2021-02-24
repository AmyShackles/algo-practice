const { plusOne } = require("../plusOne.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("plusOne", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: digits = [1,2,3]
            Output: [1,2,4]
            */
            const expected = [1,2,4];
            const actual = plusOne([1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: digits = [4,3,2,1]
            Output: [4,3,2,2]
            */
            const expected = [4,3,2,2];
            const actual = plusOne([4,3,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: digits = [0]
            Output: [1]
            */
            const expected = [1];
            const actual = plusOne([0]);
            expect(actual).to.deep.equal(expected);
        });
    });
