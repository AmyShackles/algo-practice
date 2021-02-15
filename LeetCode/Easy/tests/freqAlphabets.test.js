const { freqAlphabets } = require("../freqAlphabets.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("freqAlphabets", () => {
    it("should return the right value for Example 1", () => {
        const expected = "jkab";
        const actual = freqAlphabets("10#11#12");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = "acz";
        const actual = freqAlphabets("1326#");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "y";
        const actual = freqAlphabets("25#");
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = "abcdefghijklmnopqrstuvwxyz";
        const actual = freqAlphabets(
            "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
        );
        expect(actual).to.deep.equal(expected);
    });
});
