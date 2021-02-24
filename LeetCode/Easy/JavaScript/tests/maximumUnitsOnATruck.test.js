const { maximumUnits } = require("../maximumUnitsOnATruck.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maximumUnits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
            Output: 8
            */
            const expected = 8;
            const actual = maximumUnits([[1,3],[2,2],[3,1]],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
            Output: 91
            */
            const expected = 91;
            const actual = maximumUnits([[5,10],[2,5],[4,7],[3,9]],10);
            expect(actual).to.deep.equal(expected);
        });
    });
