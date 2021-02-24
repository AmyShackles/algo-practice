const { dominantIndex } = require("../largestNumberAtLeastTwiceOfOthers.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("dominantIndex", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3, 6, 1, 0]
            Output: 1
            */
            const expected = 1;
            const actual = dominantIndex([3, 6, 1, 0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1, 2, 3, 4]
            Output: -1
            */
            const expected = -1;
            const actual = dominantIndex([1, 2, 3, 4]);
            expect(actual).to.deep.equal(expected);
        });
    });
