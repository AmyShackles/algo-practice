const { interpret } = require("../goalParserInterpretation.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe("interpret", () => {
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: command = "G()(al)"
            Output: "Goal"
            */
        const expected = "Goal";
        const actual = interpret("G()(al)");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: command = "G()()()()(al)"
            Output: "Gooooal"
            */
        const expected = "Gooooal";
        const actual = interpret("G()()()()(al)");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        /*
            For sanity checking:
            Input: command = "(al)G(al)()()G"
            Output: "alGalooG"
            */
        const expected = "alGalooG";
        const actual = interpret("(al)G(al)()()G");
        expect(actual).to.deep.equal(expected);
    });
});
