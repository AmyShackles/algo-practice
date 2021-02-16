const { isMonotonic } = require("../monotonicArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("isMonotonic", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [1,2,2,3]
            Output: true
            */
            const expected = true;
            const actual = isMonotonic([1,2,2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [6,5,4,4]
            Output: true
            */
            const expected = true;
            const actual = isMonotonic([6,5,4,4]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: [1,3,2]
            Output: false
            */
            const expected = false;
            const actual = isMonotonic([1,3,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: [1,2,4,5]
            Output: true
            */
            const expected = true;
            const actual = isMonotonic([1,2,4,5]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: [1,1,1]
            Output: true
            */
            const expected = true;
            const actual = isMonotonic([1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
