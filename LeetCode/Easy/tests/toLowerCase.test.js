const { toLowerCase } = require("../toLowerCase.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("toLowerCase", () => {
    it("should return the right value for Example 1", () => {
        const expected = "hello";
        const actual = toLowerCase("Hello");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "here";
        const actual = toLowerCase("here");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "lovely";
        const actual = toLowerCase("LOVELY");
        expect(actual).to.deep.equal(expected);
    });
});
