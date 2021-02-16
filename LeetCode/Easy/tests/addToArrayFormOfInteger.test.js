const { addToArrayForm } = require("../addToArrayFormOfInteger.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("addToArrayForm", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = [1,2,0,0], K = 34
            Output: [1,2,3,4]
            */
            const expected = [1,2,3,4];
            const actual = addToArrayForm([1,2,0,0],34);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: A = [2,7,4], K = 181
            Output: [4,5,5]
            */
            const expected = [4,5,5];
            const actual = addToArrayForm([2,7,4],181);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: A = [2,1,5], K = 806
            Output: [1,0,2,1]
            */
            const expected = [1,0,2,1];
            const actual = addToArrayForm([2,1,5],806);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
            Output: [1,0,0,0,0,0,0,0,0,0,0]
            */
            const expected = [1,0,0,0,0,0,0,0,0,0,0];
            const actual = addToArrayForm([9,9,9,9,9,9,9,9,9,9],1);
            expect(actual).to.deep.equal(expected);
        });
    });
