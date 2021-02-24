const { solution } = require("../firstBadVersion.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("solution", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 5, bad = 4
            Output: 4
            */
            const expected = 4;
            const actual = solution(5,4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 1, bad = 1
            Output: 1
            */
            const expected = 1;
            const actual = solution(1,1);
            expect(actual).to.deep.equal(expected);
        });
    });
