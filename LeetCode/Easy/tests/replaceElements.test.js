const { replaceElements } = require("../replaceElements.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("replaceElements", () => {
    it("should return the right value for Example 1", () => {
        const expected = [18, 6, 6, 6, 1, -1];
        const actual = replaceElements([17, 18, 5, 4, 6, 1]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = [-1];
        const actual = replaceElements([400]);
        expect(actual).to.deep.equal(expected);
    });
});
