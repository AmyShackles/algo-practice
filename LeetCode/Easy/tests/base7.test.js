const { convertToBase7 } = require("../base7.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("convertToBase7", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: 100
            Output: "202"
            */
            const expected = "202";
            const actual = convertToBase7(100);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: -7
            Output: "-10"
            */
            const expected = "-10";
            const actual = convertToBase7(-7);
            expect(actual).to.deep.equal(expected);
        });
    });
