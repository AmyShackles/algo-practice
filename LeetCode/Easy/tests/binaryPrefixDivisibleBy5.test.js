const { prefixesDivBy5 } = require("../binaryPrefixDivisibleBy5.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("prefixesDivBy5", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [0,1,1]
            Output: [true,false,false]
            */
            const expected = [true,false,false];
            const actual = prefixesDivBy5([0,1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [1,1,1]
            Output: [false,false,false]
            */
            const expected = [false,false,false];
            const actual = prefixesDivBy5([1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: [0,1,1,1,1,1]
            Output: [true,false,false,false,true,false]
            */
            const expected = [true,false,false,false,true,false];
            const actual = prefixesDivBy5([0,1,1,1,1,1]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: [1,1,1,0,1]
            Output: [false,false,false,false,false]
            */
            const expected = [false,false,false,false,false];
            const actual = prefixesDivBy5([1,1,1,0,1]);
            expect(actual).to.deep.equal(expected);
        });
    });
