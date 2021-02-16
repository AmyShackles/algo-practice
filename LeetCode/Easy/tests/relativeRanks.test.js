const { findRelativeRanks } = require("../relativeRanks.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findRelativeRanks", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: score = [5,4,3,2,1]
            Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
            */
            const expected = ["Gold Medal","Silver Medal","Bronze Medal","4","5"];
            const actual = findRelativeRanks([5,4,3,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: score = [10,3,8,9,4]
            Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
            */
            const expected = ["Gold Medal","5","Bronze Medal","Silver Medal","4"];
            const actual = findRelativeRanks([10,3,8,9,4]);
            expect(actual).to.deep.equal(expected);
        });
    });
