const { canThreePartsEqualSum } = require("../partitionArrayIntoThreePartsWithEqualSum.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canThreePartsEqualSum", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
            Output: true
            */
            const expected = true;
            const actual = canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
            Output: false
            */
            const expected = false;
            const actual = canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
            Output: true
            */
            const expected = true;
            const actual = canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]);
            expect(actual).to.deep.equal(expected);
        });
    });
