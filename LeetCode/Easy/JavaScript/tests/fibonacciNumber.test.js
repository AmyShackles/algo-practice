const { fib } = require("../fibonacciNumber.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("fib", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 2
            Output: 1
            */
            const expected = 1;
            const actual = fib(2);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 3
            Output: 2
            */
            const expected = 2;
            const actual = fib(3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: n = 4
            Output: 3
            */
            const expected = 3;
            const actual = fib(4);
            expect(actual).to.deep.equal(expected);
        });
    });
