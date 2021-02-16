const { minimumAbsDifference } = require("../minimumAbsoluteDifference.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("minimumAbsDifference", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [4,2,1,3]
            Output: [[1,2],[2,3],[3,4]]
            */
            const expected = [[1,2],[2,3],[3,4]];
            const actual = minimumAbsDifference([4,2,1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,3,6,10,15]
            Output: [[1,3]]
            */
            const expected = [[1,3]];
            const actual = minimumAbsDifference([1,3,6,10,15]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [3,8,-10,23,19,-4,-14,27]
            Output: [[-14,-10],[19,23],[23,27]]
            */
            const expected = [[-14,-10],[19,23],[23,27]];
            const actual = minimumAbsDifference([3,8,-10,23,19,-4,-14,27]);
            expect(actual).to.deep.equal(expected);
        });
    });
