const { generateTheString } = require("../generateTheString.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("generateTheString", () => {
    it("should return the right value for Example 1", () => {
        const expected = "pppz";
        const actual = generateTheString(4);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "xy";
        const actual = generateTheString(2);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "holasss";
        const actual = generateTheString(7);
        expect(actual).to.deep.equal(expected);
    });
});
