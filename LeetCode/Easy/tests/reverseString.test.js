const { reverseString } = require("../reverseString.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverseString", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: ["h","e","l","l","o"]
            Output: ["o","l","l","e","h"]
            */
            const expected = ["o","l","l","e","h"];
            const actual = reverseString(["h","e","l","l","o"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: ["H","a","n","n","a","h"]
            Output: ["h","a","n","n","a","H"]
            */
            const expected = ["h","a","n","n","a","H"];
            const actual = reverseString(["H","a","n","n","a","h"]);
            expect(actual).to.deep.equal(expected);
        });
    });
