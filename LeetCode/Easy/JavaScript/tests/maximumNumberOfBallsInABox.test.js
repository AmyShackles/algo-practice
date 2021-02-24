const { countBalls } = require("../maximumNumberOfBallsInABox.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("countBalls", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: lowLimit = 1, highLimit = 10
            Output: 2
            */
            const expected = 2;
            const actual = countBalls(1,10);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: lowLimit = 5, highLimit = 15
            Output: 2
            */
            const expected = 2;
            const actual = countBalls(5,15);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: lowLimit = 19, highLimit = 28
            Output: 2
            */
            const expected = 2;
            const actual = countBalls(19,28);
            expect(actual).to.deep.equal(expected);
        });
    });
