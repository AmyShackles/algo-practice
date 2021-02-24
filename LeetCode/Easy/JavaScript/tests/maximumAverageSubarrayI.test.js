const { findMaxAverage } = require("../maximumAverageSubarrayI.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findMaxAverage", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [1,12,-5,-6,50,3], k = 4
            Output: 12.75
            */
            const expected = 12.75;
            const actual = findMaxAverage([1,12,-5,-6,50,3],4);
            expect(actual).to.deep.equal(expected);
        });
    });
