const { canMakeArithmeticProgression } = require("../canMakeArithmeticProgressionFromSequence.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canMakeArithmeticProgression", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [3,5,1]
            Output: true
            */
            const expected = true;
            const actual = canMakeArithmeticProgression([3,5,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2,4]
            Output: false
            */
            const expected = false;
            const actual = canMakeArithmeticProgression([1,2,4]);
            expect(actual).to.deep.equal(expected);
        });
    });
