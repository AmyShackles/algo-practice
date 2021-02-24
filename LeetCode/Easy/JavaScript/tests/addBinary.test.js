const { addBinary } = require("../addBinary.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("addBinary", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: a = "11", b = "1"
            Output: "100"
            */
            const expected = "100";
            const actual = addBinary("11","1");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: a = "1010", b = "1011"
            Output: "10101"
            */
            const expected = "10101";
            const actual = addBinary("1010","1011");
            expect(actual).to.deep.equal(expected);
        });
    });
