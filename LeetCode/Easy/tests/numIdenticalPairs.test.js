const { numIdenticalPairs } = require("../numIdenticalPairs.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("numIdenticalPairs", () => {
    it("should return the right value for [1,2,3,1,1,3]", () => {
        const expected = 4;
        const actual = numIdenticalPairs([1, 2, 3, 1, 1, 3]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for [1,1,1,1]", () => {
        const expected = 6;
        const actual = numIdenticalPairs([1, 1, 1, 1]);
        expect(actual).to.equal(expected);
    });
    it("should return the right value for [1,2,3]", () => {
        const expected = 0;
        const actual = numIdenticalPairs([1, 2, 3]);
        expect(actual).to.equal(expected);
    });
});
