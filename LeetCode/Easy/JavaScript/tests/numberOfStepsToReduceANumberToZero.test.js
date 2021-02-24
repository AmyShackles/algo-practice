const { numberOfSteps } = require("../numberOfStepsToReduceANumberToZero.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("numberOfSteps", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: num = 14
            Output: 6
            */
            const expected = 6;
            const actual = numberOfSteps(14);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: num = 8
            Output: 4
            */
            const expected = 4;
            const actual = numberOfSteps(8);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: num = 123
            Output: 12
            */
            const expected = 12;
            const actual = numberOfSteps(123);
            expect(actual).to.deep.equal(expected);
        });
    });
