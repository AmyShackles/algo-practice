const { numberOfMatches } = require("../numberOfMatches.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("numberOfMatches", () => {
    it("should return the right value for Example 1", () => {
        const expected = 6;
        const actual = numberOfMatches(7);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 13;
        const actual = numberOfMatches(14);
        expect(actual).to.deep.equal(expected);
    });
});
