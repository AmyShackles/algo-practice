const { sumOddLengthSubarrays } = require("../sumOddLengthSubarrays.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("sumOddLengthSubarrays", () => {
    it("should return the right value for Example 1", () => {
        const expected = 58;
        const actual = sumOddLengthSubarrays([1, 4, 2, 5, 3]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 3;
        const actual = sumOddLengthSubarrays([1, 2]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 66;
        const actual = sumOddLengthSubarrays([10, 11, 12]);
        expect(actual).to.deep.equal(expected);
    });
});
