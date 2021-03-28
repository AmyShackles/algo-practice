const { numIdenticalPairs } = require("../numberOfGoodPairs.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe("numIdenticalPairs", () => {
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: nums = [1,2,3,1,1,3]
            Output: 4
            */
        const expected = 4;
        const actual = numIdenticalPairs([1, 2, 3, 1, 1, 3]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: nums = [1,1,1,1]
            Output: 6
            */
        const expected = 6;
        const actual = numIdenticalPairs([1, 1, 1, 1]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        /*
            For sanity checking:
            Input: nums = [1,2,3]
            Output: 0
            */
        const expected = 0;
        const actual = numIdenticalPairs([1, 2, 3]);
        expect(actual).to.deep.equal(expected);
    });
});
