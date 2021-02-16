const { canFormArray } = require("../checkArrayFormationThroughConcatenation.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("canFormArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [85], pieces = [[85]]
            Output: true
            */
            const expected = true;
            const actual = canFormArray([85],[[85]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [15,88], pieces = [[88],[15]]
            Output: true
            */
            const expected = true;
            const actual = canFormArray([15,88],[[88],[15]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [49,18,16], pieces = [[16,18,49]]
            Output: false
            */
            const expected = false;
            const actual = canFormArray([49,18,16],[[16,18,49]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
            Output: true
            */
            const expected = true;
            const actual = canFormArray([91,4,64,78],[[78],[4,64],[91]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
            Output: false
            */
            const expected = false;
            const actual = canFormArray([1,3,5,7],[[2,4,6,8]]);
            expect(actual).to.deep.equal(expected);
        });
    });
