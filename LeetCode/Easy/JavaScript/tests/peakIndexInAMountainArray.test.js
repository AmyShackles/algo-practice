const { peakIndexInMountainArray } = require("../peakIndexInAMountainArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("peakIndexInMountainArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [0,1,0]
            Output: 1
            */
            const expected = 1;
            const actual = peakIndexInMountainArray([0,1,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [0,2,1,0]
            Output: 1
            */
            const expected = 1;
            const actual = peakIndexInMountainArray([0,2,1,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [0,10,5,2]
            Output: 1
            */
            const expected = 1;
            const actual = peakIndexInMountainArray([0,10,5,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: arr = [3,4,5,1]
            Output: 2
            */
            const expected = 2;
            const actual = peakIndexInMountainArray([3,4,5,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: arr = [24,69,100,99,79,78,67,36,26,19]
            Output: 2
            */
            const expected = 2;
            const actual = peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]);
            expect(actual).to.deep.equal(expected);
        });
    });
