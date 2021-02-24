const { calPoints } = require("../baseballGame.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("calPoints", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: ops = ["5","2","C","D","+"]
            Output: 30
            */
            const expected = 30;
            const actual = calPoints(["5","2","C","D","+"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: ops = ["5","-2","4","C","D","9","+","+"]
            Output: 27
            */
            const expected = 27;
            const actual = calPoints(["5","-2","4","C","D","9","+","+"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: ops = ["1"]
            Output: 1
            */
            const expected = 1;
            const actual = calPoints(["1"]);
            expect(actual).to.deep.equal(expected);
        });
    });
