const { lemonadeChange } = require("../lemonadeChange.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("lemonadeChange", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: [5,5,5,10,20]
            Output: true
            */
            const expected = true;
            const actual = lemonadeChange([5,5,5,10,20]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: [5,5,10]
            Output: true
            */
            const expected = true;
            const actual = lemonadeChange([5,5,10]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: [10,10]
            Output: false
            */
            const expected = false;
            const actual = lemonadeChange([10,10]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: [5,5,10,10,20]
            Output: false
            */
            const expected = false;
            const actual = lemonadeChange([5,5,10,10,20]);
            expect(actual).to.deep.equal(expected);
        });
    });
