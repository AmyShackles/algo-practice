const { getRow } = require("../pascalsTriangleIi.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("getRow", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: rowIndex = 3
            Output: [1,3,3,1]
            */
            const expected = [1,3,3,1];
            const actual = getRow(3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: rowIndex = 0
            Output: [1]
            */
            const expected = [1];
            const actual = getRow(0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: rowIndex = 1
            Output: [1,1]
            */
            const expected = [1,1];
            const actual = getRow(1);
            expect(actual).to.deep.equal(expected);
        });
    });
