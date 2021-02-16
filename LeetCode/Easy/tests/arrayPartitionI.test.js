const { arrayPairSum } = require("../arrayPartitionI.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("arrayPairSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [1,4,3,2]
            Output: 4
            */
            const expected = 4;
            const actual = arrayPairSum([1,4,3,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [6,2,6,5,1,2]
            Output: 9
            */
            const expected = 9;
            const actual = arrayPairSum([6,2,6,5,1,2]);
            expect(actual).to.deep.equal(expected);
        });
    });
