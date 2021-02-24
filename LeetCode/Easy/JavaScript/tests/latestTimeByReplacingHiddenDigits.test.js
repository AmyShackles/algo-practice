const { maximumTime } = require("../latestTimeByReplacingHiddenDigits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("maximumTime", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: time = "2?:?0"
            Output: "23:50"
            */
            const expected = "23:50";
            const actual = maximumTime("2?:?0");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: time = "0?:3?"
            Output: "09:39"
            */
            const expected = "09:39";
            const actual = maximumTime("0?:3?");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: time = "1?:22"
            Output: "19:22"
            */
            const expected = "19:22";
            const actual = maximumTime("1?:22");
            expect(actual).to.deep.equal(expected);
        });
    });
