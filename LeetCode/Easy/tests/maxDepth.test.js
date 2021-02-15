const { maxDepth } = require("../maxDepth.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("maxDepth", () => {
    it("should return the right value for Example 1", () => {
        const expected = 3;
        const actual = maxDepth("(1+(2*3)+((8)/4))+1");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = 3;
        const actual = maxDepth("(1)+((2))+(((3)))");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 1;
        const actual = maxDepth("1+(2*3)/(2-1)");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = 0;
        const actual = maxDepth("1");
        expect(actual).to.deep.equal(expected);
    });
});
