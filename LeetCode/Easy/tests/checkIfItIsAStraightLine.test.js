const { checkStraightLine } = require("../checkIfItIsAStraightLine.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("checkStraightLine", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
            Output: true
            */
            const expected = true;
            const actual = checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
            Output: false
            */
            const expected = false;
            const actual = checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]);
            expect(actual).to.deep.equal(expected);
        });
    });
