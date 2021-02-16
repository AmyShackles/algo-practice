const { shortestCompletingWord } = require("../shortestCompletingWord.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("shortestCompletingWord", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
            Output: "steps"
            */
            const expected = "steps";
            const actual = shortestCompletingWord("1s3 PSt",["step","steps","stripe","stepple"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
            Output: "pest"
            */
            const expected = "pest";
            const actual = shortestCompletingWord("1s3 456",["looks","pest","stew","show"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: licensePlate = "Ah71752", words = ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
            Output: "husband"
            */
            const expected = "husband";
            const actual = shortestCompletingWord("Ah71752",["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: licensePlate = "OgEu755", words = ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]
            Output: "enough"
            */
            const expected = "enough";
            const actual = shortestCompletingWord("OgEu755",["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]
            Output: "simple"
            */
            const expected = "simple";
            const actual = shortestCompletingWord("iMSlpe4",["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]);
            expect(actual).to.deep.equal(expected);
        });
    });
