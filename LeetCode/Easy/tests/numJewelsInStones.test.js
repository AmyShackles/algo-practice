const { numJewelsInStones } = require("../numJewelsInStones.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("numJewelsInStones", () => {
    it("should return the right number of aA jewels in aAAbbbb", () => {
        const expected = 3;
        const actual = numJewelsInStones("aA", "aAAbbbb");
        expect(actual).to.equal(expected);
    });
    it("should return the right number of z stones in ZZ", () => {
        const expected = 0;
        const actual = numJewelsInStones("z", "ZZ");
        expect(actual).to.equal(expected);
    });
});
