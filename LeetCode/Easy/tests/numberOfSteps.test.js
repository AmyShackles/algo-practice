const { numberOfSteps } = require("../numberOfSteps.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("numberOfSteps", () => {
    it("should return the right number of steps if num is 14", () => {
        const expected = 6;
        const actual = numberOfSteps(14);
        expect(actual).to.equal(expected);
    });
    it("should return the right number of steps if num is 8", () => {
        const expected = 4;
        const actual = numberOfSteps(8);
        expect(actual).to.equal(expected);
    });
    it("should return the right number of steps if num is 123", () => {
        const expected = 12;
        const actual = numberOfSteps(123);
        expect(actual).to.equal(expected);
    });
});