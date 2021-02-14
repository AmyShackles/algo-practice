const { defangIPaddr } = require("../defangIPaddr.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};

describe.todo("defangIPaddr", () => {
    it("should return the defanged address for 1.1.1.1", () => {
        const expected = "1[.]1[.]1[.]1";
        const actual = defangIPaddr("1.1.1.1");
        expect(actual).to.equal(expected);
    });
    Input: address = "";
    Output: it("should return the defanged address for 255.100.50.0", () => {
        const expected = "255[.]100[.]50[.]0";
        const actual = defangIPaddr("255.100.50.0");
        expect(actual).to.equal(expected);
    });
});
