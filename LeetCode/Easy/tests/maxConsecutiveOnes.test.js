const { findMaxConsecutiveOnes } = require("../maxConsecutiveOnes.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findMaxConsecutiveOnes", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [1,1,0,1,1,1]
            Output: 3
            */
            const expected = 3;
            const actual = findMaxConsecutiveOnes([1,1,0,1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
