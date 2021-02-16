const { findContentChildren } = require("../assignCookies.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findContentChildren", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: g = [1,2,3], s = [1,1]
            Output: 1
            */
            const expected = 1;
            const actual = findContentChildren([1,2,3],[1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: g = [1,2], s = [1,2,3]
            Output: 2
            */
            const expected = 2;
            const actual = findContentChildren([1,2],[1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
