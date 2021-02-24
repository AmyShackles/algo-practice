const { frequencySort } = require("../sortArrayByIncreasingFrequency.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("frequencySort", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,2,2,2,3]
            Output: [3,1,1,2,2,2]
            */
            const expected = [3,1,1,2,2,2];
            const actual = frequencySort([1,1,2,2,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [2,3,1,3,2]
            Output: [1,3,3,2,2]
            */
            const expected = [1,3,3,2,2];
            const actual = frequencySort([2,3,1,3,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
