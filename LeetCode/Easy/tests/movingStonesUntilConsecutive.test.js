const { numMovesStones } = require("../movingStonesUntilConsecutive.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numMovesStones", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: a = 1, b = 2, c = 5
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = numMovesStones(1,2,5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: a = 4, b = 3, c = 2
            Output: [0,0]
            */
            const expected = [0,0];
            const actual = numMovesStones(4,3,2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: a = 3, b = 5, c = 1
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = numMovesStones(3,5,1);
            expect(actual).to.deep.equal(expected);
        });
    });
