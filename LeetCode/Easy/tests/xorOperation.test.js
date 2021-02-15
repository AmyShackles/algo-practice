const { xorOperation } = require("../xorOperation.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("xorOperation", () => {
    it("should return the right value for Example 1", () => {
        const expected = 8;
        const actual = xorOperation(5, 0);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 8;
        const actual = xorOperation(4, 3);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 7;
        const actual = xorOperation(1, 7);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 2;
        const actual = xorOperation(10, 5);
        expect(actual).to.deep.equal(expected);
    });
});
