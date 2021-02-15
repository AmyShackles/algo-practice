const { halvesAreAlike } = require("../halvesAreAlike.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("halvesAreAlike", () => {
    it("should return the right value for Example 1", () => {
        const expected = true;
        const actual = halvesAreAlike("book");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = false;
        const actual = halvesAreAlike("textbook");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = false;
        const actual = halvesAreAlike("MerryChristmas");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = true;
        const actual = halvesAreAlike("AbCdEfGh");
        expect(actual).to.deep.equal(expected);
    });
});
