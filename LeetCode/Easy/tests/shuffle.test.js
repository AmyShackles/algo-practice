const { shuffle } = require("../shuffle.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("shuffle", () => {
    it("should return the correct array if n is 2", () => {
        const expected = [1, 2, 1, 2];
        const actual = shuffle([1, 1, 2, 2], 2);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the correct array if n is 3", () => {
        const expected = [2, 3, 5, 4, 1, 7];
        const actual = shuffle([2, 5, 1, 3, 4, 7], 3);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the correct array if n is 4", () => {
        const expected = [1, 4, 2, 3, 3, 2, 4, 1];
        const actual = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
        expect(actual).to.deep.equal(expected);
    });
});
