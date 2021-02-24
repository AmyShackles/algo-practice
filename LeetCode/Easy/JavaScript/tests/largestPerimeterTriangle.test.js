const { largestPerimeter } = require("../largestPerimeterTriangle.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("largestPerimeter", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [2,1,2]
            Output: 5
            */
            const expected = 5;
            const actual = largestPerimeter([2,1,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [1,2,1]
            Output: 0
            */
            const expected = 0;
            const actual = largestPerimeter([1,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: [3,2,3,4]
            Output: 10
            */
            const expected = 10;
            const actual = largestPerimeter([3,2,3,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: [3,6,2,3]
            Output: 8
            */
            const expected = 8;
            const actual = largestPerimeter([3,6,2,3]);
            expect(actual).to.deep.equal(expected);
        });
    });
