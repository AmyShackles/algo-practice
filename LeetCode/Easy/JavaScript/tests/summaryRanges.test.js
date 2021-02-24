const { summaryRanges } = require("../summaryRanges.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("summaryRanges", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [0,1,2,4,5,7]
            Output: ["0->2","4->5","7"]
            */
            const expected = ["0->2","4->5","7"];
            const actual = summaryRanges([0,1,2,4,5,7]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [0,2,3,4,6,8,9]
            Output: ["0","2->4","6","8->9"]
            */
            const expected = ["0","2->4","6","8->9"];
            const actual = summaryRanges([0,2,3,4,6,8,9]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = []
            Output: []
            */
            const expected = [];
            const actual = summaryRanges([]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: nums = [-1]
            Output: ["-1"]
            */
            const expected = ["-1"];
            const actual = summaryRanges([-1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: nums = [0]
            Output: ["0"]
            */
            const expected = ["0"];
            const actual = summaryRanges([0]);
            expect(actual).to.deep.equal(expected);
        });
    });
