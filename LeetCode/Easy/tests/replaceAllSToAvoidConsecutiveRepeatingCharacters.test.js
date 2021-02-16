const { modifyString } = require("../replaceAllSToAvoidConsecutiveRepeatingCharacters.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("modifyString", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: s = "?zs"
            Output: "azs"
            */
            const expected = "azs";
            const actual = modifyString("?zs");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: s = "ubv?w"
            Output: "ubvaw"
            */
            const expected = "ubvaw";
            const actual = modifyString("ubv?w");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: s = "j?qg??b"
            Output: "jaqgacb"
            */
            const expected = "jaqgacb";
            const actual = modifyString("j?qg??b");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: s = "??yw?ipkj?"
            Output: "acywaipkja"
            */
            const expected = "acywaipkja";
            const actual = modifyString("??yw?ipkj?");
            expect(actual).to.deep.equal(expected);
        });
    });
