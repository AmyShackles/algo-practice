const { countBalls } = require("../countBalls.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("countBalls", () => {
    it("should return the right value for Example 1", () => {
        const expected = 2;
        const actual = countBalls((lowLimit = 1), (highLimit = 10));
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 2;
        const actual = countBalls(5, 15);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 2;
        const actual = countBalls(19, 28);
        expect(actual).to.deep.equal(expected);
    });
});
