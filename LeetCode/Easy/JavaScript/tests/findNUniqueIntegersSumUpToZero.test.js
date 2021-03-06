const { sumZero } = require("../findNUniqueIntegersSumUpToZero.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sumZero", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 5
            Output: [-7,-1,1,3,4]
            */
            const expected = [-7,-1,1,3,4];
            const actual = sumZero(5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 3
            Output: [-1,0,1]
            */
            const expected = [-1,0,1];
            const actual = sumZero(3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 1
            Output: [0]
            */
            const expected = [0];
            const actual = sumZero(1);
            expect(actual).to.deep.equal(expected);
        });
    });
