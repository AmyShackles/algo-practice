const { findNumbers } = require("../findNumbers.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("findNumbers", () => {
    it("should return the right value for Example 1", () => {
        const expected = 2;
        const actual = findNumbers([12, 345, 2, 6, 7896]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 1;
        const actual = findNumbers([555, 901, 482, 1771]);
        expect(actual).to.deep.equal(expected);
    });
});
