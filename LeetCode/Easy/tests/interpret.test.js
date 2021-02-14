const { interpret } = require("../interpret.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("interpret", () => {
    it("should return the right value for Example 1", () => {
        const expected = "Goal";
        const actual = interpret("G()(al)");
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "Gooooal";
        const actual = interpret("G()()()()(al)");
        expect(actual).to.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "alGalooG";
        const actual = interpret("(al)G(al)()()G");
        expect(actual).to.equal(expected);
    });
});
