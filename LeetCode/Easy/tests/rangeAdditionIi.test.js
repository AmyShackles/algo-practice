const { maxCount } = require("../rangeAdditionIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxCount", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: m = 3, n = 3, ops = [[2,2],[3,3]]
            Output: 4
            */
            const expected = 4;
            const actual = maxCount(3,3,[[2,2],[3,3]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
            Output: 4
            */
            const expected = 4;
            const actual = maxCount(3,3,[[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: m = 3, n = 3, ops = []
            Output: 9
            */
            const expected = 9;
            const actual = maxCount(3,3,[]);
            expect(actual).to.deep.equal(expected);
        });
    });
