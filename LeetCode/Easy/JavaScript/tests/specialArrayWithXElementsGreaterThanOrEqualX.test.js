const { specialArray } = require("../specialArrayWithXElementsGreaterThanOrEqualX.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("specialArray", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [3,5]
            Output: 2
            */
            const expected = 2;
            const actual = specialArray([3,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [0,0]
            Output: -1
            */
            const expected = -1;
            const actual = specialArray([0,0]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [0,4,3,0,4]
            Output: 3
            */
            const expected = 3;
            const actual = specialArray([0,4,3,0,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [3,6,7,7,0]
            Output: -1
            */
            const expected = -1;
            const actual = specialArray([3,6,7,7,0]);
            expect(actual).to.deep.equal(expected);
        });
    });
