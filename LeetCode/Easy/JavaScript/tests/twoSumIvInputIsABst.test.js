const { findTarget } = require("../twoSumIvInputIsABst.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findTarget", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [5,3,6,2,4,null,7], k = 9
            Output: true
            */
            const expected = true;
            const actual = findTarget([5,3,6,2,4,null,7],9);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [5,3,6,2,4,null,7], k = 28
            Output: false
            */
            const expected = false;
            const actual = findTarget([5,3,6,2,4,null,7],28);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: root = [2,1,3], k = 4
            Output: true
            */
            const expected = true;
            const actual = findTarget([2,1,3],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: root = [2,1,3], k = 1
            Output: false
            */
            const expected = false;
            const actual = findTarget([2,1,3],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: root = [2,1,3], k = 3
            Output: true
            */
            const expected = true;
            const actual = findTarget([2,1,3],3);
            expect(actual).to.deep.equal(expected);
        });
    });
