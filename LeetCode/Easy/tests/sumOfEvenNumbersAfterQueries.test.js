const { sumEvenAfterQueries } = require("../sumOfEvenNumbersAfterQueries.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sumEvenAfterQueries", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
            Output: [8,6,2,4]
            */
            const expected = [8,6,2,4];
            const actual = sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]);
            expect(actual).to.deep.equal(expected);
        });
    });
