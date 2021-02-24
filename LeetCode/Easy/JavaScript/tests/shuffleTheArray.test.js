const { shuffle } = require("../shuffleTheArray.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("shuffle", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: nums = [2,5,1,3,4,7], n = 3
            Output: [2,3,5,4,1,7] 
            */
            const expected = [2,3,5,4,1,7] ;
            const actual = shuffle([2,5,1,3,4,7],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: nums = [1,2,3,4,4,3,2,1], n = 4
            Output: [1,4,2,3,3,2,4,1]
            */
            const expected = [1,4,2,3,3,2,4,1];
            const actual = shuffle([1,2,3,4,4,3,2,1],4);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: nums = [1,1,2,2], n = 2
            Output: [1,2,1,2]
            */
            const expected = [1,2,1,2];
            const actual = shuffle([1,1,2,2],2);
            expect(actual).to.deep.equal(expected);
        });
    });
