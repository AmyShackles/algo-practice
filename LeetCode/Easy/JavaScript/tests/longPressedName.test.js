const { isLongPressedName } = require("../longPressedName.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isLongPressedName", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: name = "alex", typed = "aaleex"
            Output: true
            */
            const expected = true;
            const actual = isLongPressedName("alex","aaleex");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: name = "saeed", typed = "ssaaedd"
            Output: false
            */
            const expected = false;
            const actual = isLongPressedName("saeed","ssaaedd");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: name = "leelee", typed = "lleeelee"
            Output: true
            */
            const expected = true;
            const actual = isLongPressedName("leelee","lleeelee");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: name = "laiden", typed = "laiden"
            Output: true
            */
            const expected = true;
            const actual = isLongPressedName("laiden","laiden");
            expect(actual).to.deep.equal(expected);
        });
    });
