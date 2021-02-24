const { fairCandySwap } = require("../fairCandySwap.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("fairCandySwap", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: A = [1,1], B = [2,2]
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = fairCandySwap([1,1],[2,2]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: A = [1,2], B = [2,3]
            Output: [1,2]
            */
            const expected = [1,2];
            const actual = fairCandySwap([1,2],[2,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: A = [2], B = [1,3]
            Output: [2,3]
            */
            const expected = [2,3];
            const actual = fairCandySwap([2],[1,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: A = [1,2,5], B = [2,4]
            Output: [5,4]
            */
            const expected = [5,4];
            const actual = fairCandySwap([1,2,5],[2,4]);
            expect(actual).to.deep.equal(expected);
        });
    });
