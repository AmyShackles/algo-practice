const { freqAlphabets } = require("../decryptStringFromAlphabetToIntegerMapping.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("freqAlphabets", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "10#11#12"
            Output: "jkab"
            */
            const expected = "jkab";
            const actual = freqAlphabets("10#11#12");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "1326#"
            Output: "acz"
            */
            const expected = "acz";
            const actual = freqAlphabets("1326#");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "25#"
            Output: "y"
            */
            const expected = "y";
            const actual = freqAlphabets("25#");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
            Output: "abcdefghijklmnopqrstuvwxyz"
            */
            const expected = "abcdefghijklmnopqrstuvwxyz";
            const actual = freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#");
            expect(actual).to.deep.equal(expected);
        });
    });
