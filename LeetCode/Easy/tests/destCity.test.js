const { destCity } = require("../destCity.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("destCity", () => {
    it("should return the right value for Example 1", () => {
        const expected = "Sao Paulo";
        const actual = destCity([
            ["London", "New York"],
            ["New York", "Lima"],
            ["Lima", "Sao Paulo"],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "A";
        const actual = destCity([
            ["B", "C"],
            ["D", "B"],
            ["C", "A"],
        ]);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "Z";
        const actual = destCity([["A", "Z"]]);
        expect(actual).to.deep.equal(expected);
    });
});
