const { maxNumberOfBalloons } = require("../maximumNumberOfBalloons.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maxNumberOfBalloons", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: text = "nlaebolko"
            Output: 1
            */
            const expected = 1;
            const actual = maxNumberOfBalloons("nlaebolko");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: text = "loonbalxballpoon"
            Output: 2
            */
            const expected = 2;
            const actual = maxNumberOfBalloons("loonbalxballpoon");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: text = "leetcode"
            Output: 0
            */
            const expected = 0;
            const actual = maxNumberOfBalloons("leetcode");
            expect(actual).to.deep.equal(expected);
        });
    });
