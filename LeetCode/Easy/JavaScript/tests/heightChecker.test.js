const { heightChecker } = require("../heightChecker.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("heightChecker", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: heights = [1,1,4,2,1,3]
            Output: 3
            */
            const expected = 3;
            const actual = heightChecker([1,1,4,2,1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: heights = [5,1,2,3,4]
            Output: 5
            */
            const expected = 5;
            const actual = heightChecker([5,1,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: heights = [1,2,3,4,5]
            Output: 0
            */
            const expected = 0;
            const actual = heightChecker([1,2,3,4,5]);
            expect(actual).to.deep.equal(expected);
        });
    });
