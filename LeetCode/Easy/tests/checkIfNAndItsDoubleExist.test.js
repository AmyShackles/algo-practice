const { checkIfExist } = require("../checkIfNAndItsDoubleExist.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("checkIfExist", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: arr = [10,2,5,3]
            Output: true
            */
            const expected = true;
            const actual = checkIfExist([10,2,5,3]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: arr = [7,1,14,11]
            Output: true
            */
            const expected = true;
            const actual = checkIfExist([7,1,14,11]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: arr = [3,1,7,11]
            Output: false
            */
            const expected = false;
            const actual = checkIfExist([3,1,7,11]);
            expect(actual).to.deep.equal(expected);
        });
    });
