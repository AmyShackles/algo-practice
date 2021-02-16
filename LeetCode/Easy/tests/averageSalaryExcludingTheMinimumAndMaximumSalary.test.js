const { average } = require("../averageSalaryExcludingTheMinimumAndMaximumSalary.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("average", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: salary = [4000,3000,1000,2000]
            Output: 2500.00000
            */
            const expected = 2500.00000;
            const actual = average([4000,3000,1000,2000]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: salary = [1000,2000,3000]
            Output: 2000.00000
            */
            const expected = 2000.00000;
            const actual = average([1000,2000,3000]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: salary = [6000,5000,4000,3000,2000,1000]
            Output: 3500.00000
            */
            const expected = 3500.00000;
            const actual = average([6000,5000,4000,3000,2000,1000]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: salary = [8000,9000,2000,3000,6000,1000]
            Output: 4750.00000
            */
            const expected = 4750.00000;
            const actual = average([8000,9000,2000,3000,6000,1000]);
            expect(actual).to.deep.equal(expected);
        });
    });
