const { repeatedNTimes } = require("../repeatedNTimes.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("repeatedNTimes", () => {
    it("should return the right value for Example 1", () => {
        const expected = 3;
        const actual = repeatedNTimes([1, 2, 3, 3]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 2;
        const actual = repeatedNTimes([2, 1, 2, 5, 3, 2]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 5;
        const actual = repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]);
        expect(actual).to.deep.equal(expected);
    });
});
