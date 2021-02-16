const { findSpecialInteger } = require("../elementAppearingMoreThan25InSortedArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findSpecialInteger", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,2,6,6,6,6,7,10]
            Output: 6
            */
            const expected = 6;
            const actual = findSpecialInteger([1,2,2,6,6,6,6,7,10]);
            expect(actual).to.deep.equal(expected);
        });
    });
