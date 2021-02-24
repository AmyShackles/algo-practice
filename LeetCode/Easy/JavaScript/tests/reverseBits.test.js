const { reverseBits } = require("../reverseBits.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("reverseBits", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: n = 00000010100101000001111010011100
            Output:    964176192 (00111001011110000010100101000000)
            */
            const expected =    964176192 (00111001011110000010100101000000);
            const actual = reverseBits(00000010100101000001111010011100);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: n = 11111111111111111111111111111101
            Output:   3221225471 (10111111111111111111111111111111)
            */
            const expected =   3221225471 (10111111111111111111111111111111);
            const actual = reverseBits(11111111111111111111111111111101);
            expect(actual).to.deep.equal(expected);
        });
    });
