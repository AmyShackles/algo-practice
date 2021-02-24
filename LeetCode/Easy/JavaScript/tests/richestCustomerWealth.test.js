const { maximumWealth } = require("../richestCustomerWealth.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maximumWealth", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: accounts = [[1,2,3],[3,2,1]]
            Output: 6
            */
            const expected = 6;
            const actual = maximumWealth([[1,2,3],[3,2,1]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: accounts = [[1,5],[7,3],[3,5]]
            Output: 10
            */
            const expected = 10;
            const actual = maximumWealth([[1,5],[7,3],[3,5]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
            Output: 17
            */
            const expected = 17;
            const actual = maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);
            expect(actual).to.deep.equal(expected);
        });
    });
