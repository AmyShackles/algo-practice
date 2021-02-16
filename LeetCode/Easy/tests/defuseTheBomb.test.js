const { decrypt } = require("../defuseTheBomb.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("decrypt", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: code = [5,7,1,4], k = 3
            Output: [12,10,16,13]
            */
            const expected = [12,10,16,13];
            const actual = decrypt([5,7,1,4],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: code = [1,2,3,4], k = 0
            Output: [0,0,0,0]
            */
            const expected = [0,0,0,0];
            const actual = decrypt([1,2,3,4],0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: code = [2,4,9,3], k = -2
            Output: [12,5,6,13]
            */
            const expected = [12,5,6,13];
            const actual = decrypt([2,4,9,3],-2);
            expect(actual).to.deep.equal(expected);
        });
    });
