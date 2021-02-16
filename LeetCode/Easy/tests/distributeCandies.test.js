const { distributeCandies } = require("../distributeCandies.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("distributeCandies", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: candyType = [1,1,2,2,3,3]
            Output: 3
            */
            const expected = 3;
            const actual = distributeCandies([1,1,2,2,3,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: candyType = [1,1,2,3]
            Output: 2
            */
            const expected = 2;
            const actual = distributeCandies([1,1,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: candyType = [6,6,6,6]
            Output: 1
            */
            const expected = 1;
            const actual = distributeCandies([6,6,6,6]);
            expect(actual).to.deep.equal(expected);
        });
    });
