const { rangeSumBST } = require("../rangeSumOfBst.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("rangeSumBST", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
            Output: 32
            */
            const expected = 32;
            const actual = rangeSumBST([10,5,15,3,7,null,18],7,15);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
            Output: 23
            */
            const expected = 23;
            const actual = rangeSumBST([10,5,15,3,7,13,18,1,null,6],6,10);
            expect(actual).to.deep.equal(expected);
        });
    });
