const { toGoatLatin } = require("../goatLatin.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("toGoatLatin", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: "I speak Goat Latin"
            Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
            */
            const expected = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa";
            const actual = toGoatLatin("I speak Goat Latin");
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: "The quick brown fox jumped over the lazy dog"
            Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
            */
            const expected = "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa";
            const actual = toGoatLatin("The quick brown fox jumped over the lazy dog");
            expect(actual).to.deep.equal(expected);
        });
    });
