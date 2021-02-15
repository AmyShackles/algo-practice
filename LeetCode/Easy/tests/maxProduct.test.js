const { maxProduct } = require("../maxProduct.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("maxProduct", () => {
    it("should return the right value for Example 1", () => {
        const expected = 12;
        const actual = maxProduct([3, 4, 5, 2]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 16;
        const actual = maxProduct([1, 5, 4, 5]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 12;
        const actual = maxProduct([3, 7]);
        expect(actual).to.deep.equal(expected);
    });
});
