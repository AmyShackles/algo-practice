const { sortByBits } = require("../sortIntegersByTheNumberOf1Bits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("sortByBits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [0,1,2,3,4,5,6,7,8]
            Output: [0,1,2,4,8,3,5,6,7]
            */
            const expected = [0,1,2,4,8,3,5,6,7];
            const actual = sortByBits([0,1,2,3,4,5,6,7,8]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
            Output: [1,2,4,8,16,32,64,128,256,512,1024]
            */
            const expected = [1,2,4,8,16,32,64,128,256,512,1024];
            const actual = sortByBits([1024,512,256,128,64,32,16,8,4,2,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [10000,10000]
            Output: [10000,10000]
            */
            const expected = [10000,10000];
            const actual = sortByBits([10000,10000]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: arr = [2,3,5,7,11,13,17,19]
            Output: [2,3,5,17,7,11,13,19]
            */
            const expected = [2,3,5,17,7,11,13,19];
            const actual = sortByBits([2,3,5,7,11,13,17,19]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: arr = [10,100,1000,10000]
            Output: [10,100,10000,1000]
            */
            const expected = [10,100,10000,1000];
            const actual = sortByBits([10,100,1000,10000]);
            expect(actual).to.deep.equal(expected);
        });
    });
