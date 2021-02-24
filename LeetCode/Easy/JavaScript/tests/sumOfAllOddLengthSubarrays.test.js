const { sumOddLengthSubarrays } = require("../sumOfAllOddLengthSubarrays.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sumOddLengthSubarrays", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [1,4,2,5,3]
            Output: 58
            */
            const expected = 58;
            const actual = sumOddLengthSubarrays([1,4,2,5,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1,2]
            Output: 3
            */
            const expected = 3;
            const actual = sumOddLengthSubarrays([1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [10,11,12]
            Output: 66
            */
            const expected = 66;
            const actual = sumOddLengthSubarrays([10,11,12]);
            expect(actual).to.deep.equal(expected);
        });
    });
