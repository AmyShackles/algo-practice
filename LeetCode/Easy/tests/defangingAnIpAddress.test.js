const { defangIPaddr } = require("../defangingAnIpAddress.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("defangIPaddr", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: address = "1.1.1.1"
            Output: "1[.]1[.]1[.]1"
            */
            const expected = "1[.]1[.]1[.]1";
            const actual = defangIPaddr("1.1.1.1");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: address = "255.100.50.0"
            Output: "255[.]100[.]50[.]0"
            */
            const expected = "255[.]100[.]50[.]0";
            const actual = defangIPaddr("255.100.50.0");
            expect(actual).to.deep.equal(expected);
        });
    });
